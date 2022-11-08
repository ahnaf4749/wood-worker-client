import React from 'react';

const About = () => {
    return (
        <div className=' my-14 shadow-2xl'>
            <h1 className='text-center text-4xl font-bold'>About Me</h1>
            <p className='text-2xl font-bold text-center my-3'>Over 25 Years Experience in This Industry</p>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img className='rounded-lg' src='https://media.istockphoto.com/id/166012482/photo/mature-carpenter-cutting-wooden-plank.jpg?s=612x612&w=0&k=20&c=MZs_VSlpphMNGnpY6aBSA2IhL-I3fsAceZmQde_1Z6Q=' alt=''></img>
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">I have more expreience<br /> on this platform</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;