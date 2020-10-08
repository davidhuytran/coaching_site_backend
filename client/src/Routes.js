import React from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from './containers/Home';
import Pricing from './containers/Pricing';
import SignInSide from './components/SignInSide';
import SignUpSide from './components/SignUpSide';
import Coaches from './containers/Coaches';
import Contact from './containers/Contact';
import Dashboard from './containers/Dashboard';
import CoachProfile from './components/CoachProfile'

function Routes(props) {
    const render = () => {
        const { auth } = props
        switch(auth) {
          case null:
            return null
          case false:
          // You're NOT logged in
            return(
              <div>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/login" component={SignInSide}/>
                  <Route exact path="/signup" component={SignUpSide}/>
                  <Route exact path="/coaches" component={Coaches}/>
                  <Route exact path="/contact us" component={Contact}/>
                  <Route exact path="/features" component={Pricing} />
                  <Route exact path="/coachid=:id" component={CoachProfile} />
                </Switch>
              </div>
            )
          default:
            // You're Logged in
            return(
              <div>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/login" component={SignInSide}/>
                  <Route exact path="/signup" component={SignUpSide}/>
                  <Route exact path="/coaches" component={Coaches}/>
                  <Route exact path="/contact us" component={Contact}/>
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/coachid=:id" component={CoachProfile} />
                </Switch>
              </div>
            )
        }
      }
      return(
          <div>
          {render()}
          </div>
      )
}

function mapStateToProps({ auth }) {
    return {
      auth
    }
}

export default connect(mapStateToProps)(Routes)