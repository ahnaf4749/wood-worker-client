import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/Authprovider/Authprovider';
import Review from './Review';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://assaienment-11-servar.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const procced = window.confirm('Are you sure, delete this review')
        if (procced) {
            fetch(`https://assaienment-11-servar.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted succesfully')
                        const remaing = reviews.filter(odr => odr._id !== id);
                        setReviews(remaing)
                    }
                })
        }
    }


    return (
        <div>
            <p className='text-center text-4xl font-bold my-8 underline'>My Review</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;