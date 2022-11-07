import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row gap-20 my-16">
                <div className="text-center lg:text-left">
                    {/* <img src={img} alt="" srcset="" /> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
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
                            <input className="btn bg-[#FF3811]" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center mb-5'>Already have an account plz <Link to='/login' className='text-[#FF3811] font-bold'>Login In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;