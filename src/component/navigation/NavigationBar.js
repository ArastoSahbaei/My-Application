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

    <Menu.Item as={Link} to="/dashboard">  <i className="fa fa-home fa-lg"/>           <FormattedMessage id="navigationBar.nav1"/> </Menu.Item>
    <Menu.Item as={Link} to="/law">        <i className="fa fa-gavel fa-lg"/>          <FormattedMessage id="navigationBar.nav2"/></Menu.Item>
    <Menu.Item as={Link} to="/revisions">  <i className="fa fa-book fa-lg"/>           <FormattedMessage id="navigationBar.nav3"/></Menu.Item>
    <Menu.Item as={Link} to="/changes">    <i className="fas fa-exchange-alt fa-lg"/>  <FormattedMessage id="navigationBar.nav4"/></Menu.Item>
    <Menu.Item as={Link} to="/development">    <i className="fas fa-code fa-lg"/>      <FormattedMessage id="navigationBar.nav5"/></Menu.Item>


    <a role="button" onClick={() => this.props.setLocale("en")}>EN</a> ||||
    <a role="button" onClick={() => this.props.setLocale("se")}>SE</a>


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
    }}

NavigationBar.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
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