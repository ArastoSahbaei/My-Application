import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Form, Button } from "semantic-ui-react"
import Validator from "validator"
import InlineError from "../../exceptions/InlineError"
import "./LoginForm.css"
import Card from '@material-ui/core/Card'
import rsm_logo from "../../services/images/rsm_logo.png"
import { connect } from "react-redux"
import { setLocale } from "../../actions/Locale"
import * as actions from "../../actions/auth"
import { FormattedMessage } from "react-intl"




class LoginForm extends Component {

    
    state = {
        data: { email: "",
        password: "" },
        loading: false,
        errors: {}
    }

    onChange = e => 
    this.setState({ 
        data: { ...this.state.data, [e.target.name]: e.target.value}
    })

    onSubmit = () => {
        const errors = this.validate(this.state.data)
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true })
            this.props.submit(this.state.data)
            .catch(err => this.setState({loading: false })
            )
        }
    }

    validate = (data) => {
        const errors = {}
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email"
        if (!data.password) errors.password = "Can't be blank!"
        return errors
    }

  render() {
    const { data, errors, loading } = this.state

    return (
      <div>
        <Card className="wrapperCard">
        <img src={rsm_logo} alt="The Logotype" />

            <span className="signIn">
            <i class="fas fa-handshake"> </i><FormattedMessage id="loginPage.5"/>
            <i class="fas fa-globe"></i> <FormattedMessage id="loginPage.6"/></span> 

          <Form className="test" onSubmit = {this.onSubmit} loading= {loading}>
            <Form.Field error = {!!errors.email}>
                                                        <a role="button" onClick={() => this.props.setLocale("en")}>EN</a> ||||
                                                        <a role="button" onClick={() => this.props.setLocale("se")}>SE</a>
                        <label htmlFor="email"> <i class="far fa-envelope"></i> <FormattedMessage id="loginPage.2"/> </label>
                        <input className="emailInput"
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="example@example.com"
                            value={data.email} 
                            onChange={this.onChange}
                        />
                        {errors.email && <InlineError text={errors.email} />}
                    </Form.Field>
                    <Form.Field error = {!!errors.password}>
                        <label htmlFor="password"> <i class="far fa-fingerprint fa"/> <FormattedMessage id="loginPage.3"/></label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="6-18 characters"
                            value={data.password} 
                            onChange={this.onChange}
                        />
                         {errors.password && <InlineError text={errors.password} />}
                    </Form.Field>
            <Button className="loginButton" primary><FormattedMessage id="loginPage.1"/><i className="fas fa-sign-out-alt"/></Button>
            <a className="forgotPassword" href="http://localhost:3000/login"><FormattedMessage id="loginPage.4"/></a> 
          </Form>
          </Card>
      </div>
    )
  }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}
function mapStateToProps(state) {
    return {
      user: state.user
    }
  }
export default connect(mapStateToProps, { setLocale })(
    LoginForm
  )