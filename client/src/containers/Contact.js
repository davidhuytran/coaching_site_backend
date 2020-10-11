import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ContactMail from "@material-ui/icons/ContactMail";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer";
import { handleMail } from "../utils/utilities";
import Navbar from "../components/Navbar";

const random = Math.floor(Math.random() * 5);

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(/assets/images/${random}.jpg)`,
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

function Contact(props) {
  const [value, setValue] = useState({});
  const classes = useStyles();

  useEffect(() => {
    // Run! Like go get some data from an API.

    const { auth } = props;
    if (auth) {
      // if(auth.email) {
      //   setValue({
      //     email: auth.email
      //   })
      // }
      // if(auth.name && auth.name.first) {
      //   setValue({
      //     firstName: auth.name.first,
      //   })
      // }
      // if(auth.name && auth.name.last) {
      //   setValue({
      //     lastName: auth.name.last,
      //   })
      // }
      setValue({
        email: auth.email,
        firstName: auth.name.first,
        lastName: auth.name.last,
      });
    }
    return () => {
      setValue({});
    };
    // eslint-disable-next-line
  }, [props.auth]);

  function onChange(e) {
    e.preventDefault();
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  }

  async function messageHandler(e) {
    e.preventDefault();
    const { auth } = props;
    const response = await handleMail(value);
    if (auth) {
      setValue({
        firstName: auth.name.first,
        lastName: auth.name.last,
        email: auth.email,
      });
    } else {
      setValue({});
    }
    // if(res) {
    //   console.log('hello ' + res)
    // }
    console.log(response);
  }

  return (
    <React.Fragment>
      <div className={classes.background}>
        <Navbar />
        <Container component="main" maxWidth="xs" className={classes.white}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <ContactMail />
            </Avatar>
            <Typography component="h1" variant="h5">
              Contact Us
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    value={value.firstName || ""}
                    onChange={onChange}
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={value.lastName || ""}
                    onChange={onChange}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={value.email || ""}
                    onChange={onChange}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    // variant="outlined"
                    required
                    fullWidth
                    multiline
                    rows={5}
                    value={value.message || ""}
                    onChange={onChange}
                    name="message"
                    label="Message"
                    type="text"
                    id="message"
                    autoComplete="message"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={messageHandler}
                // onClick={e => handleMail(e, data)}
              >
                Send
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

export default connect(mapStateToProps)(Contact);
