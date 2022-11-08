import React from 'react';
import About from '../About/About';
import Option from '../Option/Option';
import Servicess from '../Servicess/Servicess';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Servicess></Servicess>
            <About></About>
            <Option></Option>
        </div>
    );
};

export default Home;