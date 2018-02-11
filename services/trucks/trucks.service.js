const Truck = require("../../models/Truck");

const getAll = function(query) {
    return Truck.find().exec();
}

const getById = function(id) {
    return Truck.findById(id);
}

const createTruck = function(record) {
    var newRecord = new Truck({
        licensePlate: record.licensePlate,
        color: record.color,
        doors: record.doors
    });
    var error = newRecord.validateSync();
    //TODO: Proper error handling
    if (error) throw new Error("ValidationError");
    return newRecord.save().exec();
}

const updateTruck = function(id, record) {
    var newRecord = {
        licensePlate: record.licensePlate,
        color: record.color,
        doors: record.doors
    };
    return Truck.findByIdAndUpdate(id, newRecord).exec();
}

const removeTruck = function(id) {
    return Truck.findByIdAndRemove(id).exec();
}

module.exports = { getAll, getById, createTruck, updateTruck, removeTruck }