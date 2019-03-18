import React, { Component } from 'react'
import axios from 'axios'

export default class Development extends Component {

    state = {
        loading: true,
        companyName: "testar"
    }

componentDidMount = () => {

    axios.get('http://localhost:8080/lagbevakning/subscription/company?id=' + sessionStorage.getItem("id")).then(response => {
        this.setState({
            companyName: response.data[3].companyItem.companyName,
            loading: false
        })
        console.log(response.data)
        })

}

render() {
    return(
        <div>
             {this.state.loading || !this.state.companyName 
              ? <div>Loading...</div> 
              : <div> <h3> Company Name: {this.state.companyName} </h3> </div>}
        </div>
     )
    }
   }