import React from "react"
import PropTypes from "prop-types"
import { Menu, Dropdown, Image } from "semantic-ui-react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import gravatarUrl from "gravatar-url"
import * as actions from "../../actions/auth"
import "./NavigationBar.css"
import { setLocale } from "../../actions/Locale"
import { FormattedMessage } from "react-intl"


class NavigationBar extends React.Component {
  render() {
const { user, logout } = this.props



    return (
  <Menu secondary pointing>

    <Menu.Item as={Link} to="/dashboard">     <i className="fa fa-home fa-lg"/>           <FormattedMessage id="navigationBar.nav1"/> </Menu.Item>
    <Menu.Item as={Link} to="/law">           <i className="fa fa-gavel fa-lg"/>          <FormattedMessage id="navigationBar.nav2"/> </Menu.Item>
    <Menu.Item as={Link} to="/revisions">     <i className="fa fa-book fa-lg"/>           <FormattedMessage id="navigationBar.nav3"/> </Menu.Item>
    <Menu.Item as={Link} to="/changes">       <i className="fas fa-exchange-alt fa-lg"/>  <FormattedMessage id="navigationBar.nav4"/> </Menu.Item>
    <Menu.Item as={Link} to="/development">   <i className="fas fa-code fa-lg"/>          <FormattedMessage id="navigationBar.nav5"/> </Menu.Item>

    <Menu.Menu position="right">
       <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} style={{"fontSize":18}} />}>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/dashboard1"> <i className="fas fa-user fa-lg"/>      Profile      </Dropdown.Item>
                                  <Dropdown item text=<i className="fas fa-globe fa-lg"/>>
                                      <Dropdown.Menu>
                                        <Dropdown.Header>Choose Language</Dropdown.Header>
                                        <Dropdown.Item onClick={() => this.props.setLocale("en")}>English</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setLocale("se")}>Swedish</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setLocale("se")}>Dansk</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setLocale("se")}>Norsk</Dropdown.Item>
                                      </Dropdown.Menu>
                                 </Dropdown>
                <Dropdown.Item as={Link} to="/dashboard2"> <i className="fas fa-tools fa-lg"/>        Management   </Dropdown.Item>
                <Dropdown.Item as={Link} to="/dashboard3"> <i className="fas fa-cog fa-lg"/>          My Settings  </Dropdown.Item> <hr/>
                <Dropdown.Item onClick={() => logout()}>   <i className="fas fa-sign-out-alt fa-lg"/> Sign Out     </Dropdown.Item>
            </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>

  </Menu>
)
    }}

NavigationBar.propTypes = {
  user: PropTypes.shape({email: PropTypes.string.isRequired}).isRequired,
  logout: PropTypes.func.isRequired,
  setLocale: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { logout: actions.logout, setLocale })(
  NavigationBar
)