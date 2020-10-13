import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Route from './Routes';

const useStyles = makeStyles((theme) => ({
  background: {
    minHeight: '100vh',
    // backgroundColor: '#666',
    // background: '#67B26F',  /* fallback for old browsers */
    background: 'white',
    // background: '-webkit-linear-gradient(to right, #4ca2cd, #67B26F)',  /* Chrome 10-25, Safari 5.1-6 */
    // background: 'linear-gradient(to right, #4ca2cd, #67B26F)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
})
)

function App(props) {
  const classes = useStyles();
  useEffect(()=> {
    props.fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line 
  },[])



  return (
    <Router>
            <CssBaseline />
    <div className={classes.background}>

      <Route />
    </div>
    </Router>
  );
}

function mapStateToProps({ auth }) {
  return {
    auth
  }
}


export default connect(mapStateToProps, actions)(App);
