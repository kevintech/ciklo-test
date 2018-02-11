const mongoose = require("mongoose");
const TruckSchema = new mongoose.Schema({
    licensePlate: {
        type: String,
        unique: true,
        required: [true, "License plate field is required"]
    },
    color: {
        type: String,
        required: [true, "Color field is required"]
    },
    doors: {
        type: Number,
        required: [true, "Doors field is requiresd"],
        min: 2,
        max: 6
    }
});
module.exports = mongoose.model("Trucks", TruckSchema);