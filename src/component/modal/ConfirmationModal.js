import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
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
export default class ConfirmationModal extends React.Component {

  state = {
  data: [],
  textValue: '',
  listValue: 'Status',
  options,
  value: ''
  }

/*   TODO: take the 'Data' state and replace it with the hardcoded 'options' */
  componentDidMount = () => {
    axios.get('http://localhost:8080/lagbevakning/revision/revision_items_statuses')
      .then( response => {
        this.setState({data: response.data})
        console.log(response.data)
      })
  }

    dropDownList = () => <Dropdown placeholder={this.state.listValue} onChange={this.handleListChange} clearable options={options} selection />


    handleListChange = (event, {value}) => { 
     this.setState({ value })
      console.log(value)
  }

    handleTextChange(event) {
      this.setState({textValue: event.target.value})
  }

    textArea = () => (
      <Form>
        <TextArea placeholder='Skriv en kommentar...' onChange={this.handleTextChange.bind(this)} />
        {console.log(this.state.textValue)}
      </Form>
  )
  
    openModal = () => (
    <Modal trigger={<Button> <i className="far fa-edit"/> </Button>}>
          <Modal.Header>Revidera Författning</Modal.Header> 
         {/*  TODO: Hardecoded Law. it should display the current law of the revision */}
          <Modal.Header>SFS 1998:1707 Lag om åtgärder mot buller och avgaser från mobila maskiner</Modal.Header>
          <Modal.Description>
            <Header> Fyll i kommentar och ange status </Header>
                {this.textArea()}
                {this.dropDownList()}
                {this.submitorCancelButton()}
          </Modal.Description>
        </Modal>
  )
    /*   TODO: Close on 'Cancel', Post on 'Save' */
    submitorCancelButton = () => (
        <Button.Group>
          <Button>Cancel</Button>
          <Button.Or />
          <Button positive>Save</Button>
        </Button.Group>
  )
      
      render() {
        return (
          <div className="x">
              {this.openModal()}
          </div>
        )
      }
    }