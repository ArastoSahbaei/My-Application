import React, { Component } from 'react'
import axios from 'axios'

export default class Development extends Component {

    state = {
        companyName: "",
        id: ""
    }

componentDidMount = () => {

    const getLoggedInUser = sessionStorage.getItem("email")

    axios.get('http://localhost:8080/lagbevakning/company/email?email=' + getLoggedInUser).then(response => {
        this.setState({companyName: response.data.companyName, id: response.data.id})
        console.log(response.data)
        
        axios.get('http://localhost:8080/lagbevakning/subscription/company?id=686').then(response => {
        console.log(response.data)
        })
    })
}

render() {
    return(
        <div>
            {this.state.companyName} <br/>
            {this.state.id}
        </div>
     )
    }
   }