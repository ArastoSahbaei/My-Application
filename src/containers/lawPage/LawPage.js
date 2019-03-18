import React, { Component } from 'react'
import axios from 'axios'

export default class Development extends Component {

    state = {
        companyName: "test"
    }

componentDidMount = () => {
    axios.get('http://localhost:8080/lagbevakning/company/byid?id=300')
    .then(response => {
        this.setState({companyName: response.data.companyName})
        console.log(response.data.companyName)
    })
}

render() {
    return(
        <div>
            {this.state.companyName}
        </div>
     )
    }
   }