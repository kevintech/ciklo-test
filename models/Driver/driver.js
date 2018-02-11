const mongoose = require("mongoose");
const DriverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    birthday: {
        type: Date,
        required: [true, "Birthday field is required"]
    },
    license: {
        type: String,
        unique: true,
        required: [true, "License field is requiresd"]
    }
});
module.exports = mongoose.model("Drivers", DriverSchema);