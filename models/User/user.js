const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String
});
module.exports = mongoose.model("Users", UserSchema);