const router = require("express").Router();
const passport = require("passport");
const { User } = require("../db/models");

router.post("/signup", async (req, res) => {
  const { email, username, password, firstName, lastName } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    const newUser = await new User({
      name: {
        first: firstName,
        last: lastName,
      },
      email,
      username,
    });
    newUser.password = newUser.hashPassword(password);
    newUser.save();
    req.logIn(newUser, (err) => {
      if (err) {
        return next(err);
      }
      if (newUser) {
        return res.json({
          status: 100,
          success: true,
        });
      }
    });
  }
  return res.send("Account already exists.");
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info);
    }
    // LogIn User
    // req / res held in closure
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      if (user) {
        return res.json({
          status: 100,
          success: true,
        });
      }
    });
  })(req, res, next);
});

router.get("/user", (req, res) => {
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/getAllUsers", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
  })
);

router.get(
  "google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);
module.exports = router;
