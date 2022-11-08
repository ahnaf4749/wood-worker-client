import React from 'react';

const ServicePrice = ({ price }) => {

    const { basic, special, premium } = price;
    return (
        <div className='grid lg:grid-cols-3 ml-10 gap-y-5'>
            <div className="card w-72 h-72 bg-zinc-400">
                <div className="card-body items-center">
                    <h2 className="card-title font-bold">BASIC</h2>
                    <p className='font-bold'>$<span className='text-4xl font-semibold'>{basic}</span>/Mo</p>
                    <p className='text-center font-semibold'>Billed anualy or ${basic} for every month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline font-bold">PURCHASE</button>
                    </div>
                </div>
            </div>
            <div className="card w-72 h-72 bg-zinc-400">
                <div className="card-body items-center">
                    <h2 className="card-title font-bold">SPECIAL</h2>
                    <p className='font-bold'>$<span className='text-4xl font-semibold'>{special}</span>/Mo</p>
                    <p className='text-center font-semibold'>Billed anualy or ${special} for every month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline font-bold">PURCHASE</button>
                    </div>
                </div>
            </div>
            <div className="card w-72 h-72 bg-zinc-400">
                <div className="card-body items-center">
                    <h2 className="card-title font-bold">PREMIUM</h2>
                    <p className='font-bold'>$<span className='text-4xl font-semibold'>{premium}</span>/Mo</p>
                    <p className='text-center font-semibold'>Billed anualy or ${premium} for every month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline font-bold">PURCHASE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePrice;