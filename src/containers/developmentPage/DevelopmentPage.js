import React, { Component } from 'react'
import Axios from 'axios'
export default class Development extends Component {

    state = {
        data: [],
        loading: true,
        companyName: ""
    }

    componentDidMount = () => {
        Axios.get('http://localhost:8080/lagbevakning/company/byid?id=300')
        .then(response => {
            this.setState({companyName: response.data.companyName, loading: false})
            console.log(response.data.companyName)
        })
    }

  render() {
    return (
      <div>

        {this.state.loading || !this.state.companyName ? <div>loading...</div> : <div>{this.state.companyName}</div>}



      </div>

            

    )
  }
}