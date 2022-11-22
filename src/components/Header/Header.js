import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContex';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const {user, logOut}  = useContext(AuthContext)
    // console.log(user);
    return (
        <nav className='main-nav'>
            <div className='hdr-lft'>
                <Link to=''><img src={logo} alt="" /></Link>
            </div>
            <div className='hdr-rgt'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? 
                    <button className='lg-btn' onClick={logOut}>Log Out</button>
                    :
                    <>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Login</Link>
                    </>
                }
                {/* <span>{user?.email}</span> */}
            </div>
        </nav>
    );
};

export default Header;