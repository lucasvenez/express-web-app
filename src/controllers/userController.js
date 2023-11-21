const UserService = require('../services/userService')

exports.getAllUsers = (req, res) => {
    const users = UserService.getAllUsers();
    res.json(users);
}

exports.createUser = (req, res) => {
    const newUser = req.body;
    const createdUser = UserService.createUser(newUser);
    res.json(createdUser);
}

