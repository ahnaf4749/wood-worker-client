import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/Authprovider/Authprovider';
import Serviceaccour from './Serviceaccour';
import ServicePrice from './ServicePrice';
import Servicereview from './Servicereview';

const Servicedetails = () => {
    const { _id, image, name, service, details, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])



    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const reviewName = form.reviewName.value;
        const email = user?.email || 'unregistered';
        const photoURL = user?.photoURL || "undefiend"
        const reating = form.reating.value;
        const message = form.message.value;
        console.log(reating, message, name);

        const review = {
            service: _id,
            serviceName: name,
            authorname: reviewName,
            email,
            photoURL,
            reating,
            message

        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Your review successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])

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
                <div>
                    {
                        user?.uid ?

                            <form onSubmit={handlePlaceOrder}>
                                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 my-5 p-5'>
                                    <input type="text" name='reviewName' placeholder="Name" className="input input-bordered w-full " required />
                                    <input type="text" name='reating' placeholder="Your Reating" className="input input-bordered w-full " required />
                                </div>
                                <textarea name='message' className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your message"></textarea>
                                <div className='text-center p-5'>
                                    <input type="submit" value="Submit" className="btn my-5" />
                                </div>
                            </form>

                            :
                            <p>plz login</p>
                    }
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10 p-5'>
                    {
                        reviews.map(review => <Servicereview
                            key={review._id}
                            review={review}
                        ></Servicereview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Servicedetails;