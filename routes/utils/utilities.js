const { API_KEY } = require("../../configs/keys");
const axios = require("axios");

async function getAccount(summoner_name) {
  const response = await axios({
    method: "get",
    url: `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${API_KEY}`,
  });
  return response;
}

async function getStats(summoner_id) {
  const response = await axios({
    method: "get",
    url: `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summoner_id}?api_key=${API_KEY}`,
  });
  return response;
}

module.exports = { getAccount, getStats };
