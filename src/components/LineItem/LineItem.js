import React, { Component } from 'react';
import styles from  './LineItem.module.css';

class LineItem extends Component {

    decrementQuantity = lineItemId => {
        const updatedQuantity = this.props.line_item.quantity - 1;
        this.props.updatedQuantityInCart(lineItemId, updatedQuantity);
    }

    incrementQuantity = lineItemId => {
        const updatedQuantity = this.props.line_item.quantity + 1;
        this.props.updateQuantityInCart(lineItemId, updatedQuantity);  
    }


    render() {
        return (
            <li className={styles.Line_item}>
            <div className={styles.Line_item__img}>
              {this.props.line_item.variant.image ? <img src={this.props.line_item.variant.image.src} alt={`${this.props.line_item.title} product shot`}/> : null}
            </div>
            <div className={styles.Line_item__content}>
              <div className={styles.Line_item__content_row}>
                <div className={styles.Line_item__variant_title}>
                  {this.props.line_item.variant.title}
                </div>
                <span className={styles.Line_item__title}>
                  {this.props.line_item.title}
                </span>
              </div>
              <div className={styles.Line_item__content_row}>
                <div className={styles.Line_item__quantity_container}>
                  <button className={styles.Line_item__quantity_update} onClick={() => this.decrementQuantity(this.props.line_item.id)}>-</button>
                  <span className={styles.Line_item__quantity}>{this.props.line_item.quantity}</span>
                  <button className={styles.Line_item__quantity_update} onClick={() => this.incrementQuantity(this.props.line_item.id)}>+</button>
                </div>
                <span className={styles.Line_item__price}>
                  $ { (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }
                </span>
                <button className={styles.Line_item__removestyles} onClick={()=> this.props.removeLineItemInCart(this.props.line_item.id)}>×</button>
              </div>
            </div>
          </li>
        );
    }
}

export default LineItem;