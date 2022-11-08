import React from 'react';
import './Option.css'

const Option = () => {
    return (
        <div className='conteant'>
            <section className=" dark:text-gray-100">
                <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
                    <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl text-white">WHY CHOSE ME</h1>
                    <div className="relative mt-6 mb-12">
                        <span className="absolute inset-y-0 flex items-center pl-2 mx-auto">
                            <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                    </div>
                    <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <div className="flex flex-col w-full divide-y divide-gray-700">
                            <p className="flex items-center justify-center p-4 sm:py-8 lg:py-12 text-white text-justify">25 YEARS OF EXPERINCE <br />We have 25 years of woodcraft experience right to your residential, office, restaurants hospital and etc…</p>
                            <p className="flex items-center justify-center p-4 sm:py-8 lg:py-12 text-white">CREATIVE DESIGNERS <br />My designing team designs with your taste, space, and budget, Also our team will guide you to choose ...</p>
                        </div>
                        <div className="flex flex-col w-full divide-y divide-gray-700">
                            <p className="flex items-center justify-center p-4 sm:py-8 lg:py-12 text-white">QUALITY PRODUCTS <br /> provide high quality products only to our customers, our prodcuts are certified with WI organization usa.</p>
                            <p className="flex items-center justify-center p-4 sm:py-8 lg:py-12 text-white">AWARDS WINNING TEAM <br />In 1984 we have won the best resedential carpenter awrard from worlds carpernter organization in usa.</p>

                        </div>
                        <div className="hidden w-full divide-y sm:flex-col sm:flex divide-gray-700">
                            <p className="flex items-center justify-center p-4 sm:py-8 lg:py-12 text-white">FREE CONSULTATION <br /> provide free consultation about designs, quality, space, budget and etc you can get it all of them ...</p>
                            <p className="flex items-center justify-center p-4 sm:py-8 lg:py-12 text-white">24/7 CUSTOMER SUPPORT <br />Whenever & wherever you need our support you can contact ourcustomer support team by 24/7, they will guide ...</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Option;