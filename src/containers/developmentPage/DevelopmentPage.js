import React, { Component } from 'react'
import Axios from 'axios'
export default class Development extends Component {

    state = {
        data: []
    }

    componentDidMount = () => {
        Axios.get('http://localhost:8080/lagbevakning/company/byid?id=300')
        .then(response => {
            console.log(response.data)
        })
    }

  render() {
    return (
      <div>
        <h1>This is used for testing</h1>
        <a href="api/echo?message=hello">Echo hello</a><br/>
        <a href="api/echo/jwt?message=hello">JWT Echo hello (does not work if no JWT token)</a><br/>
      </div>

            

    )
  }
}