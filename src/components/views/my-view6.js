/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
import { PageViewElement } from '../shared/page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../../store.js';

// // These are the actions needed by this element.
// import { checkout } from '../../actions/shop.js';

// // We are lazy loading its reducer.
// import shop, { cartQuantitySelector } from '../../reducers/shop.js';
// store.addReducers({
//   shop
// });

// These are the shared styles needed by this element.
import { SharedStyles } from '../shared/shared-styles.js';
import { ButtonSharedStyles } from '../shared/button-shared-styles.js';

class MyView6 extends connect(store)(PageViewElement) {
  static get properties() {
    return {};
  }

  static get styles() {
    return [ // multiple styles example
      SharedStyles,
      ButtonSharedStyles,
      css`
        button {
          border: 2px solid var(--app-dark-text-color);
          border-radius: 3px;
          padding: 8px 16px;
        }

        button:hover {
          border-color: var(--app-primary-color);
          color: var(--app-primary-color);
        }

        .cart,
        .cart svg {
          fill: var(--app-primary-color);
          width: 64px;
          height: 64px;
        }

        .circle.small {
          margin-top: -72px;
          width: 28px;
          height: 28px;
          font-size: 16px;
          font-weight: bold;
          line-height: 30px;
        }

        html, body {
          text-align: center;
          padding-top: 40px;
          
          -webkit-perspective: 700px;
             -moz-perspective: 700px;
              -ms-perspective: 700px;
                  perspective: 700px;
        }
        
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        
        tr:nth-child(even) {
          background-color: #dddddd;
        }
        
      `
    ];
  }

  render() {
    return html`
      <section>

        <h2>Meals</h2>
      </section>
      <section>
        <table>
          <tr>
            <th> Day </th>
            <th> Lunch </th>
            <th> Dinner </th>
          </tr>
          <tr>
            <td> Monday </td>
            <td> Breakfast </td>
            <td> Turkey Breast, Mashed Potatoes, Corn </td>
          </tr>
          <tr>
            <td> Tuesday </td>
            <td> Chicken Sandwich </td>
            <td> Stroganoff </td>
          </tr>
          <tr>
            <td> Wednesday </td>
            <td> Tacos </td>
            <td> Jerk Chicken, Carribean Rice, Mango Salsa </td>
          </tr>
          <tr>
            <td> Thursday </td>
            <td> Chicken Wings, Salad Bar, Rice </td>
            <td> Salmon, Roasted Potatoes, Asparagus </td>
          </tr>
          <tr>
            <td> Friday </td>
            <td> Pulled Pork Sandwich, Soup </td>
            <td> Burgers </td>
          </tr>
        </table>
        <h3>10/7/19 Meals </h3>
      </section>
    `;
  }


  // This is called every time something is updated in the store.
  stateChanged(state) {}
}

window.customElements.define('my-view6', MyView6);
