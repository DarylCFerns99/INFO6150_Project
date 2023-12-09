const Order = require("../models/order");
const { getMenuItem } = require("./menuController");

const createOrder = async (req, res) => {
    let order = Order({
        ...req.body
    })

    await order.save()
        .then(resp => {
            if (resp) {
                res.status(200).json({"message": "Successfully created order", "data": resp});
            } else {
                res.status(200).json({"message": "No order found in database", "data": resp});
            }
        })
        .catch(error => res.status(500).json({"message": "Failed to create order", "error": error}));
}

const getOrder = async (req, res) => {
    await Order.find(req.body).sort({ createdAt: 'desc' })
        .then(async response => {
            if (response) {
                let tempData = response.map(async ele => {
                    let tempRes = {
                        ...ele["_doc"],
                    }
                    await getMenuItem(tempRes?.menu_items_id ?? [])
                        .then(res => {
                            tempRes["menu_items_id"] = res;
                        })
                    return tempRes;
                })
                let data = {}
                await Promise.all(tempData)
                    .then(result => {
                        data = result
                    })
                res.status(200).json({"message": "Fetched order(s) successfully", "data": data});
            } else {
                res.status(200).json({"message": `Could not find order(s)`});
            }
        })
        .catch(error => res.status(500).json({"message": "Failed to get order(s)", "error": error}));
}

module.exports = { createOrder, getOrder }