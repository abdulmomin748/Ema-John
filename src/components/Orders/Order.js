import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Orders = () => {
    const {products, initialCart} = useLoaderData();// loader theke data access korechi {products: products, initialCart: initialCart};
    const [cart, setCart] = useState(initialCart); // jahatu delete korte parbe user specific product
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart(); 
    }
    // console.log(products,initialCart);
    console.log(cart);

    const handleDelete = id => {
       const remainingProduct = cart.filter(product => product._id !== id);
       console.log(remainingProduct);
       setCart(remainingProduct);
       removeFromDb(id)
    }
    return (
        <div className='shop-container order-cntlr'>
            <div className='orders-container'>
                {
                    cart.map(product => <Review key={product._id} product={product} handleDelete={handleDelete} />)
                }
                {
                    cart.length === 0 && <h2>No Items for Review. Please <Link to='/'>Shop more</Link></h2>
                } 
            </div>
            <div className='cart-container'>
                <div className='shop-cart-innr'>
                    <Cart clearCart={clearCart} cart={cart}>
                        <Link to='/shipping'>
                            <button className='review'>Proceed Shipping</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;