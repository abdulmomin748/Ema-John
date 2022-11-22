import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContex';
import './SignUp.css'
const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    const handleSubmit =(e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value;

        if(password.length < 6) {
            setError('Password shuld be 6 cherecter or more!')
        }

        if(password !== confirmPassword) {
            setError('Your Password didnt match')
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })

        console.log(email,password,confirmPassword);
    }


    return (
        <div className='form-container'>
           <h2 className='form-title'>Sign Up</h2>
            <form className='form-innr' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="" />
                </div>
                <input type="submit" className='btn-submit' value="Sign Up" />
            </form>
            <p>Already have an account? <Link to='signup'>Login</Link></p>
            <p className='text-error'>{error}</p>
            <div className='after-brder'>
                <span>or</span>
            </div>
        </div>
    );
};

export default SignUp;