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
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <h2>Dashboard</h2>
        <p>Placehoder Text. Maybe make this an info feed or dashboard?</p>
        <p>It doesn't do anything other than display some static text right now.</p>
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
