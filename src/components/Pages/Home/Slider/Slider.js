import React from 'react';
import './Slider.css'

const Slider = () => {
    return (
        <div className="carousel w-full rounded-lg" >
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://www.nerdynaut.com/wp-content/uploads/2020/10/Want-to-Become-a-Woodworking-Expert-950x500.jpg" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <p className='text-3xl'>work made of wood. especially : interior fittings <br></br>(such as moldings or stairways) of wood.</p>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://homesteading.com/wp-content/uploads/2019/09/bearded-handsome-cabinetmaker-tabletop-pencil-drawing-basic-carpentry-skills-ss-featured-750x420.jpg" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/id/166229482/photo/carpenters-at-work.jpg?s=612x612&w=0&k=20&c=5yqCze6jDQ2xXseCzJqSjhzoEr_Xruq787vZAG5vBAM=" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/photos/quick-measurements-picture-id618056174?k=20&m=618056174&s=612x612&w=0&h=yrDOpO1I-MS7uhgP8R7LNJI38VLVYvrhnNF65svPx1Y=" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;