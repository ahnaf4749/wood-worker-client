import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/Authprovider/Authprovider';

const Signup = () => {

    const { creatUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        creatUser(email, password)
            .then(result => {
                const user = result.user;
                if (user.uid) {
                    toast.success('Signup succesfully')
                }
                form.reset()
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row gap-20 my-16">
                <div className="text-center lg:text-left">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center mb-5'>Already have an account plz <Link to='/login' className='font-bold'>Login In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;