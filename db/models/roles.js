const mongoose = require("mongoose");

const { Schema } = mongoose;

const rolesDB = new Schema({
  name: String,
});

module.exports = mongoose.model("Roles", rolesDB);
