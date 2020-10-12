const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const expressSession = require("express-session");
const { ApolloServer } = require("apollo-server-express");
const { secretSession } = require("./configs/keys");
const schema = require("./db/gql");
require("./db");
require("./services/passport");

const app = express();

const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  expressSession({
    secret: secretSession,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 180 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//* ROUTES *//
app.use("/auth", require("./routes/auth"));
app.use("/mail", require("./routes/mail"));
app.use("/league", require("./routes/league"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} 🚀`);
});
