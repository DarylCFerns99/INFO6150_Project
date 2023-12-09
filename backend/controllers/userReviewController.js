const UserReview = require("../models/userReview");

const createReview = async (req, res) => {
    var userReview = new UserReview({
        ...req.body
    })

    await userReview.save()
        .then(response => {
            res.status(200).json({"message": `User Review created successfully`, "data": response});
        })
        .catch(err => {
            res.status(500).json({"message": `User Review already exists`, "error": err});
        })
}

const getReviews = async (req, res) => {
    await UserReview.find(req?.body ?? {}).sort({ createdAt: 'desc' })
        .then(resp => {
            res.status(200).json({"message": `Fetched reviews successfully`, "data": resp});
        })
        .catch(err => {
            res.status(500).json({"message": `Failed to fetch reviews`, "error": err});
        })
}

const editComment = async (req, res) => {
    let tempData = {...(req?.body ?? {})}
    await UserReview.findByIdAndUpdate(tempData?.id || "none", tempData)
        .then(async resp => {
            res.status(200).json({"message": `Edited review successfully`, "data": resp});
        })
        .catch(err => {
            res.status(500).json({"message": `Failed to edit review`, "error": err});
        })
}

module.exports = { createReview, getReviews, editComment }