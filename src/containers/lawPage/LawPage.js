import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { FormattedMessage } from "react-intl";
import axios from 'axios'

export default class Development extends Component {

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
            /* console.log(response.data)rfrfr  e*/
        })
    }

    data(props) {
      return (
        <div>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Författning</Table.HeaderCell>
                  <Table.HeaderCell>Företagsbetydelse</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

                    {props.map(lawList => (
                          <Table.Body>
                            <Table.Row>
                              <Table.Cell>{lawList.lawItem.name}</Table.Cell>
                              <Table.Cell>{lawList.text}</Table.Cell>
                              <Table.Cell>{lawList.status}</Table.Cell>
                            </Table.Row>
                          </Table.Body>
                  ))}
             </Table>
        </div>
      )}

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