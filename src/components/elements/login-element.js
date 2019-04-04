/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css } from 'lit-element';

// These are the elements needed by this element.
import { plusIcon, minusIcon } from '../shared/my-icons.js';

// These are the shared styles needed by this element.
import { ButtonSharedStyles } from '../shared/button-shared-styles.js';

// @redux-step import store
// This element is connected to the Redux store.
import { store } from '../../store.js';

// @redux-step import action from cooresponding action file 
// still a memeber of the actions/app.js class
import {
  loginUser
} from '../../actions/app.js';

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class LoginElement extends LitElement {
  static get properties() {
    return {
      // @redux-step add cooresponding local property
      _currentUser: { type: String }
    }
  }

  static get styles() {
    return [
      ButtonSharedStyles,
      css`
        span {
          width: 40px;
          display: inline-block;
          text-align: center;
          font-weight: bold;
        }
      `
    ];
  }
  render() {

    return html`
      <div>
        <p>
          <button  @click="${this._onLogin}">
                Connect with Facebook
            </button>
        </p>
      </div>
    `;
  }

  // @redux-step create local function for dispatching store action
  _onLogin(e) {
    console.log("LOGIN", this._currentUser);

    FB.login(this.checkLoginState(), {scope: 'email'});

    //
  }

  _setUser(e) {
    this._currentUser = e.target.value;
    console.log("user set to", e.target.value);
  }

  constructor() {
    super();
    this._currentUser = null;
    
    console.log("Before FB Init");
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    window.fbAsyncInit = ()=> {
      console.log("FB Init");
        FB.init({
          appId      : '958666841007764',
          cookie     : true,  // enable cookies to allow the server to access 
                              // the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v3.2' // The Graph API version to use for the call
        });

        FB.Event.subscribe('auth.statusChange', response => {
            if (response.authResponse) {
                this.checkLoginState();
            } else {
                console.log('[FacebookLoginButton] User cancelled login or did not fully authorize.');
            }
        });
    };
}

  checkLoginState(){
      FB.getLoginStatus(function(response) {
          this.statusChangeCallback(response);
      }.bind(this));
  }

  login(){
    console.log("Login Button Pressed!");
      FB.login(this.checkLoginState(), {scope: 'email'});
  }

  statusChangeCallback(response) {
      if (response.status === 'connected') {
          this.testAPI();
      } else if (response.status === 'not_authorized') {
          console.log("[FacebookLoginButton] Person is logged into Facebook but not your app");
      } else {
          console.log("[FacebookLoginButton] Person is not logged into Facebook");
      }
  }

  testAPI() {
      FB.api('/me', function(response) {
          console.log('[FacebookLoginButton] Successful login for: ', response);
          console.log('name:  ', response.name);

          this._currentUser = response.name;
          
          store.dispatch(loginUser(this._currentUser));
          this.dispatchEvent(new CustomEvent('user-login'));
      });
  }
}

window.customElements.define('login-element', LoginElement);
