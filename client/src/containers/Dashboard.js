import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { checkLogin, checkRank, convertTimestamp } from "../utils/utilities";
import Navbar from "../components/Navbar";
import { Line } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "64px 32px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "60vh",
    borderRadius: 30,
  },
  emblemRank: {
    marginTop: "30px",
    maxWidth: "50%",
  },
  title: {
    color: "black",
    fontSize: "30px",
  },
  stats: {
    margin: "16px",
    color: "black",
    fontSize: "20px",
  },
  background: {
    backgroundImage: `url(/assets/images/splashart/Fiddlesticks.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  rank: {
    fontSize: "26px",
    color: "black",
    marginTop: "10px",
  },
}));

function Dashboard() {
  const [summonerName, setSummonerName] = useState("");
  const [rank, setRank] = useState({});
  const [timestamps, setTimestamps] = useState([]);
  const [chart, setChart] = useState({});

  useEffect(() => {
    async function fetchData() {
      const user = await checkLogin();
      await setSummonerName(user.data.league.name);
      const rank = await checkRank();
      await setRank(rank);
      const timestamps = await convertTimestamp(user.data.progress);
      await setTimestamps(timestamps);
      setChart({
        labels: timestamps,
        datasets: [
          {
            label: "ELO",
            fill: false,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [1800, 1900],
          },
        ],
      });
    }
    fetchData();
    //Important to include chart so that it constantly updates
  }, [chart]);

  const classes = useStyles();
  return (
    <div>
      <Navbar />
      {/* {timestamps} */}
      <div className={classes.background}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.title}>{summonerName}</div>
              <img
                className={classes.emblemRank}
                src={`/assets/images/ranks/${rank.tier}.png`}
              />
              <div className={classes.rank}>
                {rank.tier} {rank.rank}
              </div>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <div className={classes.stats}>Wins: {rank.wins}</div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.stats}>Losses: {rank.losses} </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.title}>Rank over time</div>
              <div>
                {" "}
                <Line
                  data={chart}
                  options={{
                    title: {
                      display: true,
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <div className={classes.title}>Appointments</div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Dashboard;
