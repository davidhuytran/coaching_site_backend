import axios from "axios";

export async function handleLogin(data) {
  console.log(data);
  const response = await axios.post("/auth/login", {
    email: data.email,
    password: data.password,
  });
  return response;
}

export async function handleSignup(data) {
  console.log(data);
  const response = await axios.post("/auth/signup", {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
  });
  return response;
}

export async function handleMail(data) {
  console.log(data);
  const response = await axios.post("/mail/sendMail", {
    firstName: data.firstName,
    lastName: data.lastName,
    to: data.email,
    subject: "Contact",
    text: data.message,
  });
  return response;
}

export async function addSummoner(data) {
  console.log(data);
  const response = await axios.post("/league/addAccount", {
    summonerName: data.summonerName
  });
  return response;
}

export async function checkLogin() {
  const response = await axios.get("/auth/user");
  if (response.data) {
    return response;
  }
}

export async function checkRank() {
  const { data } = await axios.get("/league/stats");
  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].queueType == "RANKED_SOLO_5x5") {
        return data[i];
      }
    }
  }
}

export async function convertTimestamp(progress) {
  const timestamps = [];
  for (let i = 0; i < progress.length; i++) {
    timestamps.push(progress[i].timeStamp);
  }
  return timestamps;
}

export async function convertELO(progress) {
  const elo = {
    IRONIV: 200,
    IRONIII: 300,
    IRONII: 400,
    IRONI: 500,
    BRONZEIV: 600,
    BRONZEIII: 700,
    BRONZEII: 800,
    BRONZEI: 900,
    SILVERIV: 1000,
    SILVERIII: 1100,
    SILVERII: 1200,
    SILVERI: 1300,
    GOLDIV: 1400,
    GOLDIII: 1500,
    GOLDII: 1600,
    GOLDI: 1700,
    PLATINUMIV: 1800,
    PLATINUMIII: 1900,
    PLATINUMII: 2000,
    PLATINUMI: 2100,
    DIAMONDIV: 2200,
    DIAMONDIII: 2300,
    DIAMONDII: 2400,
    DIAMONDI: 2500,
    MASTER: 2600,
    GRANDMASTER: 2700,
    CHALLENGER: 2800,
  };

  const rankOverTime = [];

  for (let i = 0; i < progress.length; i++) {
    console.log("HELLO");
    const tier = progress[i].response[0].tier;
    const rank = progress[i].response[0].rank;
    const lp = progress[i].response[0].leaguePoints;
    const eloNumber = elo[`${tier}${rank}`] + lp;
    rankOverTime.push(eloNumber);
  }
  console.log(rankOverTime);
  return rankOverTime;
}
