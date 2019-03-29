/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { PageViewElement } from '../shared/page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../../store.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../shared/shared-styles.js';

// @react-step import custom element
import '../elements/login-element.js';

class MyView1 extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      // This is the data from the store.
      _name: { type: String }
    };
  }

  static get styles() {
    return [
      SharedStyles
    ];
  }

  _msg() {
    console.log("Login recieved");
  }

  render() {
    console.log("Rendered");
    return html`
      <section>
        <h2>Dashboard</h2>
        <p>Placehoder Text. Maybe make this an info feed or dashboard?</p>
        <p>It doesn't do anything other than display some static text right now.</p>
      </section>
      <section>
        <h2>
          Login here: 
        </h2>
        <p style="text-align:center">
          <!-- @react-step use custom element -->
          <!-- listen for custom event defined in element class -->
          <login-element
            @user-login="${this._msg}">
          </login-element>
        </p>
      </section>

      <section>
        <h2>Your Feed</h2>
        <p>Welcome to your ThetaChi app. This is some bs sample text that Nate put in, but at least we know how to do this now.</p>
      </section>
      <section>
      <h2>Pro tip:</h2>
        <p>Try this app on your phone or desktop. The link is the same. Add to home screen for a more applike expirience.</p>
        <p>On Android press the "add to homescreen" prompt that pops up at the bottom. On IOS (Safari) press the button at the bottom of the page that looks like square with an arrow trying to excape then press "add to homescreen". On web (chrome) press the three dots in the top right corner then press "install theta chi app".<p>
        <p>Close the app and reload from the home screen icon for a more app-like feel<p> 
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
