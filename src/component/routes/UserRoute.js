import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Route, Redirect, withRouter } from "react-router-dom"

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  console.log("YOU ARE AUTHENTICATED: " + isAuthenticated)
  return (
  <Route {...rest} render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
    }
  />
)
  }

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default withRouter(connect(mapStateToProps)(UserRoute))