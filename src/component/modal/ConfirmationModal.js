import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { Form, TextArea, Dropdown } from 'semantic-ui-react'
import axios from "axios"
import "./ConfirmationModal.css"

const options = [
  { value: 'OK', text: 'OK'},
  { value: 'Avvikelse', text: 'Avvikelse'},
  { value: 'Ej Relevant', text: 'Ej Relevant'},
  { value: 'Observation', text: 'Observation'},
  { value: 'Saknas', text: 'Saknas' },
 ]
 export default class ConfirmationModal extends Component {
  
  state = {
    data: [],
    textValue: '',
    listValue: 'Status',
    options,
    value: '',
    open: false
    }

  componentDidMount = () => {
    axios.get('http://localhost:8080/lagbevakning/revision/revision_items_statuses').then( response => {
      this.setState({data: response.data})
            console.log(response.data)
          })
        }

  dropDownList = () => <Dropdown placeholder={this.state.listValue} onChange={this.handleListChange} clearable options={options} selection />

  handleListChange = (event, {value}) => {
    this.setState({ value })
    console.log(value)
  }

  textArea = () => (
    <Form>
      <TextArea placeholder='Skriv en kommentar...' onChange={this.handleTextChange.bind(this)} />
      {console.log(this.state.textValue)}
    </Form>
  )

  handleTextChange(event)  {
      this.setState({textValue: event.target.value})
  }

  saveOnClick = () => {
    axios.put('http://localhost:8080/lagbevakning/revision/revisionsubscription', {
      revisionId: 36,
      subscriptionId: 21549450,
      status: "NO_VALUE"
    })
    .then(function (response) {
      console.log(response)
        alert("You've sucessfully managed to do that")
    })
    .catch(function (error) {
      console.log(error)
        alert("something went wrong")
    })
  }

  close = () => this.setState({ open: false })
  submitorCancelButton = () => (
    <Button.Group>
        <Button onClick={this.close}       negative>  Cancel </Button>
        <Button.Or />
        <Button onClick={this.saveOnClick} positive>  Save   </Button>
      </Button.Group>
  )

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state
    return (
      <div>
        <Button onClick={this.closeConfigShow(true, false)}>Edit</Button>
          <Modal open={open} onClose={this.close} closeOnEscape={closeOnEscape} closeOnDimmerClick={closeOnDimmerClick} closeIcon>
            <Modal.Header>Revidera Författning</Modal.Header> 
            <Modal.Content> <p>SFS 1998:1707 Lag om åtgärder mot buller och avgaser från mobila maskiner</p> </Modal.Content>
                  {this.textArea()}
                  {this.dropDownList()}
                  {this.submitorCancelButton()}
          </Modal>
      </div>
    )
  }
}