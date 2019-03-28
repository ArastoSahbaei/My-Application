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
import DEN from "../../services/images/DEN.png"
import SWE from "../../services/images/SWE.png"
import NOR from "../../services/images/NOR.png"
import ENG from "../../services/images/ENG.png"
import rsmRamboll from "../../services/images/rsmRamboll.png"



class NavigationBar extends React.Component {
  render() {
const { user, logout } = this.props

    return (
  <Menu secondary pointing>

   {  <Menu.Item position="left"className="loggan"> <img src={rsmRamboll} alt="RSM" style={{"width":350, "height":50}} /> </Menu.Item>  }
    <Menu.Item className="home" position="right" as={Link} to="/dashboard"> <i className="fa fa-home fa-lg"/>    <div className="fontColor"> <FormattedMessage id="navigationBar.nav1"/> </div> </Menu.Item>
    <Menu.Item className="law"         as={Link} to="/law">           <i className="fa fa-gavel fa-lg"/>         <div className="fontColor"> <FormattedMessage id="navigationBar.nav2"/> </div> </Menu.Item>
    <Menu.Item className="revision"    as={Link} to="/revisions">     <i className="fa fa-book fa-lg"/>          <div className="fontColor"> <FormattedMessage id="navigationBar.nav3"/> </div> </Menu.Item>
    <Menu.Item className="changes"     as={Link} to="/changes">       <i className="fas fa-exchange-alt fa-lg"/> <div className="fontColor"> <FormattedMessage id="navigationBar.nav4"/> </div> </Menu.Item>
    <Menu.Item className="development" as={Link} to="/development">   <i className="fas fa-code fa-lg"/>         <div className="fontColor"> <FormattedMessage id="navigationBar.nav5"/> </div> </Menu.Item>

    <Menu.Menu position="right">
       <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} style={{"fontSize":18, "margin":18}} />}>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile"> <i className="fas fa-user fa-lg"/>      Profile      </Dropdown.Item>
                                  <Dropdown item text="Language">
                                      <Dropdown.Menu>
                                        <Dropdown.Header>Choose Language</Dropdown.Header>
                                        <Dropdown.Item onClick={() => this.props.setLocale("en")}> <img src={ENG} alt="Eng" /> <p className="lang"> English     </p> </Dropdown.Item> <hr/>
                                        <Dropdown.Item onClick={() => this.props.setLocale("se")}> <img src={SWE} alt="Swe" /> <p className="lang"> Svenska     </p> </Dropdown.Item> <hr/>
                                        <Dropdown.Item onClick={() => this.props.setLocale("de")}> <img src={DEN} alt="Den" /> <p className="lang"> Dansk       </p> </Dropdown.Item> <hr/>
                                        <Dropdown.Item onClick={() => this.props.setLocale("no")}> <img src={NOR} alt="Nor" /> <p className="lang"> Norsk       </p> </Dropdown.Item>
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