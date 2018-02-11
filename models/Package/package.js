const mongoose = require("mongoose");
const PackageSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "Description field is required"]
    }
});
module.exports = mongoose.model("Packages", PackageSchema);