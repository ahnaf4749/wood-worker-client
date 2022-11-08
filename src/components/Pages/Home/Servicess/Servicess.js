import React, { useEffect, useState } from 'react';
import Servicecard from './Servicecard';

const Servicess = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])

    return (
        <div className=' mt-10'>
            <p className='text-5xl font-bold text-center'>My services</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-5 my-5'>
                {
                    services.map(service => <Servicecard
                        key={service._id}
                        service={service}
                    ></Servicecard>)
                }
            </div>
            <div className='text-center mt-10'>
                <button className="btn">VIEW ALL SERVICES</button>
            </div>
        </div>
    );
};

export default Servicess;