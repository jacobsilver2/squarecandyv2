import React from 'react';
import Product from './Product';

const products = ({products, addVariantToCart, client}) => {
    let products = products.map((product) => {
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
           {products}
       </div> 
    );
}

export default products;