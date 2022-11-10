import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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

    const handleDelete = id => {
        const procced = window.confirm('Are you sure, delete this review')
        if (procced) {
            fetch(`http://localhost:5000/reviews/${id}`, {
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
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;