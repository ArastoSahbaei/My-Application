import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios/index'
import "./EditRevision.css"

export default class EditRevision extends Component {

  state = {
      loading: true,
      data: {},
      subscriptions: [],
      customColumns: [],
     /*  haha: ["haha", "haha2","LOLOLOL","HAHA"] */
  }

  componentDidMount = () => {
    axios.get('http://localhost:8080/lagbevakning/revision/subscriptions?id=' + (this.props.match.params.id)).then(response => {
      this.setState({
        data: response.data,
        subscriptions: response.data.subscriptionRevisionDTOS,
        loading: false
      })
    })

    axios.get('http://localhost:8080/lagbevakning/company?id=' + sessionStorage.getItem("id")).then(response2 => {
      this.setState({
        customColumns: response2.data
      })
    })
  }

  displayCustomTitle = (titleInput) => {
    if(titleInput === null) {
      return
    } else {
      return <Table.HeaderCell>{titleInput}</Table.HeaderCell>
    }
  }

  displayCustomColumn = (columnInput) => {
    if(columnInput === null) {
        return
    } else {
        return <Table.Cell>{columnInput}</Table.Cell>
    }
  }

  displayList = () => {
    return (
      <div>
        <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell> LawName </Table.HeaderCell>
                  <Table.HeaderCell> LawGroupName </Table.HeaderCell>
                  <Table.HeaderCell> Importance </Table.HeaderCell>
                  {this.displayCustomTitle(this.state.customColumns.customHeaderName1)}
                  {this.displayCustomTitle(this.state.customColumns.customHeaderName2)}
                  {this.displayCustomTitle(this.state.customColumns.customHeaderName3)}
                  {this.displayCustomTitle(this.state.customColumns.customHeaderName4)}
                  {this.displayCustomTitle(this.state.customColumns.customHeaderName5)}
                  <Table.HeaderCell> Status </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

            {this.state.subscriptions.map((item, i) => (
              <Table.Body key={i}>
                <Table.Row>
                  <Table.Cell>{item.lawName}</Table.Cell>
                  <Table.Cell>{item.lawGroupName}</Table.Cell>
                  <Table.Cell>{item.importanceForCompany}</Table.Cell>
                  {this.displayCustomColumn(item.getCustomColumnText1)}
                  {this.displayCustomColumn(item.getCustomColumnText2)}
                  {this.displayCustomColumn(item.getCustomColumnText3)}
                  {this.displayCustomColumn(item.getCustomColumnText4)}
                  {this.displayCustomColumn(item.getCustomColumnText5)}
                  <Table.Cell>{item.status}</Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
        </Table>
      </div>
   )}





  render() {
    return (
      <div>
        {this.state.loading
            ? <div><h1>LOADING...</h1></div>
            :
        <h2> Company  Name: {this.state.customColumns.companyName} <br/> 
                Revision Name: {this.state.data.name} <br/> 
                Revision ID:   {this.state.data.id}   </h2>
        }
             {this.displayList()}

            


    </div>
    )
  }
}
