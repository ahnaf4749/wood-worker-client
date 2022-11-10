import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/Authprovider/Authprovider';
import Review from './Review';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;