import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'

export default class Development extends Component {

    state = {
        loading: true,
        companyName:           "Loading",
        forFattning:           "Loading",
        betydelseForForetaget: "Loading",
        revideras:             "Loading",
        senastReviderad:       "Loading",
        status:                "Loading"
    }

componentDidMount = () => {

    axios.get('http://localhost:8080/lagbevakning/subscription/company?id=' + sessionStorage.getItem("id")).then(response => {
        this.setState({
            companyName: response.data[0].companyItem.companyName,
            forFattning: "TBA",
            betydelseForForetaget: "TBA",
            revideras: "TBA",
            senastReviderad: "TBA",
            status: "TBA",
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
              : <div> <h3>  Listar laglista för {this.state.companyName} </h3> </div>}

<Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Lag</Table.HeaderCell>
        <Table.HeaderCell>Författning</Table.HeaderCell>
        <Table.HeaderCell>Betydelse för företaget</Table.HeaderCell>
        <Table.HeaderCell>Revideras</Table.HeaderCell>
        <Table.HeaderCell>Senast Revideras</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{this.state.companyName}</Table.Cell>
        <Table.Cell>{this.state.companyName}</Table.Cell>
        <Table.Cell>{this.state.companyName}</Table.Cell>
        <Table.Cell>{this.state.companyName}</Table.Cell>
        <Table.Cell>{this.state.companyName}</Table.Cell>
        <Table.Cell>{this.state.companyName}</Table.Cell>
      </Table.Row>

{/*       <Table.Row>
      <Table.Cell>{this.state.companyName}</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>

      <Table.Row>
      <Table.Cell>{this.state.companyName}</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row> */}

    </Table.Body>
  </Table>
              
        </div>
     )
    }
   }