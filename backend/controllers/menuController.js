const Menu = require("../models/menu");

const newMenuItem = async (req, res) => {
    var menu = new Menu({
        ...req.body
    })

    await menu.save()
        .then(response => {
            res.status(200).json({"message": `Menu item ${response.title} created successfully`, "data": response});
        })
        .catch(err => {
            if (Object.keys(err?.errors ?? {}).length > 0) {
                res.status(500).json({"message": Object.keys(err.errors).map(field => err.errors[field].message)});
            } else {
                res.status(500).json({"message": `Menu ${user.email} already exists`});
            }
        })
}

String.prototype.toObjectId = function() {
    var ObjectId = (require('mongoose').Types.ObjectId);
    return new ObjectId(this.toString());
}

const getMenuItem = (ids=[]) => {
    return new Promise(async (resolve, _reject) => {
        await Menu.find({ _id: { "$in": ids.map(ele => ele.toObjectId()) } })
            .then(resp => {
                let temp = {};
                resp.forEach(ele => {
                    let tempData = {
                        ...ele["_doc"],
                    }
                    // delete tempData["image"];
                    let key = JSON.stringify(tempData);
                    temp[key] = ids.filter(id => id === ele._id.toString()).length;
                })
                resolve(temp);
            })
            .then(err => {
                resolve([]);
            })
    })
}

const fetchMenuItems = async (req, res) => {
    await Menu.find(req?.body ?? {})
        .then(resp => {
            res.status(200).json({"message": `Fetched menu items successfully`, "data": resp});
        })
        .catch(err => {
            res.status(500).json({"message": "Failed to get menu item(s)", "error": err});
        })
}

const bulkInsertMenuItems = async (req, res) => {
    await Menu.insertMany(req.body.data)
        .then(resp => res.status(200).json({"message": `Fetched menu items successfully`, "data": resp}))
        .catch(err => res.status(500).json({"message": "Failed to get menu item(s)", "error": err}))
}

module.exports = { newMenuItem, getMenuItem, fetchMenuItems, bulkInsertMenuItems }