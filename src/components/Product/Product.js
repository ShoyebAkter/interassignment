import React from 'react';
import './Product.css'

const Product = ({image,data,handleAddToCart}) => {
    return (
        <div className='product'>
            <img src={image} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{data.product.name}</p>
                <p>${data.product.prices[0].amount}</p>
            </div>
            <button onClick={() => handleAddToCart(data)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
            </button>
        </div>
    );
};

export default Product;