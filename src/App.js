import React from "react";
import { Route } from "react-router-dom"
import HomePage from "./component/HomePage/HomePage"
import LoginPage from "./containers/loginPage/LoginPage"
import DashBoardPage from "./containers/dashBoardPage/DashBoardPage"
import UserRoute from "./component/routes/UserRoute"
import LawPage from "./containers/lawPage/LawPage"

const App = () => 
              <div className="ui container">
            
                <Route path="/"                exact component = {HomePage} />
                <Route path="/login"           exact component = {LoginPage} />
                <UserRoute path="/dashboard"   exact component = {DashBoardPage} />
                <UserRoute path="/law"         exact component = {LawPage} />

              </div>

export default App;
