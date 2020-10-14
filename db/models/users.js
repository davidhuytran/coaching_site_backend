const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const usersDB = new Schema({
  name: {
    first: String,
    last: String,
  },
  email: String,
  username: String,
  password: String,
  isActive: false,
  league: {
    id: String,
    accountId: String,
    puuid: String,
    name: String,
    profileIconId: Number,
    revisionDate: Number,
    summonerLevel: Number,
  },
  progress: Array,
});

usersDB.methods = {
  validatePassword(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword(plainTextPassword) {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

module.exports = mongoose.model("Users", usersDB);
