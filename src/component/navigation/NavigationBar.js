import React from "react"
import PropTypes from "prop-types"
import { Menu, Dropdown, Image } from "semantic-ui-react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import gravatarUrl from "gravatar-url"
import * as actions from "../../actions/auth"
import "./NavigationBar.css"


const NavigationBar = ({ user, logout }) => (
  <Menu secondary pointing>
    <Menu.Item as={Link} to="/dashboard">  <i className="fa fa-home fa-lg"/>           Dashboard </Menu.Item>
    <Menu.Item as={Link} to="/law">        <i className="fa fa-gavel fa-lg"/>          Law</Menu.Item>
    <Menu.Item as={Link} to="/revisions">  <i className="fa fa-book fa-lg"/>           Revisions</Menu.Item>
    <Menu.Item as={Link} to="/changes">    <i className="fas fa-exchange-alt fa-lg"/>  Changes</Menu.Item>
    <Menu.Item as={Link} to="/development">    <i className="fas fa-code fa-lg"/>      Development</Menu.Item>

    <Menu.Menu position="right">
       <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} style={{'fontSize':18}} />}>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/dashboard1"> <i className="fas fa-user"/>  Profile      </Dropdown.Item>
                <Dropdown.Item as={Link} to="/dashboard2"> <i className="fas fa-tools"/> Management   </Dropdown.Item>
                <Dropdown.Item as={Link} to="/dashboard3"> <i className="fas fa-cog"/>   My Settings  </Dropdown.Item>
                  <hr/>
                  <Dropdown.Item onClick={() => logout()}><i className="fas fa-sign-out-alt"/>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
)

NavigationBar.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(
  NavigationBar
)