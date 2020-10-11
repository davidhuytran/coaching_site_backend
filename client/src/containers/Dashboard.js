import React, { useState, useEffect } from "react";
import "../reset.css";
import "../dashboard.css";
import Navbar from "../components/Navbar";
import { gql, useQuery } from "@apollo/client";
import { get_user, get_coaches } from "../gql";
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
      <div className="background">
        <div className="wrapper">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            cras adipiscing enim eu turpis egestas. Laoreet sit amet cursus sit
            amet. Scelerisque mauris pellentesque pulvinar pellentesque
            habitant. Sem viverra aliquet eget sit amet tellus cras adipiscing
            enim. Arcu dui vivamus arcu felis bibendum ut tristique. Justo nec
            ultrices dui sapien. Vitae congue eu consequat ac felis.
            Pellentesque diam volutpat commodo sed egestas egestas fringilla
            phasellus faucibus. Pretium viverra suspendisse potenti nullam ac
            tortor vitae. Libero volutpat sed cras ornare arcu dui vivamus arcu.
          </div>
          <div>
            quis blandit turpis cursus in hac habitasse platea dictumst quisque
            sagittis purus sit amet volutpat consequat mauris nunc congue nisi
            vitae suscipit tellus mauris a diam maecenas sed enim ut
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
