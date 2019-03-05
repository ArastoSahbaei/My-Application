import React, { Component } from 'react'
import Axios from 'axios'
import NavigationBar from "../../component/navigation/NavigationBar"

export default class Development extends Component {

    state = {
        data: []
    }

//UNAUTHORIZED, SHOULD BE USED WITH TOKEN! TODO: FIX AUTHORIZATION WITH INTERCEPTOR
    componentDidMount = () => {
        Axios.get('http://localhost:8080/lagbevakning/company/byid?id=300')
        .then(response => {
            console.log(response.data)
        })
    }

  render() {
    return (
      <div>
          <NavigationBar />
          <br />  <br />
        <h1>This is used for testing</h1>
        <a href="api/echo?message=hello">Echo hello</a><br/>
        <a href="api/echo/jwt?message=hello">JWT Echo hello (does not work if no JWT token)</a><br/>
      </div>

            

    )
  }
}