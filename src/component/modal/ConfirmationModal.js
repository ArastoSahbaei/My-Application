import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import { Form, TextArea, Dropdown } from 'semantic-ui-react'



const options = [
 { key: 1, text: 'OK', value: 1 },
 { key: 2, text: 'Avvikelse', value: 2 },
 { key: 3, text: 'Ej Relevant', value: 3 },
 { key: 4, text: 'Observation', value: 4 },
 { key: 5, text: 'Saknas', value: 5 },
]
export default class ConfirmationModal extends React.Component {
    TextAreaExampleTextArea = () => (
    <Form>
      <TextArea placeholder='Skriv en kommentar...' />
    </Form>
  )

   DropdownExampleClearable = () => <Dropdown clearable options={options} selection />

    ButtonExampleConditionals = () => (
    <Button.Group>
      <Button>Cancel</Button>
      <Button.Or />
      <Button positive>Save</Button>
    </Button.Group>
  )

    ModalModalExample = () => (
        <Modal trigger={<Button> <i className="far fa-edit"/> </Button>}>
          <Modal.Header>Revidera Författning</Modal.Header> 
          <Modal.Header>SFS 1998:1707 Lag om åtgärder mot buller och avgaser från mobila maskiner</Modal.Header>
         
            <Modal.Description>
              <Header>Fyll i kommentar och ange status</Header>
              {this.TextAreaExampleTextArea()}
              {this.DropdownExampleClearable()}
              {this.ButtonExampleConditionals()}
            </Modal.Description>
        </Modal>
      )


      
      render() {

        return (
          <div>
              {this.ModalModalExample()}
          </div>
        )
      }
    }