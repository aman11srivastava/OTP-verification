import React, { Component } from 'react'
import firebase from './firebase'
export class App extends Component {
  handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    let number = '+918130321587';
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
      let code = prompt('Enter the OTP', '');
        if(code === null) return;
        e.confirm(code).then(function (result) {
            console.log(result.user);
            document.querySelector('label').textContent +=   result.user.phoneNumber + "Mobile Number verified Successfully";
        }).catch(function (error) {
            console.error( error);
        });
    })
    .catch(function (error) {
        console.error( error);
    });
  }
  render() {
    return (
      <div>
        <label></label>
        <div id="recaptcha"></div>
        <button onClick={this.handleClick}>Click to generate OTP</button>
      </div>
    )
  }
}

export default App
