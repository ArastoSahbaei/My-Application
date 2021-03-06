import React, { Component } from 'react'
import axios from 'axios/index'
import { FormattedMessage } from "react-intl"
import { Link } from "react-router-dom"
import { Table } from 'semantic-ui-react'
import { Menu } from "semantic-ui-react"
import "./OngoingRevisionsPage.css"

export default class OngoingRevisionsPage extends Component {

  state = {
    loading: true,
    companyName: "Loading",
    revisionList: null
  }

  componentWillMount = () => {
    axios.get('http://localhost:8080/lagbevakning/revision/ongoing/?id=' + sessionStorage.getItem("id")).then(response => {
      this.setState({
        revisionList: response.data,
        loading: false
      })
      /* console.log(response.data) */
    })
  }

  deleteRevision = id => {
    axios.delete("http://localhost:8080/lagbevakning/revision/delete?id=" + id).then(response =>{
      console.log(response);
      this.setState(({ revisionList }) => ({
        revisionList: revisionList.filter(item => item.id !== id)
      }))
    })
  }

  downloadRevisionExcel = id => {

    axios({
      url: "http://localhost:8080/lagbevakning/revision/excel?companyid=" + sessionStorage.getItem("id") + "&revisionid=" + id,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      console.log(response.headers)
      console.log(response.data)
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', response.headers.filename);
      document.body.appendChild(link);
      link.click();
    });
  }

  revisionList(props) {
    console.log(props)
    return(
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell><FormattedMessage id="ongoingRevisionsPage.name"/></Table.HeaderCell>
              <Table.HeaderCell><FormattedMessage id="ongoingRevisionsPage.comment"/></Table.HeaderCell>
              <Table.HeaderCell><FormattedMessage id="ongoingRevisionsPage.created"/></Table.HeaderCell>
              <Table.HeaderCell><FormattedMessage id="ongoingRevisionsPage.createdBy"/></Table.HeaderCell>
              <Table.HeaderCell>Antal lagar</Table.HeaderCell>
              <Table.HeaderCell>Options</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {props.map((revisionItem, index) => (
          <Table.Body key={revisionItem.id}>
            <Table.Row>
              <Table.Cell>{revisionItem.name}</Table.Cell>
              <Table.Cell>{revisionItem.comment}</Table.Cell>
              <Table.Cell>{new Date(revisionItem.createdAt).toISOString().substring(0, 10)}</Table.Cell>
              <Table.Cell>{revisionItem.createdBy.firstName + " " + revisionItem.createdBy.lastName}</Table.Cell>
              <Table.Cell>{revisionItem.subscriptionCount}</Table.Cell>
              <Table.Cell>

                          <div className="buttons">
                          <Menu.Item className="edit" as={Link}  to={"/revisions/ongoing/editrevision/" + revisionItem.id}> <i className="far fa-edit"/> </Menu.Item>
                          <i className="far fa-trash-alt" onClick={this.deleteRevision.bind(this, revisionItem.id)}/>
                          <i className="far fa-file-excel" onClick={this.downloadRevisionExcel.bind(this, revisionItem.id)}/>
                          </div>
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
        <h1><FormattedMessage id="ongoingRevisionsPage.header"/></h1>
        {this.state.loading
          ? <div>Loading...</div>
          : <div> {this.revisionList(this.state.revisionList)}</div>
        }
      </div> 
    )
  }
}
