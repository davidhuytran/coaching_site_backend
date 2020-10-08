const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const regionsDB = new Schema({
    name: String
});

module.exports = mongoose.model("Regions", regionsDB);