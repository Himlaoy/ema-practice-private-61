import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { onAuthStateChanged } from 'firebase/auth';

const Longin = () => {

    const {loginUser} = useContext(AuthContext)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
 

    const handleSubmit=(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)

        loginUser(email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            setSuccess('Login successfully')
            setError('')
            navigate('/')
        })
        .catch(error=>{
            setError(error.message)
            setSuccess('')
        })


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
            <p className='error'>{error}</p>
            <p className='success'>{success}</p>
        </div>
    );
};

export default Longin;


