import React, { useState } from "react";
import "../reset.css";
import "../dashboard.css";
import { gql, useQuery } from "@apollo/client";
import { get_user, get_coaches } from "../gql";
import axios from "axios";

function Dashboard() {
  const [SummonerName, setSummonerName] = useState("");

  async function userData() {
    const response = await axios.get("/auth/user");
    if (response.data) {
      console.log(response.data);
      setSummonerName(response.data.league.name);
    }
  }

  userData();

  return (
    <div>
      <div className="background"> </div>
      <div className="profile">
        <h1>{SummonerName}</h1>
        <img className="emblemRank" src={`/assets/images/ranks/Diamond.png`} />
        <h2>Diamond II</h2>
        <div className="left"> Wins: 41</div>
        <div className="right">Losses: 41</div>
      </div>
    </div>
  );
}
export default Dashboard;
