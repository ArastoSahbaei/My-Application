import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { Form, TextArea } from 'semantic-ui-react'

export default class ConfirmationModal extends React.Component {

    TextAreaExampleTextArea = () => (
    <Form>
      <TextArea placeholder='Tell us more' />
    </Form>
  )

    ModalModalExample = () => (
        <Modal trigger={<Button> <i className="far fa-edit"/> </Button>}>
          <Modal.Header>Revidera Författning</Modal.Header> 
          <Modal.Header>SFS 1998:1707 Lag om åtgärder mot buller och avgaser från mobila maskiner</Modal.Header>
         
            <Modal.Description>
              <Header>Fyll i kommentar och ange status</Header>
              <p>
                We've found the following gravatar image associated with your e-mail
                address.
              </p>
              {this.TextAreaExampleTextArea()}
              <p>Is it okay to use this photo?</p>
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