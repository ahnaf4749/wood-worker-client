import React from 'react';

const Serviceaccour = ({ service }) => {
    const { integrity, economically } = service;
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm tracking-wider text-center uppercase font-bold underline">Best of my service</p>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer">CREATIBLE INTEGRITY</summary>
                        <div className="px-4 pb-4">
                            <p>{integrity}</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer">CREATIVE TEAM MEMBERS</summary>
                        <div className="px-4 pb-4">
                            <p>{ }</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer">BETTER WITH ECONOMICALLY</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>{economically}</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Serviceaccour;