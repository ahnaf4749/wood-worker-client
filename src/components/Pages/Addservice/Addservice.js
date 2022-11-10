import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/Authprovider/Authprovider';

const Addservice = () => {
    const { user } = useContext(AuthContext)


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const details = form.details.value;
        const photoURL = form.photoURL.value;
        // console.log(name, details, photoURL);

        const service = {
            name: name,
            email,
            details,
            photoURL
        }


        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Add successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <div className='my-5 text-center'>
                <h2 className='text-4xl font-bold underline'>Add service </h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 my-5'>
                    <input type="text" name='name' placeholder="Service Name" className="input input-bordered w-full " required />
                    <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered w-full " />
                    <input type="text" name='details' placeholder="service details" className="input input-bordered w-full " />
                </div>
                <div className='text-center'>
                    <input type="submit" value="Submit" className="btn my-5" />
                </div>
            </form>
        </div>
    );
};

export default Addservice;