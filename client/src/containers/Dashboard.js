import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  checkLogin,
  checkRank,
  convertELO,
  convertTimestamp,
} from "../utils/utilities";
import Navbar from "../components/Navbar";
import { Line } from "react-chartjs-2";
import { gql, useQuery } from '@apollo/client';

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

const APPOINTMENT_QUERY = gql`
  query Appointment($email: String) {
    user(email: $email) {
      name
      appointments {
        id
        coach {
          id
          name
        }
        date
        time
      }
    }
  }`;


function Dashboard(props) {

  const [summonerName, setSummonerName] = useState("");
  const [rank, setRank] = useState({});
  const [chart, setChart] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      const user = await checkLogin();
      await setSummonerName(user.data.league.name);
      await setUser(user.data);
      const rank = await checkRank();
      await setRank(rank);
      const timestamps = user.data.progress.map(
        (league) =>
          new Date(league.timeStamp).getMonth() +
          1 +
          "/" +
          new Date(league.timeStamp).getDate()
      );
      const rankOverTime = await convertELO(user.data.progress);
      setChart({
        labels: timestamps,
        datasets: [
          {
            label: "ELO",
            fill: false,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: rankOverTime,
          },
        ],
      });
    }
    fetchData();
    //Important to include [chart] so that it constantly updates
  }, []);
  // style={{marginRight: spacing + 'em'}}

  const classes = useStyles();
  const {loading, error, data } = useQuery(APPOINTMENT_QUERY, {
    variables: {email: user.email}
  });
  if (loading) return 'Loading...';
  if (error) return 'Something bad has happened';
  if (!data.user) return (
    <div> Loading </div>
  )

  return (
    <div>
      <div className={classes.background}>
        <Navbar />
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
                  <div className={classes.stats} style={{ color: "green" }}>
                    {rank.wins}
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.stats} style={{ color: "red" }}>
                    {rank.losses}{" "}
                  </div>
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
              <div className={classes.title}>
                <div>Appointments</div>
                <div>
                  <ul className={classes.appointments}>
                    {data.user.appointments.map(({id, date, time, coach}) => (
                      <li key={id}>{date} @ {time} with
                         <a href={"http://localhost:3000/coachid=" + coach.id}> {coach.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Dashboard;
