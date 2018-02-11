const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    username: {
        type: String,
        unique: true,
        required: [true, "A username value must be provided"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email field is required"]
    }
});
module.exports = mongoose.model("Users", UserSchema);