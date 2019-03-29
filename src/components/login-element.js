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
import { plusIcon, minusIcon } from './my-icons.js';

// These are the shared styles needed by this element.
import { ButtonSharedStyles } from './button-shared-styles.js';

// @redux-step import store
// This element is connected to the Redux store.
import { store } from '../store.js';

// @redux-step import action from cooresponding action file 
// These are the actions needed by this element.
import {
  loginUser
} from '../actions/app.js';

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
          <form @submit="${this._onLogin}">
            Login here: <input @change="${this._setUser}" type="text" />
            <button >submit</button>
          </form>
        </p>
      </div>
    `;
  }

  constructor() {
    super();
    this._currentUser = null;
  }

  // @redux-step create local function for dispatching store action
  _onLogin(e) {
    e.preventDefault();
    console.log("LOGIN", this._currentUser);
    store.dispatch(loginUser(this._currentUser));
    this.dispatchEvent(new CustomEvent('user-login'));
  }

  _setUser(e) {
    this._currentUser = e.target.value;
    console.log("user set to", e.target.value);
  }
}

window.customElements.define('login-element', LoginElement);
