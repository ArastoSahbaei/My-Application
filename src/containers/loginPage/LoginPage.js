import React from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import LoginForm from "../../containers/loginForm/LoginForm"
import { login } from "../../actions/auth"
import "./LoginPage.css"

class LoginPage extends React.Component {

    submit = (data) => this.props.login(data).then(() => this.props.history.push("/dashboard"))

    render() {
        return (
        <div>
          <div className="thisIsMyImage" />

            <LoginForm submit={this.submit} />
        </div>
        )
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
  }

export default connect(null, { login })(LoginPage)