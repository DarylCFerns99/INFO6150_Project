const User = require("../models/user");

const newUser = async (req, res) => {
    // Creating user schema with data from request body
    var user = new User({
        ...req.body
    });
    
    // Svaing user
    await user.save()
        .then(response => {
            res.status(200).json({"message": `User ${response.email} created successfully`, "data": response});
        })
        .catch(err => {
            if (Object.keys(err?.errors ?? {}).length > 0) {
                res.status(500).json({"message": Object.keys(err.errors).map(field => err.errors[field].message)});
            } else {
                res.status(500).json({"message": `User ${user.email} already exists`});
            }
        });
}

const editUser = async (req, res) => {
    const email = req.params?.email || "";

    let tempBody = {...req.body};
    if (tempBody.email) {
        delete tempBody.email;
    }

    // Finding user by email and updating data
    // await User.findOneAndUpdate({ email }, {"$set": {...tempBody}}, { runValidators: true, returnDocument: "after" })
    //     .then(async resp => {
    //         if (resp) {
    //             res.status(200).json({"message": `User ${email} updated successfully`, "data": resp});
    //         } else {
    //             res.status(200).json({"message": `Could not find user ${email}`});
    //         }
    //     })
    //     .catch(err => {
    //         if (Object.keys(err?.errors ?? {}).length > 0) {
    //             res.status(500).json({"message": Object.keys(err.errors).map(field => err.errors[field].message)});
    //         } else {
    //             res.status(500).json({"message": `Failed to find User ${email}`});
    //         }
    //     });

    // Finding user
    await User.findOne({ email })
        .then(async resp => {
            if (resp) {
                Object.keys(tempBody).forEach(key => {
                    resp[key] = tempBody[key];
                })
                // Saving with updated data
                await resp.save()
                    .then(response => {
                        res.status(200).json({"message": `User ${response.email} created successfully`, "data": response});
                    })
                    .catch(err => {
                        if (Object.keys(err?.errors ?? {}).length > 0) {
                            res.status(500).json({"message": Object.keys(err.errors).map(field => err.errors[field].message)});
                        } else {
                            res.status(500).json({"message": `Failed to update User ${email}`});
                        }
                    });
            } else {
                res.status(200).json({"message": `Could not find user ${email}`});
            }
        })
        .catch(_err => {
            res.status(500).json({"message": `Error finding user ${email}`});
        });
}

const deleteUser = async (req, res) => {
    const email = req.params.email;

    // Deleting user based on email
    await User.deleteOne({email})
        .then(resp => {
            // Checks if user was present in database
            if (resp.deletedCount === 0) {
                res.status(500).json({"message": `User ${email} not found`});
            } else {
                res.status(200).json({"message": `User ${email} deleted successfully`, "data": resp});
            }
        })
        .catch(err => res.status(500).json({"message": "Failed to delete user", "error": err}));
}

const getUser = async (req, res) => {
    let user = {...req.body}
    await User.findOne({ email: user?.email || "" })
        .then(async resp => {
            if (resp) {
                await resp.comparePassword(user?.password || "", (err, isMatch) => {
                    if (err) {
                        res.status(500).json({"message": `Failed to validate password for user ${user?.email || ""}`, "error": err});
                        return;
                    }

                    if (isMatch) {
                        res.status(200).json({"message": `Login Successfull for user ${user?.email || ""}`, "data": resp});
                    } else {
                        res.status(500).json({"message": `Invalid password for user ${user?.email || ""}`});
                    }
                })
            } else {
                res.status(500).json({"message": `Unable to find user ${user?.email || ""}`});
            }
        })
        .catch(err => {
            res.status(500).json({"message": `Failed to find user ${user?.email || ""}`, "error": err});
        })
}

const getAllUsers = async (_req, res) => {
    // Get all users from the database
    await User.find()
        .then(resp => {
            // Checks if database is empty
            if (resp.length === 0) {
                res.status(200).json({"message": "No users found in database", "data": resp});
            } else {
                res.status(200).json({"message": "Users data fetched successfully", "data": resp});
            }
        })
        .catch(err => res.status(500).json({"message": "Failed to get users", "error": err}));
}

module.exports = { newUser, editUser, deleteUser, getUser, getAllUsers }