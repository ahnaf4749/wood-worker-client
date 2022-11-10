import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Pages/Footer/Footer';
import Header from '../components/Pages/Header/Header';
import './Main.css'

const main = () => {
    return (
        <div>
            <Header></Header>
            <div className='sumu'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default main;