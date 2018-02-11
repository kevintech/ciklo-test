const Driver = require("../../models/Driver");

const getAll = function(query) {
    return Driver.find().exec();
}

const getById = function(id) {
    return Driver.findById(id);
}

const createDriver = function(record) {
    var newRecord = new Driver({
        name: record.name,
        birthday: record.birthday,
        license: record.license
    });
    var error = newRecord.validateSync();
    //TODO: Proper error handling
    if (error) throw new Error("ValidationError");
    return newRecord.save().exec();
}

const updateDriver = function(id, record) {
    var newRecord = {
        name: record.name,
        birthday: record.birthday,
        license: record.license
    };
    return Driver.findByIdAndUpdate(id, newRecord).exec();
}

const removeDriver = function(id) {
    return Driver.findByIdAndRemove(id).exec();
}

module.exports = { getAll, getById, createDriver, updateDriver, removeDriver }