import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import * as actions from "../../actions/auth";


const NavigationBar = ({ user, logout }) => (
  <Menu secondary pointing>
    <Menu.Item as={Link} to="/dashboard">
      Dashboard
    </Menu.Item>

    <Menu.Menu position="right">
      <Dropdown trigger={<Image avatar src={gravatarUrl("arasto.sahbaei@gmail.com")} />}>
        <Dropdown.Menu>
        <Dropdown.Item>Management</Dropdown.Item>
        <Dropdown.Item>Test</Dropdown.Item>
          <hr/>
          <Dropdown.Item onClick={() => logout()}>Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

NavigationBar.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(
  NavigationBar
);