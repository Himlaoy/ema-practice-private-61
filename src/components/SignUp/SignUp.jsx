import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const {createUser} = useContext(AuthContext)
    


    const handleSignUp =(event)=>{

        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm)

        setError('')
        if(password !== confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length< 6){
            setError('Pass code should be in more than six or larger')
            return
        }

        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            setError('')
            setSuccess('logged in successfully')
        })
        .catch(error=>{
            setError(error.message)
            setSuccess('')
        })





    }

    return (
        <div className='form-container'>
            <h2 className='title-container'>Please SignUp</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" required id="email" placeholder='your email' />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required id="password" placeholder='your password' />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required id="" placeholder='your password' />
                </div>
                <input className='btn-submit' type="submit" value="SignUp" />
            </form>
            <p className='space'>Already have an account? Please <Link to="/login">Login</Link></p>
            <p className='error to'>{error}</p>
            <p className='success to'>{success}</p>
        </div>
    );
};

export default SignUp;