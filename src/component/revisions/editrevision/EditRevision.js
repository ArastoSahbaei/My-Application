import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios/index'
import "./EditRevision.css"

export default class EditRevision extends Component {

  state = {
      data: [],
      customColumns: []
  }

  componentDidMount = () => {
    axios.get('http://localhost:8080/lagbevakning/revision/subscriptions?id=12597').then(response => {
      this.setState({
        data: response.data,
        loading: false
      })
    })
    axios.get('http://localhost:8080/lagbevakning/company?id=' + sessionStorage.getItem("id")).then(response2 => {
      this.setState({
        customColumns: response2.data
      })
    })
  }

    
  render() {
    console.log(this.state.data) 
    console.log(this.state.customColumns)

    return (
      <div>
       <h2>Revision Name: {this.state.data.name} & Revision id: {this.state.data.id}</h2>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell> LawName </Table.HeaderCell>
            <Table.HeaderCell> LawGroupName </Table.HeaderCell>
            <Table.HeaderCell> Importance </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{this.state.data.name}</Table.Cell>
            <Table.Cell>hehe</Table.Cell>
            <Table.Cell>hehe</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    )
  }
}
