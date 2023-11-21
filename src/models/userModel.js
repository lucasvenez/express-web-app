// src/models/userModel.js

// const mongoose = require('mongoose');

//const userSchema = new mongoose.Schema({
//    name: String,
//    email: String
//});

// const UserModel = mongoose.model('User', userSchema);

const users = [
    {
        name: 'Tico',
        email: 'tico@desenho.com'
    },
    {
        name: 'Teco',
        email: 'teco@desenho.com'
    }
];

exports.find = () => {
    return users;
};

exports.create = (user) => {

    let isUserValid = 'name' in user;
    isUserValid &= 'email' in user;

    if (isUserValid) {
        users.push(user);
        return user;
    }

    throw Error('invalid user data')
};
