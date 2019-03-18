import React, { Component } from "react";
import "./ProfilePage.css"
import Axios from "axios";
import Popup from "reactjs-popup";
import { Form } from "semantic-ui-react";


class ProfilePage extends Component {

  constructor(){
    super();
    this.state = {
    data: {
      oldPassword: "",
      repeatedNewPassword: "",
      newPassword: ""
    },
    currentUser: "",
    passwordIsSame: false
  }
    this.handleChange = this.handleChange.bind(this);
    };

  componentDidMount = () => {
    console.log(this.state.data.oldPassword);
    Axios.get('http://localhost:8080/lagbevakning/user/email?email='+sessionStorage.getItem("email"))
      .then( response => {
        this.setState({currentUser: response.data});
      })
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value}
    })

  handleChange(event) {
    console.log(event.target.name);
    this.setState({[event.target.name] : [event.target.value]});
  }

  updatePassword = () => {
    if (this.state.data.newPassword !== this.state.data.repeatedNewPassword){
      this.state.passwordIsSame = true;
      console.log("are not same");
    }
    else{
      console.log(this.state.data.newPassword + " " + this.state.data.oldPassword);
      this.state.passWordIsSame = false;

      //Axios.put('http//localhost:8080/lagbevakning/user/updatepassword', {oldPassword, newPassword}).then(response =>{
       // console.log(console);
     // })
    }
  }

  render() {
    return (
      <div>
        <h1>Your profile:</h1>

        <p>Name: {this.state.currentUser.firstName} {this.state.currentUser.lastName}</p>
        <p>Email: {this.state.currentUser.email}</p>

        <Popup class="passwordPopup" trigger={<a className="button"> Change password </a>} modal>
          {close => (
           <div className="changePasswordText">
             <Form className="test" onSubmit = {this.onSubmit}>
             <span><label>Old password <br/></label>
             <input type="password" name="oldPassword" value={this.state.data.oldPassword} onChange={this.handleChange.bind()}/></span>
             <span><label>New password <br/></label>
             <input
               type="password"
               value={this.state.data.newPassword}
               name="newPassword"
               onChange={this.handleChange}
             /></span>
             <span><label>Repeat new password <br/></label>
             <input type="password" name="repeatedNewPassword" value={this.state.data.repeatedNewPassword} onChange={this.handleChange}/></span>
             <button onClick={this.updatePassword.bind()}>Save</button>
             <button>Cancel</button>
             </Form>
           </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default  ProfilePage
