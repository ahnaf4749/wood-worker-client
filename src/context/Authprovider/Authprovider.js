import React, { createContext, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/Firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null)

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;