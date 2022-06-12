import React from 'react';
import './ProductDetails.css'

const ProductDetails = () => {
    return (
        <div className='details'>
            <div>
                <img src="" alt=""></img>
            </div>
            <div>
                <div>Name:</div>
                <div>Size:</div>
                <div>Color:</div>
                <div>Price:</div>
                <button>Add to Cart</button>
                <div>Description</div>
            </div>
        </div>
    );
};

export default ProductDetails;