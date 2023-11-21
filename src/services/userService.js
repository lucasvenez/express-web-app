// src/services/userService.js

const UserModel = require('../models/userModel');

exports.getAllUsers = () => {
    return UserModel.find();
}

exports.createUser = (user) => {
    return UserModel.create(user);
}