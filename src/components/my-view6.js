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
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { checkout } from '../actions/shop.js';

// We are lazy loading its reducer.
import shop, { cartQuantitySelector } from '../reducers/shop.js';
store.addReducers({
  shop
});

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
import { addToCartIcon } from './my-icons.js';

class MyView6 extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      // This is the data from the store.
      _quantity: { type: Number },
      _error: { type: String }
    };
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
            <td> Grilled Cheese, Tomato Soup, Salad Bar </td>
            <td> Braised Beef, Mashed Potatoes, Green Beans </td>
          </tr>
          <tr>
            <td> Tuesday </td>
            <td> Breakfast </td>
            <td> Yaki Soba with Chicken</td>
          </tr>
          <tr>
            <td> Wednesday </td>
            <td> Tacos </td>
            <td> Meatloaf, Au Gratin Potatoes, Green Peas </td>
          </tr>
          <tr>
            <td> Thursday </td>
            <td> Chicken Sandwich </td>
            <td> Salmon, Roasted Red Potatoes </td>
          </tr>
          <tr>
            <td> Friday </td>
            <td> Meatball Subs </td>
            <td> Burgers </td>
          </tr>
        </table>
        <h3>3/11/19 Meals </h3>
      </section>
    `;
  }

  _checkoutButtonClicked() {
    store.dispatch(checkout());
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._quantity = cartQuantitySelector(state);
    this._error = state.shop.error;
  }
}

window.customElements.define('my-view6', MyView6);