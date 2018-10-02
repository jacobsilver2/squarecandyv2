import React, { Component } from 'react';
import LineItem from '../LineItem/LineItem';
import styles from './Cart.module.css';

class Cart extends Component {

    openCheckout = () => {
        window.open(this.props.checkout.webUrl);
    }

    render() {
        let line_items = this.props.checkout.lineItems.map((line_item) => {
            return (
                <LineItem 
                    updateQuantityInCart={this.props.updateQuantityInCart}
                    removeLineItemInCart={this.props.removeLineItemInCart}
                    key={line_item.id.toString()}
                    line_item={line_item}
                />
            );
        });

        return (
            <div className={`${styles.Cart} ${this.props.isCartOpen ? `${styles.Cart_open}` : ''}`}>
            <header className={styles.Cart__header}>
              <h2>Your cart</h2>
              <button
                onClick={this.props.handleCartClose}
                className={styles.Cart__close}>
                ×
              </button>
            </header>
            <ul className={styles.Cart__line_items}>
              {line_items}
            </ul>
            <footer className={styles.Cart__footer}>
              <div className={`${styles.Cart_info} clearfix`}>
                <div className={`${styles.Cart_info__total} ${styles.Cart_info__small}`}>Subtotal</div>
                <div className={styles.Cart_info__pricing}>
                  <span className={styles.pricing}>$ {this.props.checkout.subtotalPrice}</span>
                </div>
              </div>
              <div className={`${styles.Cart_info} clearfix`}>
                <div className={`${styles.Cart_info__total} ${styles.Cart_info__small}`}>Taxes</div>
                <div className={styles.Cart_info__pricing}>
                  <span className={styles.pricing}>$ {this.props.checkout.totalTax}</span>
                </div>
              </div>
              <div className={`${styles.Cart_info} clearfix`}>
                <div className={`${styles.Cart_info__total} ${styles.Cart_info__small}`}>Total</div>
                <div className={styles.Cart_info__pricing}>
                  <span className={styles.pricing}>$ {this.props.checkout.totalPrice}</span>
                </div>
              </div>
              <button className={`${styles.Cart__checkout} ${styles.button}`} onClick={this.openCheckout}>Checkout</button>
            </footer>
          </div> 
        );
    }
}

export default Cart;