const passport = require("passport");
const localStrategy = require("./local_passport");
const { User } = require("../../db/models");
const googleStrategy = require("./google_passport");

passport.serializeUser((user, done) => {
  // store user.id
  done(null, user.id);
});
// callback the id we store
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(localStrategy);
passport.use(googleStrategy);

module.exports = passport
