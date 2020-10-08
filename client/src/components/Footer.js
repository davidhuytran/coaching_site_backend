import React from 'react';
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

  const useStyles = makeStyles((theme) => ({
    copyright: {
      textDecoration: 'none',
      color: 'black',
      // fontFamily: 'Oswald'
      fontFamily: 'Architects Daughter',
      fontWeight: 900,
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
    },
  }));

  function Copyright() {
    const classes = useStyles();
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="/" className={classes.copyright}>
          Coaching-Site
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  export default function Footer() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </footer>
      </React.Fragment>
    );
  }