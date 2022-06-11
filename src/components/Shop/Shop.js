import React, { useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import './Shop.css';
import Product from '../Product/Product';

const PRODUCTS_QUERY = gql`
query{
    product(id:"jacket-canada-goosee"){
      name,
      gallery,
      prices{
        amount
      }
    }
  }
`;
const Shop = () => {
    const [cart, setCart] = useState([]);
    const { data, loading, error } = useQuery(PRODUCTS_QUERY);
    console.log(data);
     if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        // let newCart = [];
        // const exists = cart.find(product => product.id === selectedProduct.id);
        // if(!exists){
        //     selectedProduct.quantity = 1;
        //     newCart = [...cart, selectedProduct];
        // }
        // else{
        //     const rest = cart.filter(product => product.id !== selectedProduct.id);
        //     exists.quantity = exists.quantity + 1;
        //     newCart = [...rest, exists];
        // }
        
        // setCart(newCart);
        // addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                   data.product.gallery.map(image=><Product 
                        image={image}
                        data={data}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            
        </div>
    );
};

export default Shop;