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

// These are the actions needed by this element.
import { checkout } from '../../actions/shop.js';

// We are lazy loading its reducer.
import shop, { cartQuantitySelector } from '../../reducers/shop.js';
store.addReducers({
  shop
});

// These are the elements needed by this element.
import '../elements/shop-products.js';
import '../elements/shop-cart.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../shared/shared-styles.js';
import { ButtonSharedStyles } from '../shared/button-shared-styles.js';
import { addToCartIcon } from '../shared/my-icons.js';

class MyView3 extends connect(store)(PageViewElement) {
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
        
        
      `
    ];
  }

  render() {
    return html`
      <section>
        <h2>Blacklist</h2>
      </section>
      <section>
        <h3>Madeline Toll <input class="button" type="button" value="Report Sighting"/></h3>
        <img src="../images/blacklist1.png" style="max-width: 100%; height: auto;"/>
        <p>Alright brothers, the moment many of us have been waiting for has finally arrived. Maddie toll (pictured above) is now officially blacklisted. If you see her stomping around any part of our premises during the day OR night, please notify Beau, Ethan, or any other of e board ASAP!</p>
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

window.customElements.define('my-view3', MyView3);


/**
 * 
        <div class="cart">${addToCartIcon}<div class="circle small">${this._quantity}</div></div>
        <p>This is a slightly more advanced Redux example, that simulates a
          shopping cart: getting the products, adding/removing items to the
          cart, and a checkout action, that can sometimes randomly fail (to
          simulate where you would add failure handling). </p>
        <p>This view, as well as its 2 child elements, <code>&lt;shop-products&gt;</code> and
        <code>&lt;shop-cart&gt;</code> are connected to the Redux store.</p>
      <section>
        <h3>Products</h3>
        <shop-products></shop-products>

        <br>
        <h3>Your Cart</h3>
        <shop-cart></shop-cart>

        <div>${this._error}</div>
        <br>
        <p>
          <button ?hidden="${this._quantity == 0}" @click="${this._checkoutButtonClicked}">
            Checkout
          </button>
        </p>
      </section>
 */