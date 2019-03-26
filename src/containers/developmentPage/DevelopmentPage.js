import React, { Component } from 'react'
import axios from 'axios'
export default class Development extends Component {

    state = {
        loading: true,
        companyName: "",
        id: null
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/lagbevakning/company/byid?id=300')
        .then(response => {
            this.setState({companyName: response.data.companyName, 
                           loading: false, 
                           id: response.data.id})
            /* console.log(response.data) */
        })
    }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.companyName 
                            ? <div>Failed to load</div> 
                            : <div> <h3> Company Name: {this.state.companyName} </h3> </div>}
                    <hr/>
                           <h3>Company Id: {this.state.id}</h3>

      </div>

            

    )
  }
}