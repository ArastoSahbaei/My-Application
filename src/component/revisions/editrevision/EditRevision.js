import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios/index'
import "./EditRevision.css"

export default class EditRevision extends Component {

  state = {
      loading: true,
      data: ["haha", "haha2","LOLOLOL","HAHA"],
      customColumns: [],
      haha: ["haha", "haha2","LOLOLOL","HAHA"]
  }

  componentDidMount = () => {
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

  displayList = () => {
    return (
      <div>
        <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell> LawName </Table.HeaderCell>
                  <Table.HeaderCell> LawGroupName </Table.HeaderCell>
                  <Table.HeaderCell> Importance </Table.HeaderCell>
                  {this.displayCustomColumn(this.state.customColumns.customHeaderName1)}
                  {this.displayCustomColumn(this.state.customColumns.customHeaderName2)}
                  {this.displayCustomColumn(this.state.customColumns.customHeaderName3)}
                  {this.displayCustomColumn(this.state.customColumns.customHeaderName4)}
                  {this.displayCustomColumn(this.state.customColumns.customHeaderName5)}
                </Table.Row>
              </Table.Header>

              
{console.log(this.state.data.subscriptionRevisionDTOS)}

      {this.state.data.subscriptionRevisionDTOS === null || undefined
      ? this.state.loading
      : <div>
            {this.state.haha.map((item, i) => (
              <Table.Body key={i}>
                <Table.Row>
                  <Table.Cell>{item}</Table.Cell>
                  <Table.Cell>{item}</Table.Cell>
                  <Table.Cell>{item}</Table.Cell>
                  <Table.Cell>{item}</Table.Cell>
                  <Table.Cell>{item}</Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
      </div>
      }
        </Table>
      </div>
   )}





  render() {
   /*  console.log(this.state.data)  */
   /* console.log(this.state.customColumns) */
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
