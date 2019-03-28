import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'
import { FormattedMessage } from "react-intl";

export default class OngoingRevisionsPage extends Component {

  state = {
    loading: true,
    companyName: "Loading",
    revisionList: null
  }

  componentDidMount = () => {

    axios.get('http://localhost:8080/lagbevakning/revision/ongoing/?id=' + sessionStorage.getItem("id")).then(response => {
      this.setState({
        revisionList: response.data,
        loading: false
      })
      console.log(response.data)
    })

  }

  revisionList(props) {
    console.log(props);
    return(
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>hej</Table.HeaderCell>
              <Table.HeaderCell>hej2</Table.HeaderCell>
              <Table.HeaderCell>hej3</Table.HeaderCell>
              <Table.HeaderCell>hej4</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {props.map(revisionItem => (
          <Table.Body>
            <Table.Row>
              <Table.Cell>{revisionItem.name}</Table.Cell>
              <Table.Cell>{revisionItem.comment}</Table.Cell>
              <Table.Cell>{new Date(revisionItem.createdAt).toISOString().substring(0, 10)}</Table.Cell>
              <Table.Cell>{revisionItem.createdBy.firstName + " " + revisionItem.createdBy.lastName}</Table.Cell>
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
        <h1><FormattedMessage id="ongoingRevisionsPage.header"/></h1>
        {this.state.loading
          ? <div>Loading...</div>
          :<div> {this.revisionList(this.state.revisionList)}</div>
        }
      </div>
    )
  }
}
