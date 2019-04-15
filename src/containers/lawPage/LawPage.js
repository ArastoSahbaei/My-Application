import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'

export default class Law extends Component {

    state = {
      companyName: "Loading",
          loading: true,
             data: []
    }

componentDidMount = () => {
    axios.get('http://localhost:8080/lagbevakning/subscription/company?id=' + sessionStorage.getItem("id")).then(response => {
        this.setState({
            companyName: response.data[0].companyItem.companyName,
            loading: false,
            data: response.data
        })
         /* console.log(response.data) */
    })
}

data(props) {
  return(
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Index</Table.HeaderCell>
            <Table.HeaderCell>Författning</Table.HeaderCell>
            <Table.HeaderCell>Företagsbetydelse</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Senast Revideras</Table.HeaderCell>
            <Table.HeaderCell>Revideras</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {props.filter(Boolean).map((lawList, index) => (
                    <Table.Body key={index}>
                      <Table.Row>
                        <Table.Cell>{index + 1}</Table.Cell>
                        <Table.Cell>{lawList.lawDTO.name}</Table.Cell>
                        <Table.Cell>{lawList.text}</Table.Cell>
                        <Table.Cell>{lawList.status}</Table.Cell>
                        <Table.Cell>{new Date(lawList.latestRevisionDate).toISOString().substring(0, 10)}</Table.Cell>
                        <Table.Cell>placeholder</Table.Cell>
                      </Table.Row>
                    </Table.Body>
            ))}

      </Table>
    </div>
  )
}

render() {
    return(
        <div>
             {this.state.loading || !this.state.companyName 
              ? <div>Loading...</div> 
              : <div> 
                <h1> Listar laglista för {this.state.companyName} </h1>
                <h3> <br/> {this.data(this.state.data)} </h3> </div>}

        </div>   
     )}
   }