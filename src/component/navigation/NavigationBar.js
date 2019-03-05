import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import * as actions from "../../actions/auth";


const NavigationBar = ({ user, logout }) => (
  <Menu secondary pointing>
    <Menu.Item as={Link} to="/dashboard">  <i className="fa fa-home fa-lg"/>          Dashboard </Menu.Item>
    <Menu.Item as={Link} to="/dashboard">  <i className="fa fa-gavel fa-lg"/>         Law</Menu.Item>
    <Menu.Item as={Link} to="/dashboard">  <i className="fa fa-book fa-lg"/>          Revisions</Menu.Item>
    <Menu.Item as={Link} to="/dashboard">  <i className="fas fa-exchange-alt fa-lg"/> Changes</Menu.Item>

    <Menu.Menu position="right">
       <Dropdown trigger={<Image avatar src={gravatarUrl("arasto.sahbaei@gmail.com")} />}>
            <Dropdown.Menu>
                <Dropdown.Item> <i class="fas fa-user"> </i>Profile      </Dropdown.Item>
                <Dropdown.Item> <i class="fas fa-users"> </i>Management   </Dropdown.Item>
                <Dropdown.Item> <i class="fas fa-cog"> </i>My Settings  </Dropdown.Item>
                  <hr/>
                  <Dropdown.Item onClick={() => logout()}><i class="fas fa-sign-out-alt"></i>Sign Out</Dropdown.Item>
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