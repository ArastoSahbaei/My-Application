import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { Menu } from "semantic-ui-react"
import axios from 'axios/index'
import { Link } from "react-router-dom"
import "./EditRevision.css"

export default class EditRevision extends Component {

  state = {
      data: []
  }

  componentDidMount = () => {
    axios.get('http://localhost:8080/lagbevakning/revision/subscriptions?id=12597').then(response => {
      this.setState({
        data: response.data,
        loading: false
      })
    })
  }
    
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Index</Table.HeaderCell>
            <Table.HeaderCell> x </Table.HeaderCell>
            <Table.HeaderCell> x </Table.HeaderCell>
            <Table.HeaderCell> x </Table.HeaderCell>
            <Table.HeaderCell> x </Table.HeaderCell>
            <Table.HeaderCell>Antal lagar</Table.HeaderCell>
            <Table.HeaderCell>Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
  {/*           <Table.Cell>{index}</Table.Cell>
            <Table.Cell>{data.name}</Table.Cell>
            <Table.Cell>{data.comment}</Table.Cell>
            <Table.Cell>{new Date(data.createdAt).toISOString().substring(0, 10)}</Table.Cell>
            <Table.Cell>{data.createdBy.firstName + " " + data.createdBy.lastName}</Table.Cell>
            <Table.Cell>{data.subscriptionCount}</Table.Cell> */}
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    )
  }
}
