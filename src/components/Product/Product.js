import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({handleAddToCart,product}) => {
    // console.log(handleAddToCart,product);
    // const {handleAddToCart,product} = props;
    const {img,name,price,seller,ratings,id} = product;
    
    return (
        <div className='product'>
            <img src={img || ('https://via.placeholder.com/320x320.png')} alt="" />
            <div className='product-info'>
                <h3 className='p-title'>{name}</h3>
                <h4 className='price'>price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <span>Add to cart</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;