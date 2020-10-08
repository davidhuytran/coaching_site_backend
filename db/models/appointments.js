const mongoose = require("mongoose");

const { Schema } = mongoose;

const appointmentsDB = new Schema({
  date: String,
  time: String,
  user_id: String,
  coach_id: String,
});

module.exports = mongoose.model("Appointments", appointmentsDB);
