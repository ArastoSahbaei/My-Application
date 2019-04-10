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

  deleteRevision = id => {
    axios.delete("http://localhost:8080/lagbevakning/revision/delete?id=" + id);
    this.setState(({ data }) => ({
      data: data.filter(item => item.id !== id)
    }))
  }

  finishedRevisionsList = () => {
    return(
      <div>
          <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>  Status      </Table.HeaderCell>
                  <Table.HeaderCell>  Skapad      </Table.HeaderCell>
                  <Table.HeaderCell>  Avslutad    </Table.HeaderCell>
                  <Table.HeaderCell>  Åtgärdad    </Table.HeaderCell>
                  <Table.HeaderCell>  Namn        </Table.HeaderCell>
                  <Table.HeaderCell>  Ansvarig    </Table.HeaderCell>
                  <Table.HeaderCell>  Antal Lagar </Table.HeaderCell>
                  <Table.HeaderCell>  Options     </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

          {this.state.data.map((item, i) => (
                <Table.Body key={item.id}>
                  <Table.Row>
                    {console.log(item.id)}
                    <Table.Cell>{item.status}</Table.Cell>
                    <Table.Cell>{new Date(item.createdAt).toISOString().substring(0, 10)}</Table.Cell>
                    <Table.Cell>{new Date(item.finishedAt).toISOString().substring(0, 10)}</Table.Cell>
                    <Table.Cell>???</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.createdBy.email}</Table.Cell>
                    <Table.Cell>{item.subscriptionCount}</Table.Cell>
                    <Table.Cell> 
                          <i className="far fa-trash-alt" onClick={this.deleteRevision.bind(this, item.id)}></i>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
          ))}
          </Table>
      </div>
    )
  }
    
    render() {
        return (
          <div>
           {this.finishedRevisionsList()}
          </div>
        )
      }
}