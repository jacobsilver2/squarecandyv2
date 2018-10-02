import React from 'react';
import Product from './Product/Product';
import styles from './Products.module.css';

const products = ({products, addVariantToCart, client}) => {
    let theProducts = products.map((product) => {
        return (
            <Product 
                addVariantToCart={addVariantToCart}
                client={client}
                key={product.id.toString()}
                product={product}
            />
        );
    });
    return (
       <div className={styles.Product_wrapper}>
           {theProducts}
       </div> 
    );
}

export default products;