import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='title-container'>Please SignUp</h2>
            <form >
                <div className='form-control'>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" required id="email" placeholder='your email' />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required id="password" placeholder='your password' />
                </div>
                <input className='btn-submit' type="submit" value="SignUp" />
            </form>
            <p className='space'>Already have an account? Please <Link to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;