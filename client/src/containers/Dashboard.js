import React, { useState, useEffect } from "react";
import "../reset.css";
import "../dashboard.css";
import { checkLogin, checkRank } from "../utils/utilities";

function Dashboard() {
  const [SummonerName, setSummonerName] = useState("");
  const [rank, setRank] = useState({});

  useEffect(async () => {
    const summoner_name = await checkLogin();
    setSummonerName(summoner_name.data.league.name);
    const rank = await checkRank();
    console.log(rank);
    setRank(rank);
  }, []);

  return (
    <div>
      <div class="row">
        <div
          class="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4"
        >
          <div class="box">Responsive</div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
