import React from 'react';

export default class ConfirmationModal extends React.Component {

      openModal = () => {
        alert("hehehehhee :-> xoxo")
      }

      render() {
        return (
          <div>
              {this.openModal()}
          </div>
        )
      }
    }