import React, { useState } from 'react';
import Slider from 'react-slick';
import SliderImage1 from "../../Assets/sliderImage1.png";
import PrevIcon from "../../Assets/arrow-left-transparent.png";
import NextIcon from "../../Assets/arror-right-transparent.svg";

const SliderWithArrow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2;

    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <img src={PrevIcon} alt="Previous" />,
        nextArrow: <img src={NextIcon} alt="Next" />,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        }
    };

    const slideItems = Array.from({ length: totalSlides }).map((_, index) => (
        <div key={index}>
            <img src={SliderImage1} alt={`Slider Image ${index + 1}`} />
        </div>
    ));

    const goToPrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const goToNext = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (
        <div className='sliderWithImage-container'>
            <Slider {...settings} initialSlide={currentSlide}>
                {slideItems}
            </Slider>
        </div>
    );
}

export default SliderWithArrow;
