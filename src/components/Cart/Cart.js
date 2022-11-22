import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
const Cart = ({cart,clearCart,children}) => {
//    console.log(cart);
   let total = 0;
   let shipping = 0;
   let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
   const tax = parseFloat((total * 10 / 100).toFixed(2));
   const grandTotal = total + shipping + tax;

    return (
        <div className='cart-innr'>
            <h2 className='order-title'>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:  ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h2 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h2>
            <div className='btn-cntlr-cart'>
                {/* <button className='clear' onClick={() => clearCart()}>
                    <span>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </button> */}
                {children}
            </div>
        </div>
    );
};





export default Cart;