import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContex';
import './Login.css'
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/' ;
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            
            const user = result.user;
            alert('log in succesfully');
            form.reset();

            navigate(from, {replace: true});

            console.log(user);

        })
        .catch(error => {
            console.error(error);
        })
    }   
    return (
        <div className='form-container'>
           <h2 className='form-title'>Login</h2>
            <form className='form-innr' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input type="submit" className='btn-submit' value="Login" />
            </form>
            <p>New to Ema-john? <Link to='signup'>Create New Account</Link></p>
            <div className='after-brder'>
                <span>or</span>
            </div>
        </div>
    );
};

export default Login;