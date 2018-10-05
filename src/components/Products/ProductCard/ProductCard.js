import React from 'react';
import styles from './ProductCard.module.css';


const productCard = ({height, toggle, on, width, rotation, product, variantImage, variant, variantQuantity, handleQuantityChange, addVariantToCart}) => {
    
    return (
            <div className={styles.ProductCard} style={{height, width, transform: `rotate(${rotation})`}} onClick={toggle}>
                <div className={styles.ProductCard__image__container}>
                    {product.images.length ? <img src={variantImage.src} alt={`${product.title}`}/> : null}
                </div>
                <h5 className={styles.ProductCard__title}>{product.title}</h5>
                <span className={styles.ProductCard__price}>${variant.price}</span>
                {on && 
                    <div className={styles.ProductCard__option_align}>
                        <label className={styles.ProductCard__option}>
                            Quantity
                            <input className={styles.ProductCard__option__textbox} min="1" type="number" defaultValue={variantQuantity} onChange={handleQuantityChange}></input>
                        </label>
                        <div className={styles.button_align}>
                            <button className={`${styles.ProductCard__buy} ${styles.button}`} onClick={ () => addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>
                        </div>
                    </div>

                }
            </div>
        )
};

export default productCard;