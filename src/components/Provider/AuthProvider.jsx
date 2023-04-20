import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    const createUser=(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        signOut(auth)
    }

    const userInfo= {
        user,
        createUser,
        loginUser,
        logOut,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;