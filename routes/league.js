const router = require("express").Router();
const { User } = require("../db/models");
const axios = require("axios");
const { getAccount, getStats } = require("./utils/utilities");

router.get("/stats", async (req, res) => {
  const { data } = await getStats(req.user.league.id);

  return res.send(data);
});

router.post("/addAccount", async (req, res) => {
  const { summonerName } = req.body;
  const { data } = await getAccount(summonerName);
  const user = await User.findOne({ email: req.user.email });
  user.league = data;
  user.save();
  return res.send(req.user);
});

module.exports = router;
