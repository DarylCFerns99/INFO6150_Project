const express = require("express");
const userRouter = express.Router();

const { newUser, editUser, deleteUser, getUser, getAllUsers } = require("../controllers/userController");

userRouter.post('/createUser', newUser);

// Edit user route
userRouter.put('/editUser/:email', editUser)

// Delete user route
userRouter.delete('/deleteUser/:email', deleteUser)

// Validate user
userRouter.post('/getUser', getUser)

// Fetch users route
userRouter.get('/getAllUsers', getAllUsers)

module.exports = userRouter;