import React from 'react';
import { Link } from 'react-router-dom';

const Longin = () => {

    const handleSubmit=(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }

    return (
        <div className='form-container'>
            <h2 className='title-container'>Please Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" required id="email" placeholder='your email' />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required id="password" placeholder='your password' />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='space'>Don't have an account? Please <Link to="/signup">SignUp</Link></p>
        </div>
    );
};

export default Longin;