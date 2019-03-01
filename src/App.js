import React from "react";
import { Route } from "react-router-dom"
import HomePage from "./component/HomePage/HomePage"
import LoginPage from "./containers/LoginPage/LoginPage"

const App = () => 
              <div className="ui container">
                <Route path="/" exact component={HomePage} />
                <Route path="/login" exact component={LoginPage} />
              </div>

export default App;
