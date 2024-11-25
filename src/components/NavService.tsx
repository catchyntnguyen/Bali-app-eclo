import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface NavServiceProps {
    title: string;
    option: string;
}

const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.1,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    swipe: true
};

const carService = [
    { id: 1, img: 'car1.png', title: 'Medium Car' },
    { id: 2, img: 'car2.png', title: 'Large Car' },
    { id: 3, img: 'car3.png', title: 'SUVs' },
    { id: 4, img: 'car4.png', title: 'Luxury Car' },
    { id: 5, img: 'car5.png', title: 'Premium' },
];

const extraService = [
    { id: 1, img: 'extra1.png', title: 'Brand Car' },
    { id: 2, img: 'extra2.png', title: 'Map' },
    { id: 3, img: 'extra3.png', title: 'Insurance' },
    { id: 4, img: 'extra4.png', title: 'All' },
];

const extracar = [
    { id: 1, img: 'bmw.png', title: 'BMW' },
    { id: 2, img: 'ferari.png', title: 'Ferari' },
    { id: 3, img: 'landrover.png', title: 'Land Rover' },
    { id: 4, img: 'tesla.png', title: 'Tesla' },
    { id: 1, img: 'bmw.png', title: 'BMW' },
    { id: 2, img: 'ferari.png', title: 'Ferari' },
    { id: 3, img: 'landrover.png', title: 'Land Rover' },
    { id: 4, img: 'tesla.png', title: 'Tesla' },
    { id: 3, img: 'landrover.png', title: 'Land Rover' },
];

const NavService: React.FC<NavServiceProps> = ({ title, option }) => {
    return (
        <>
            <h4 className="service-title">{title}</h4>

            <div className="service-car" onClick={() => window.location.href = '/carfleet'}>
                {carService.map((item) => (
                    <div className="nav-item-car" key={item.id}>
                        <div className="img-item-car">
                            <img src={`/${item.img}`} alt={item.title} />
                        </div>
                        <div className="n-i-car-title">{item.title}</div>
                    </div>
                ))}
            </div>

            {option === '1' && (
                <div className="service-extra" onClick={() => window.location.href = '/carfleet'}>
                    {extraService.map((item) => (
                        <div className="nav-item-extra" key={item.id}>
                            <div className="img-item-extra">
                                <img src={`/${item.img}`} alt={item.title} />
                            </div>
                            <div className="n-i-extra-title">{item.title}</div>
                        </div>
                    ))}
                </div>
            )}

            {option === '2' && (
                <div className="nav-item-car-slider">
                    <Slider {...sliderSettings}>
                        {extracar.map((item) => (
                            <div className="nav-item-brand" key={item.id}>
                                <div className="img-item-car">
                                    <img src={`/${item.img}`} alt={item.title} />
                                </div>
                                <div className="n-i-brand-title">{item.title}</div>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
        </>
    );
};

export default NavService;
