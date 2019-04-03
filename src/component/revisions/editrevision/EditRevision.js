import React, { Component } from 'react'
import "./EditRevision.css"

export default class EditRevision extends Component {

  state = {

  }

  componentDidMount() {
  }
    
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
            <h1>varmt välkommen nisse</h1>
      </div>
    )
  }
}
