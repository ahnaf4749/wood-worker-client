import React, { useEffect, useState } from 'react';
import useTitels from '../../Hooks/useTitels';
import Servicecard from '../Home/Servicess/Servicecard';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitels('Services')

    useEffect(() => {
        fetch('https://assaienment-11-servar.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div>
            <p className='text-center font-bold text-4xl underline'>ALL SERVICES</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-5 my-5'>
                {
                    services.map(service => <Servicecard
                        key={service._id}
                        service={service}
                    ></Servicecard>)
                }
            </div>
        </div>
    );
};

export default Services;