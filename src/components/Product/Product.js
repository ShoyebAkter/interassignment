import React, { useEffect, useState } from 'react';
import './Product.css'

const Product = ({data,image,handleAddToCart,index,handleDetails}) => {
    // const [product,setProduct]=useState();
    // const [attribute,setAttribute]=useState()

    // useEffect(()=>{
    //     setAttribute(data.product.attributes.name)
    // },[attribute])
    return (
        <div className='product'>
            <img src={image} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{data.product.name}</p>
                <p>{data.product.prices[index].currency.symbol} {data.product.prices[index].amount}</p>
            </div>
            <button onClick={() => handleAddToCart(data)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
            </button>
            <button onClick={()=>handleDetails(image,index)}>Details</button>
        </div>
    );
};

export default Product;