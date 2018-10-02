import React from 'react';
import Product from './Product/Product';
import './Products.module.css';

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
       <div className="Product-wrapper">
           {theProducts}
       </div> 
    );
}

export default products;