import React from "react";
import { Route } from "react-router-dom"
import HomePage from "./component/HomePage/HomePage"
import LoginPage from "./containers/loginPage/LoginPage"
import DashBoardPage from "./containers/dashBoardPage/DashBoardPage"
import UserRoute from "./component/routes/UserRoute"
import GuestRoute from "./component/routes/GuestRoute"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import LawPage from "./containers/lawPage/LawPage"
import DevelopmentPage from "./containers/developmentPage/DevelopmentPage"
import NavigationBar from "./component/navigation/NavigationBar";

const App = ({ location, isAuthenticated }) => (
              <div className="ui container">
               {isAuthenticated && <NavigationBar />}
            
                <Route path="/"                                  exact component = {HomePage} />
                <GuestRoute location={location} path="/login"    exact component={LoginPage} />
                <UserRoute location={location} path="/dashboard" exact component={DashBoardPage} />
                <UserRoute path="/law"                           exact component = {LawPage} />
                <UserRoute path="/development"                exact component = {DevelopmentPage} />

              </div>
)
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps)(App);