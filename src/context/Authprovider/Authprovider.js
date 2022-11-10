import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/Firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (curreantUser) => {
            setLoading(false)
            setUser(curreantUser)

        })
        return () => {
            return unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        googleLogin,
        creatUser,
        loginIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;