import React, { Component } from 'react'
import { Menu} from "semantic-ui-react"
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import UserRoute from "../../routes/UserRoute";
import PropTypes from "prop-types";
import DashBoardPage from "../../../containers/dashBoardPage/DashBoardPage";
import OngoingRevisionsPage from "../ongoingrevisions/OngoingRevisionsPage";
import "./RevisionMain.css"

export default class RevisionMain extends Component {


  render() {
    const { location, isAuthenticated, lang  } = this.props
    return(
      <div>

        <Menu secondary pointing className="NoOrange">
          <Menu.Item className="create"  as={Link} to="/revisions/create"> <div className="fontColourRevisionMain"> <FormattedMessage id="revisionMain.create"/> </div> </Menu.Item>
          <Menu.Item className="ongoing" as={Link} to="/revisions/ongoing"> <div className="fontColourRevisionMain"> <FormattedMessage id="revisionMain.ongoing"/> </div> </Menu.Item>
          <Menu.Item className="finished" as={Link} to="/revisions/finished"> <div className="fontColourRevisionMain"> <FormattedMessage id="revisionMain.finished"/> </div> </Menu.Item>

        </Menu>

        <UserRoute  location={location} path="/revisions/ongoing"        exact component = {OngoingRevisionsPage} />
      </div>
    )



  }


}
