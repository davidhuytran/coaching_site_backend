import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
      fontFamily: 'Architects Daughter',
      fontWeight: 900,
    },
    logo: {
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: 'black',
    },
    link: {
      textTransform: 'uppercase',
      color: 'black',
      textDecoration: 'none',
      margin: theme.spacing(1, 1.5),
    },
    icon: {
      height: '35px'
    }
  }));
  

function Navbar(props) {

    const classes = useStyles();

    const render = () => {
      switch(props.auth) {
        case null:
          // You're loading
          return null
        case false:
          // You're logged out
          return(
            <div>
            <Link variant="button" color="textPrimary" to="/features" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" to="/coaches" className={classes.link}>
              Coaches
            </Link>
            <Link variant="button" color="textPrimary" to="/contact us" className={classes.link}>
              Contact
            </Link>
            <Link color="primary" variant="outlined" className={classes.link} to="/login">
              Login
            </Link>
            </div>
          )
        default:
          // You're logged in
          return (
            <div>
            <Link variant="button" color="textPrimary" to="/dashboard" className={classes.link}>
              Dashboard
            </Link>
            <Link variant="button" color="textPrimary" to="/coaches" className={classes.link}>
              Coaches
            </Link>
            <Link variant="button" color="textPrimary" to="/contact us" className={classes.link}>
              Contact
            </Link>
            <a color="primary" variant="outlined" className={classes.link} href="/auth/logout">Logout</a>
            </div>
          )
      }
    };
    
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link to="/" className={classes.logo}>
              <img src="/assets/images/coaches/LOL_Worlds_icon.png" className={classes.icon}/>Worlds Coach
            </Link>
          </Typography>
          <nav>
            {/* <Link variant="button" color="textPrimary" to="/features" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" to="/coaches" className={classes.link}>
              Coaches
            </Link>
            <Link variant="button" color="textPrimary" to="/contact us" className={classes.link}>
              Contact
            </Link> 
            <Link color="primary" variant="outlined" className={classes.link} to="/login">
              Login
              </Link> */}
            {render()}
        
          </nav> 
        </Toolbar>
      </AppBar>
      </React.Fragment>
    )
}
function mapStateToProps({ auth }) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Navbar)