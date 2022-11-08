import React from 'react';

const Servicecard = ({ service }) => {
    const { name, image, details } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
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
                    <button className="btn">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Servicecard;