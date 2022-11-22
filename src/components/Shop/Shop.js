import React, { useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*
count: loaded
perPage: 10
pages: count / perPage
currentPage
*/ 
const Shop = () => {
    // const { products, count } = useLoaderData();  // {count: 76, products: Array(76)}
    const[products, setProducts] = useState([]);
    const[count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0); // current kon page e achi,,,,,, surute 0 te achi
    const [size, setSize] = useState(10) // mane koto gulo kroe data dekhabo par page e,daefault vabe 10 dichi, seita changbl

    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`;
        // console.log(page, size)
        fetch(url)
        .then(res => res.json())
        .then(data => { // confusion with server data 
            console.log(data);
            setCount(data.count);
            setProducts(data.products)
        })

    },[page, size])

    const pages = Math.ceil(count / size); // mot koto page hbe(vag korte gele purno sonkha korte hbe,jehatu eitake loo kortechi, purno sonkha chara loop hbe na , error dibe) 76/10=7.6 eitake purno songkhay niye aste hbe, loop throw korar jonno


    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    useEffect(() => {
        const storedCart = getStoredCart() ;
        const savedCart = [];
        const ids = Object.keys(storedCart);
        fetch('http://localhost:5000/productsByIds',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
        .then(res => res.json())
        .then(data => {
            // console.log('by ids', data)
            console.log(data)
            for (const id in storedCart) {
                const addedProduct = data.find(product => product._id === id);
                if(addedProduct) {
                    const quantity = storedCart[id]; // id er value
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct)
                }
            }
            setCart(savedCart)
        })
        
        
    },[products])

    
    const handleAddToCart = selectedProduct =>{
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct._id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product._id}
                        product={product}
                        
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div >
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/orders'>
                        <button className='review'>
                            <span>Review Order</span>
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
            <div className='pagiantion'>
                <p>Currently selected page: {page} and size: {size}</p>
                {  
                    // kto page seitar index ta diye loop korechi , eikahne (pages) er joto number sei onujae index ta hbe
                    [...Array(pages).keys()].map(number => <button 
                        onClick={() => setPage(number)}
                        key={number} 
                        className={page === number ? 'selected' : ''}
                        >
                            {number + 1}
                        </button>)
                }
                <select onChange={event => setSize(event.target.value)}> {/*koyta kore data dekhabo*/}
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;