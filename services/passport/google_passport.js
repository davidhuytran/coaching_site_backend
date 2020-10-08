const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = require("../../configs/keys");
const { User } = require("../../db/models")

const googleStrategy = new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
);

module.exports = googleStrategy;
