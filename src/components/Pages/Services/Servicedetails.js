import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import Servicecard from '../Home/Servicess/Servicecard';
import Serviceaccour from './Serviceaccour';
import ServicePrice from './ServicePrice';

const Servicedetails = () => {
    const { image, name, service, details, price } = useLoaderData();
    return (
        <div>
            <div className='shadow-2xl'>
                <p className='text-center text-3xl font-bold underline mt-5'>All details</p>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='w-1/2'>
                            <img className='rounded-lg' src={image} alt=''></img>
                        </div>
                        <div className='w-1/2'>
                            <Serviceaccour service={service}></Serviceaccour>
                        </div>
                    </div>
                </div>
                <div className='my-5 ml-14 mr-10'>
                    <p className='text-center text-2xl font-bold underline'>{name}</p>
                    <p className='mt-5 mr-5'>{details}</p>
                </div>
                <div className='p-5'>
                    <p className='text-center text-2xl underline font-bold mb-5'>PRICE & PLAN</p>
                    <ServicePrice price={price} ></ServicePrice>
                </div>
            </div>
        </div>
    );
};

export default Servicedetails;