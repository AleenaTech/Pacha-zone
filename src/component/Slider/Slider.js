import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlickSlider({ images }) {
    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1.3,
    //     slidesToScroll: 1,
    //     arrows: false
    // };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 1.3, // Show 1 slide on mobile
                    slidesToScroll: 1, // Scroll 1 slide at a time
                }
            },
            {
                breakpoint: 1024, // Tablet breakpoint
                settings: {
                    slidesToShow: 2.3, // Show 3 slides on tablet
                    slidesToScroll: 1, // Scroll 1 slide at a time
                }
            }
        ],

    };


    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className='gallery-images'>
                    <img src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
}

export default SlickSlider;
