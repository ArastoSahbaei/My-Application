import React, { Component } from 'react'
import axios from 'axios'

export default class Development extends Component {

    state = {
        companyName: "testar"
    }

componentDidMount = () => {

    axios.get('http://localhost:8080/lagbevakning/subscription/company?id=' + sessionStorage.getItem("id")).then(response => {
        this.setState({
            companyName: response.data[3].companyItem.companyName
        })
        console.log(response.data)
        })

}

render() {
    return(
        <div>
            <h2>This is the Law-Page</h2>
            <h3>{this.state.companyName}</h3>
        </div>
     )
    }
   }