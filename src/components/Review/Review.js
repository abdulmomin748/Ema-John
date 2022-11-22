import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Review.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Review = ({product,handleDelete}) => {
    // console.log(product);
    const {id,img, name, price, shipping,quantity} = product;
    return (
        <div className='review-item'>
            <div className='review-item-innr'>
                <div className='review-img'>
                    <img className='rvw-img' src={img} alt="" />
                </div>
                <div className='review-details'>
                    <div className='rvw-de-lft'>
                        <h3>{name}</h3>
                        <p>Price: {price}</p>
                        <p>Shipping Charge : {shipping}</p>
                        <p>Quantity : {quantity}</p>
                    </div>
                    <div className='rvw-de-lft'>
                        <button className='btn-delete' onClick={() => handleDelete(id)}>
                            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;