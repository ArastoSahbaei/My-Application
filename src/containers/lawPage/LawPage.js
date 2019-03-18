import React, { Component } from 'react'
import axios from 'axios'

export default class Development extends Component {

    state = {
    }

componentDidMount = () => {

    axios.get('http://localhost:8080/lagbevakning/subscription/company?id=' + sessionStorage.getItem("id")).then(response => {
        console.log(response.data)
        })

}

render() {
    return(
        <div>
            <h2>This is the Law-Page</h2>
        </div>
     )
    }
   }