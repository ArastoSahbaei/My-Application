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
      },
      oldPassword: "",
      repeatedNewPassword: "",
      newPassword: "",
      currentUser: "",
      passwordIsSame: false,
      newEmail: "",
      newFirstName:"",
      newLastName:""
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
    /*  this.setState({value: event.target.value}); */
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.oldPassword)
  }

  updateEmail = () => {
    const newUserInfo ={
      id : this.state.currentUser.id,
      email: this.state.newEmail
    }
    Axios.put('http://localhost:8080/lagbevakning/user/updateemail', newUserInfo).then(response=>{
      console.log(response);
      if(response.status===200){
        sessionStorage.setItem('email',this.state.newEmail)
        Axios.get('http://localhost:8080/lagbevakning/user/email?email='+sessionStorage.getItem("email"))
          .then( response => {
            this.setState({currentUser: response.data});
          })
        console.log("Everythin done");
      }
    })
  }


  updatePassword = () => {
    if (this.state.data.newPassword !== this.state.data.repeatedNewPassword){
      this.setState({passwordIsSame: false})
      console.log("are not same");
    }
    else{
      console.log(this.state.newPassword + " " + this.state.oldPassword);
      this.setState({passwordIsSame: true})
      const newUserInfo ={
        oldPassword: this.state.oldPassword,
        newPassword: this.state.newPassword,
        id: this.state.currentUser.id
      };
      Axios.put('http://localhost:8080/lagbevakning/user/updatepassword', newUserInfo).then(response =>{
        console.log(response);
        Axios.get('http://localhost:8080/lagbevakning/user/email?email='+sessionStorage.getItem("email"))
          .then( response => {
            this.setState({currentUser: response.data});
          })
      })

    }
  }

  render() {
    return (
      <div>
        <h1>Your profile:</h1>

        <p>Name: {this.state.currentUser.firstName} {this.state.currentUser.lastName}</p>
        <p>Email: {this.state.currentUser.email}</p>
        {this.editEmail()}

        <Popup class="passwordPopup" trigger={<a className="changePasswordButton"> Change password </a>} modal>
          {close => (
            <div className="changePasswordText">
              <Form className="test" onSubmit = {this.onSubmit}>

             <span><label>Old password <br/></label>
             <input
               type="password"
               name="oldPassword"
               onChange={this.handleChange}/></span>

                <span><label>New password <br/></label>
             <input
               type="password"
               name="newPassword"
               onChange={this.handleChange}/></span>

                <span><label>Repeat new password <br/></label>
             <input
               type="password"
               name="repeatedNewPassword"
               onChange={this.handleChange}/></span>

                <button
                  onClick={this.updatePassword.bind()}>Save</button>
                <button onClick={close.bind()}>Cancel</button>
              </Form>
            </div>
          )}
        </Popup>
      </div>
    )
  }

  editEmail(){
    return(
      <div>
        <Popup class="emailPopup" trigger={<a className="changeEmailButton"> edit</a>} modal>
          {close => (
            <div className="changeEmailText">
              <Form className="test" onSubmit = {this.onSubmit}>
                <span><label>New email <br/></label>
             <input
               type="email"
               name="newEmail"
               onChange={this.handleChange}/></span>
                <button
                  onClick={this.updateEmail.bind()}>Save</button>
                <button onClick={close.bind()}>Cancel</button>
              </Form>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default  ProfilePage
