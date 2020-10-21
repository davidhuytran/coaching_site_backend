import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Footer from "../components/Footer";

import FaceIcon from '@material-ui/icons/Face';

import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(/assets/images/splashart/Cool.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  white: {
    minHeight: "100%",
    [theme.breakpoints.down("xs")]: {
      minHeight: "100vh",
    },
    // backgroundColor: 'white',
    backgroundColor: "#f5f5f5",
    [theme.breakpoints.between("sm", "xl")]: {
      borderRadius: 30,
    },
  },
  paper: {
    [theme.breakpoints.between("sm", "xl")]: {
      marginTop: theme.spacing(8),
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



function Dashboard2() {
  const [value, setValue] = useState({});
  const classes = useStyles();

  useEffect(() => {});

  function handleChange(e) {
    e.preventDefault();
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  }
  async function submitHandler(e) {
    e.preventDefault();
    // console.log(value.summonerName);
    
  }

  return (
    <React.Fragment>
      <div className={classes.background}>
        <Navbar />
        <Container component="main" maxWidth="xs" className={classes.white}>
        <CssBaseline/>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <FaceIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add Account
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                name="summonerName"
                variant="outlined"
                fullWidth
                value={value.summonerName || ""} 
                onChange={handleChange}
                id="summonerName"
                label="Summoner Name"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={submitHandler}
                >
                  Submit
                </Button>
            </form>
          </div>
          <Box mt={5}>
            <Footer />
          </Box>
        </Container>
      </div>
      </React.Fragment>
  );
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default Dashboard2;
// export default connect(mapStateToProps)(Dashboard2);
