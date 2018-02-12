const Package = require("../../models/Package");

const getAll = function(query) {
    return Package.find().exec();
}

const getById = function(id) {
    return Package.findById(id);
}

const createPackage = function(record) {
    var newRecord = new Package({
        description: record.description
    });
    var error = newRecord.validateSync();
    //TODO: Proper error handling
    if (error) throw new Error("ValidationError");
    return newRecord.save();
}

const updatePackage = function(id, record) {
    var newRecord = {
        description: record.description
    };
    return Package.findByIdAndUpdate(id, newRecord).exec();
}

const removePackage = function(id) {
    return Package.findByIdAndRemove(id).exec();
}

module.exports = { getAll, getById, createPackage, updatePackage, removePackage }