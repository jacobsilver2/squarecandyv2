import React, { Component, Fragment } from 'react';
import styles from './App.module.css';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';

class App extends Component {
  state = {
    isCartOpen: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
    showComponent: false
  };

  componentDidMount() {
    this.props.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    this.props.client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
    });

    this.props.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  addVariantToCart = (variantId, quantity) => {
    this.setState({
      isCartOpen: true
    })
    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      })
    })
  };

  updateQuantityInCart = (lineItemId, quantity) => {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];

    return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      })
    })
  }

  removeLineItemInCart = (lineItemId) => {
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      })
    })
  }

  handleCartClose = () => {
    this.setState({
      isCartOpen: false,
    })
  }

  // handleModalClick = () => {
  //   console.log("I was called")
  //   this.setState({
  //     showComponent: !this.state.showComponent
  //   })
  // }

  render() {
    return (
      <div className={styles.App}>
        <header className={styles.App__header}>
          {!this.state.isCartOpen &&
            <div className={styles.App__view_cart_wrapper}>
              <button className={styles.App__view_cart} onClick={()=> this.setState({isCartOpen: true})}>Cart</button>
            </div>
          }
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <div className={styles.About} onClick={toggle}>About</div>
                <Modal on={on} toggle={toggle}><About /></Modal>
                </Fragment>
            )}
          </Toggle>
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <div className={styles.Contact} onClick={toggle}>Contact</div>
                <Modal on={on} toggle={toggle}><Contact /></Modal>
                </Fragment>
            )}
          </Toggle>
          <div className={styles.App__title}>
            <h1>Square Candy</h1>
          </div>
        </header>


          <Products 
            products={this.state.products}
            client={this.props.client}
            addVariantToCart={this.addVariantToCart}
          />
          <Cart 
            checkout={this.state.checkout}
            isCartOpen={this.state.isCartOpen}
            handleCartClose={this.handleCartClose}
            updateQuantityInCart={this.updateQuantityInCart}
            removeLineItemInCart={this.removeLineItemInCart}
          />
        </div>
      
    );
  }
}

export default App;
