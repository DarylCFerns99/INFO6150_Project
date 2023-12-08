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

module.exports = { newMenuItem }