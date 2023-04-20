import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)
    console.log(user)

    const getOut=()=>{
        logOut()
        .then(()=>{ })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <nav className='Header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/checkout">CheckOut</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/Login">LogIn</Link>
                <Link to="/signup">SignUp</Link>

                {
                    user && <span className='text'>{user.email} <button onClick={getOut}>SignUot</button></span>
                }
            </div>

        </nav>
    );
};

export default Header;