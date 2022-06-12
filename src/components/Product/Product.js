import React, { useEffect, useState } from 'react';
import './Product.css'

const Product = ({data,image,handleAddToCart,index,handleDetails}) => {
    const [product,setProduct]=useState();
    const [id,setId]=useState(index);
    const [quantity,setQuantity]=useState(0)
    const [attribute,setAttribute]=useState()
    const [sizeValue,setSizeValue]=useState()
    const [price,setPrice]=useState()
    const [symbol,setSymbol]=useState()
    const [description,setDescription]=useState()

    useEffect(()=>{
        setAttribute(data.product.attributes[0].name)
        setSizeValue(data.product.attributes[0].items[index])
        setPrice(data.product.prices[index].amount)
        setSymbol(data.product.prices[index].currency.symbol)
        setDescription(data.product.description)
    },[])
    // console.log(sizeValue);
    return (
        <div className='product'>
            <img src={image} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{data.product.name}</p>
                <p>{symbol} {price}</p>
            </div>
            <button onClick={() => handleAddToCart({id,image,index,attribute,sizeValue,symbol,price,description,quantity})} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
            </button>
            <button onClick={()=>handleDetails({id,image,index,attribute,sizeValue,symbol,price,description,quantity})}>Details</button>
        </div>
    );
};

export default Product;