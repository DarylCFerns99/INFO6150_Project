const express = require("express");
const userRouter = express.Router();

const { newUser, editUser, deleteUser, getUser, getAllUsers } = require("../controllers/userController");

userRouter.post('/create', newUser);

// Edit user route
userRouter.put('/edit/:email', editUser)

// Delete user route
userRouter.delete('/delete/:email', deleteUser)

// Validate user
userRouter.post('/getUser', getUser)

// Fetch users route
userRouter.get('/getAll', getAllUsers)

module.exports = userRouter;