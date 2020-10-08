const mongoose = require("mongoose");
const { mongoURI } = require("../configs/keys");

// MONGOOSE DATABASE
mongoose.connect(mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to DB.");
});