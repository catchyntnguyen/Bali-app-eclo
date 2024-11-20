import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderCar {
    data: any;
}
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    swipe: true
};
const SliderCar: React.FC<SliderCar> = ({ data }) => {
    return (    
        <div className='sliderCar'>
            <Slider {...sliderSettings}>
                {data.map((item: any, index: number) => (
                    <div className='imgcar' key={index}>
                        <img src={item.imageUrl} alt={item.altText} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default SliderCar;
