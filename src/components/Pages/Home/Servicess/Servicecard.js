import React from 'react';
import { Link } from 'react-router-dom';

const Servicecard = ({ service }) => {
    const { name, image, details, _id } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img style={{ height: '250px' }} src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='font-semibold'>
                    {
                        details.length > 100 ?
                            <>{details.slice(0, 100) + '...'}<small>Read More</small></>
                            :
                            <>{details}</>
                    }
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Servicecard;