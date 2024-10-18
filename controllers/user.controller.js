const userModel = require("../models/user.model");

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getUserByUsername = async (req, res) => {
    try {
        const user = await userModel.find({username: req.params.username});
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createUser = async (req, res) => {
    try {
      const user = await userModel.create(req.body);
      res.status(200).json(user);
    }
    catch (error) {
      res.status(500).json({message: error.message});
    }
}

module.exports = {getAllUsers, getUserByUsername, createUser};