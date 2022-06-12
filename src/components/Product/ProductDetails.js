import React from 'react';
import './ProductDetails.css'

const ProductDetails = ({productDetails}) => {
    console.log(productDetails);
    const{image,index,attribute,sizeValue,symbol,price,description}=productDetails;


    return (
        <div className='details'>
            <div>
                <img src="" alt=""></img>
            </div>
            <div>
                <div>Name: {attribute}</div>
                <div>Size:</div>
                <div>Color:</div>
                <div>{symbol}: {price}</div>
                <button>Add to Cart</button>
                `{description}`
            </div>
        </div>
    );
};

export default ProductDetails;