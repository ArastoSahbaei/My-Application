import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'

export default class Development extends Component {

    state = {
        loading: true,
        companyName: "Loading"
    }

componentDidMount = () => {

    axios.get('http://localhost:8080/lagbevakning/subscription/company?id=' + sessionStorage.getItem("id")).then(response => {
        this.setState({
            companyName: response.data[0].lawItem.name,
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
              : <div> <h3>  {this.state.companyName} </h3> </div>}

<Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Law</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{this.state.companyName}</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>

      <Table.Row>
      <Table.Cell>{this.state.companyName}</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>

      <Table.Row>
      <Table.Cell>{this.state.companyName}</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
              
        </div>
     )
    }
   }