import React, { Component } from 'react'
import { Menu} from "semantic-ui-react"
import { Link } from "react-router-dom";
import UserRoute from "../../routes/UserRoute";
import OngoingRevisionsPage from "../ongoingrevisions/OngoingRevisionsPage";


export default class RevisionMain extends Component {










  render() {
    const { location } = this.props
    return(
      <div>

        <Menu>
          <Menu.Item className="create" as={Link} to="/revisions/create"> <div> Create </div> </Menu.Item>
          <Menu.Item className="ongoing" as={Link} to="/revisions/ongoing"> <div> Ongoing </div> </Menu.Item>
          <Menu.Item className="finished" as={Link} to="/revisions/finished"> <div> Finished </div> </Menu.Item>

        </Menu>

        <UserRoute  location={location} path="/revisions/ongoing"        exact component = {OngoingRevisionsPage} />
      </div>
    )



  }


}
