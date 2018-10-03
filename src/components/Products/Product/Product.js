import React, { Component } from 'react';
// import VariantSelector from '../../VariantSelector/VariantSelector';
import styles from './Product.module.css';

class Product extends Component {
    constructor(props) {
        super(props)

        let defaultOptionValues = {};
        this.props.product.options.forEach((selector) => {
          defaultOptionValues[selector.name] = selector.values[0].value;
        });
        this.state = { selectedOptions: defaultOptionValues };
    }

    findImage = (images, variantId) => {
        const primary = images[0];
        const image = images.filter((image) => {
            return image.variant_ids.includes(variantId);
        })[0];
        return (image || primary).src
    }

    handleOptionChange = event => {
        const target = event.target;
        let selectedOptions = this.state.selectedOptions;
        selectedOptions[target.name] = target.value;

        const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

        this.setState({
            selectedVariant: selectedVariant,
            selectedVariantImage: selectedVariant.attrs.image
        });
    }

    handleQuantityChange = event => {
        this.setState({
            selectedVariantQuantity: event.target.value
        });
    }

    render() {
        let variantImage = this.state.selectedVariantImage || this.props.product.images[0];
        let variant = this.state.selectedVariant || this.props.product.variants[0];
        let variantQuantity = this.state.selectedVariantQuantity || 1;
        // let variantSelectors = this.props.product.options.map((option) => {
        //     return (
        //         <VariantSelector 
        //             handleOptionChange={this.handleOptionChange}
        //             key={option.id.toString()}
        //             option={option}
        //         />
        //     );
        // });
        return (
            <div className={styles.Product}>
                <div className={styles.Product__image__container}>
                    {this.props.product.images.length ? <img src={variantImage.src} alt={`${this.props.product.title}`}/> : null}
                </div>
                <h5 className={styles.Product__title}>{this.props.product.title}</h5>
                <span className={styles.Product__price}>${variant.price}</span>
                <div className={styles.Product__option_align}>
                    <label className={styles.Product__option}>
                        Quantity
                        <input className={styles.Product__option__textbox} min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
                    </label>
                </div>
                <div className={styles.button_align}>
                    <button className={`${styles.Product__buy} ${styles.button}`} onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default Product;