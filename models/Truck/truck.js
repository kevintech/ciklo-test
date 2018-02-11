const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    licensePlate: String,
    color: String,
    doors: Number
});
module.exports = mongoose.model("Trucks", UserSchema);