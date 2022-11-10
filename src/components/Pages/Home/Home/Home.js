import React from 'react';
import useTitels from '../../../Hooks/useTitels';
import About from '../About/About';
import Option from '../Option/Option';
import Servicess from '../Servicess/Servicess';
import Slider from '../Slider/Slider';

const Home = () => {
    useTitels('Home')
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