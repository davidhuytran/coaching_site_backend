import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import "./index.css";

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
    alignItems: "center",
  },
  background: {
    backgroundImage: `url(/assets/images/splashart/Cool.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
}));

function Dashboard2() {
  const classes = useStyles();

  useEffect(() => {});

  return (
    <div>
      <div className={classes.background}>
        <Navbar />
        <Grid container spacing={0}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Dashboard2;
