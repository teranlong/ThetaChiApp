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

class MyView4 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }
  render() {
    // lookup 'tagged template'
    return html`
    <style>
    @media (max-width: 550px) {
        .big-container {
            display: none;
        }
    }
    @media (min-width: 550px) {
        .small-container {
            padding-top: 60%;
            padding-bottom: 60%;
            display: none;
        }
    }
    /* Responsive iFrame */
    .responsive-iframe-container {
        position: relative;
        padding-top: 55%;
        padding-bottom: 55%;
        height: 0;
        overflow: hidden;
    }
    .responsive-iframe-container iframe,   
    .vresponsive-iframe-container object,  
    .vresponsive-iframe-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    </style>

    <section>
      <h2>Calendar</h2>
    </section>

    <div class="responsive-iframe-container big-container">
    <iframe src="https://calendar.google.com/calendar/embed?src=4p2e7cjorv167paas7bt3hgpmg%40group.calendar.google.com&ctz=America%2FLos_Angeles" style="border-width:0" width="100%" height="650" frameborder="0" scrolling="no"></iframe>
    </div>

    <div class="responsive-iframe-container small-container">
    <iframe src="https://calendar.google.com/calendar/embed?title=Social%20Schedule&amp;showDate=0&amp;showPrint=0&amp;showTz=0&amp;mode=AGENDA&amp;wkst=1&amp;bgcolor=%23ffcc33&amp;src=4p2e7cjorv167paas7bt3hgpmg%40group.calendar.google.com&amp;color=%2342104A&amp;ctz=America%2FLos_Angeles" style="border-width:0" frameborder="0" scrolling="no"></iframe>
    </div>
    `
  }
}

window.customElements.define('my-view4', MyView4);