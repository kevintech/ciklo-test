const User = require("../../models/User");

const getAll = function(query) {
    return User.find().exec();
}

const getById = function(id) {
    return User.findById(id);
}

const createUser = function(record) {
    var newRecord = new User({
        name: record.name,
        username: record.username,
        email: record.email
    });
    return newRecord.save().exec();
}

const updateUser = function(id, record) {
    var newRecord = {
        name: record.name,
        username: record.username,
        email: record.email
    };
    return User.findByIdAndUpdate(id, newRecord).exec();
}

const removeUser = function(id) {
    return User.findByIdAndRemove(id).exec();
}

module.exports = { getAll, getById, createUser, updateUser, removeUser }