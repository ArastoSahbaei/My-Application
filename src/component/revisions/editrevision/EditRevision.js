import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios/index'
import "./EditRevision.css"

export default class EditRevision extends Component {

  state = {
      data: [],
      customColumns: []
  }

  componentWillMount = () => {
    axios.get('http://localhost:8080/lagbevakning/revision/subscriptions?id=' + (this.props.match.params.id)).then(response => {
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

  displayCustomColumn = (columnInput) => {
    if(columnInput === null) {
      return
    } else {
      return <Table.HeaderCell>{columnInput}</Table.HeaderCell>
    }
  }
    
  render() {
    console.log(this.state.data.subscriptionRevisionDTOS) 
    /* console.log(this.state.customColumns) */
    return (
      <div>
       <h2> Company  Name: {this.state.customColumns.companyName} <br/> 
            Revision Name: {this.state.data.name} <br/> 
            Revision ID:   {this.state.data.id} </h2>
      <Table celled>
        <Table.Header>
          <Table.Row>
             <Table.HeaderCell> LawName </Table.HeaderCell>
             <Table.HeaderCell> LawGroupName </Table.HeaderCell>
             {console.log(console.log(this.state.data.subscriptionRevisionDTOS) )}
             <Table.HeaderCell> Importance </Table.HeaderCell>
             {this.displayCustomColumn(this.state.customColumns.customHeaderName1)}
             {this.displayCustomColumn(this.state.customColumns.customHeaderName2)}
             {this.displayCustomColumn(this.state.customColumns.customHeaderName3)}
             {this.displayCustomColumn(this.state.customColumns.customHeaderName4)}
             {this.displayCustomColumn(this.state.customColumns.customHeaderName5)}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{this.state.data.name}</Table.Cell>
            <Table.Cell>{this.state.data.name}</Table.Cell>
            <Table.Cell>hehe</Table.Cell>
            <Table.Cell>hehe</Table.Cell>
            <Table.Cell>hehe</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    )
  }
}
