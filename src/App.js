import React from "react";
import { Route } from "react-router-dom"
import HomePage from "./component/HomePage/HomePage"
import LoginPage from "./containers/LoginPage/LoginPage"
import DashBoardPage from "./containers/dashBoardPage/DashBoardPage"
import UserRoute from "./component/routes/UserRoute"

const App = () => 
              <div className="ui container">
              
                <Route path="/"                exact component = {HomePage} />
                <Route path="/login"           exact component = {LoginPage} />
                <UserRoute path="/dashboard"   exact component = {DashBoardPage} />
              </div>

export default App;
