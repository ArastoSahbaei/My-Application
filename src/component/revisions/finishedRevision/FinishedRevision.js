import React, { Component } from 'react'
import axios from 'axios/index'
import { Table } from 'semantic-ui-react'


export default class OngoingRevisionsPage extends Component {

  state = {
    loading: false,
    data: []
  }

  componentWillMount = () => {
    axios.get('http://localhost:8080/lagbevakning/revision/finished?id=' + sessionStorage.getItem("id")).then(response => {
      this.setState({
        loading: false,
        data: response.data
      })
       console.log(response.data) 
    })
  }

  finishedRevisionsList = () => {
    return(
      <div>
          <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Skapad</Table.HeaderCell>
                  <Table.HeaderCell>Avslutad</Table.HeaderCell>
                  <Table.HeaderCell>Åtgärdad</Table.HeaderCell>
                  <Table.HeaderCell>Namn</Table.HeaderCell>
                  <Table.HeaderCell>Ansvarig</Table.HeaderCell>
                  <Table.HeaderCell>Antal Lagar</Table.HeaderCell>
                  <Table.HeaderCell>Options</Table.HeaderCell>
                </Table.Row>
              </Table.Header>



          {this.state.data.map((item, i) => (
                <Table.Body key={i}>
                  <Table.Row>
                    <Table.Cell>{item.status}</Table.Cell>
                    <Table.Cell>{item.createdAt}</Table.Cell>
                    <Table.Cell>{item.createdAt}</Table.Cell>
                    <Table.Cell>???</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.createdBy.email}</Table.Cell>
                    <Table.Cell>{item.subscriptionCount}</Table.Cell>
                    <Table.Cell>X X X X</Table.Cell>
                  </Table.Row>
                </Table.Body>
          ))}
          </Table>
      </div>
    )
  }
    
    render() {
      console.log(this.state.data)
        return (
          <div>
           {this.finishedRevisionsList()}
          </div>
        )
      }
}