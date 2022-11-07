import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../context/Authprovider/Authprovider';
import { toast } from 'react-toastify';

const Login = () => {

    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLOgin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user.uid) {
                    toast('wow your google login is succesfully')
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row gap-20 my-16">
                <div className="text-center lg:text-left">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <h1 className="text-5xl font-bold text-center">Login</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn" type="submit" value="login" />
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>-------Login with social accounts-------</p>
                        <button onClick={handleGoogleLOgin} className="btn btn-outline btn-info my-5"><FaGoogle className='mr-2'></FaGoogle>Google login</button>
                    </div>
                    <p className='text-center mb-5'>Don't have an account? <Link to='/signup' className='font-bold'>Sign In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;