import React from "react"
import LoginPage from "./containers/loginPage/LoginPage"
import DashBoardPage from "./containers/dashBoardPage/DashBoardPage"
import UserRoute from "./component/routes/UserRoute"
import GuestRoute from "./component/routes/GuestRoute"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { IntlProvider } from "react-intl"
import LawPage from "./containers/lawPage/LawPage"
import DevelopmentPage from "./containers/developmentPage/DevelopmentPage"
import NavigationBar from "./component/navigation/NavigationBar"
import messages from "./constants/messages"

class App extends React.Component {
  componentDidMount() {
      console.log("componentDidMount")
  }

  render() {
    const { location, isAuthenticated, lang  } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
              <div className="ui container">
               {isAuthenticated && <NavigationBar />}
                <GuestRoute location={location} path="/"              exact component = {LoginPage} />
                <UserRoute  location={location} path="/dashboard"     exact component = {DashBoardPage} />
                <UserRoute  location={location} path="/law"           exact component = {LawPage} />
                <UserRoute  location={location} path="/development"   exact component = {DevelopmentPage} />
              </div>
      </IntlProvider>
    )}
  }

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
    lang: state.locale.lang
  }
}

export default connect(mapStateToProps)(App)