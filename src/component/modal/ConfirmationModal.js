import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import { Form, TextArea, Dropdown } from 'semantic-ui-react'
import "./ConfirmationModal.css"



const options = [
 { key: 1, text: 'OK', value: 1 },
 { key: 2, text: 'Avvikelse', value: 2 },
 { key: 3, text: 'Ej Relevant', value: 3 },
 { key: 4, text: 'Observation', value: 4 },
 { key: 5, text: 'Saknas', value: 5 },
]
export default class ConfirmationModal extends React.Component {

  state = {
  clientTextField: '',
  optionValue: ''
  }

    dropDownList = () => <Dropdown placeholder="Status" clearable options={options} selection />

    handleChange(event) {
      this.setState({clientTextField: event.target.value})
      {console.log(this.state.clientTextField)}
  }
    
    textAreaExampleTextArea = () => (
      <Form>
        <TextArea placeholder='Skriv en kommentar...' onChange={this.handleChange.bind(this)} />
        {console.log(this.state.clientTextField)}
      </Form>
  )

  
  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.clientTextField)
    event.preventDefault()
  }
  
  
  modalModalExample = () => (
    <Modal trigger={<Button> <i className="far fa-edit"/> </Button>}>
          <Modal.Header>Revidera Författning</Modal.Header> 
          <Modal.Header>SFS 1998:1707 Lag om åtgärder mot buller och avgaser från mobila maskiner</Modal.Header>
         
            <Modal.Description>
              <Header>Fyll i kommentar och ange status</Header>
              {this.textAreaExampleTextArea()}
              {this.dropDownList()}
              {this.submitorCancelButton()}
            </Modal.Description>
        </Modal>
  )
      
      submitorCancelButton = () => (
        <Button.Group>
          <Button>Cancel</Button>
          <Button.Or />
          <Button positive>Save</Button>
        </Button.Group>
  )
      
      
      render() {

        return (
          <div className="haha">
              {this.modalModalExample()}
          </div>
        )
      }
    }