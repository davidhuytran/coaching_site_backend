const mongoose = require("mongoose");

const { Schema } = mongoose;

const coachesDB = new Schema({
  roleID: String,
  teamID: String,
  regionID: String,
  name: String,
  real_name: String,
  stream: String,
});

module.exports = mongoose.model("Coaches", coachesDB);
