import React from 'react';

interface NavServiceProps {
    title: string;
}
const carService = [
    {
        id: 1,
        img: 'car1.png',
        title: 'Medium Car',
    },
    {
        id: 2,
        img: 'car2.png',
        title: 'Large Car',
    },
    {
        id: 3,
        img: 'car3.png',
        title: 'SUVs',
    },
    {
        id: 4,
        img: 'car4.png',
        title: 'Luxury Car',
    },
    {
        id: 5,
        img: 'car5.png',
        title: 'Premium ',
    },
];
const extraService = [
    {
        id: 1,
        img: 'extra1.png',
        title: 'Brand Car',
    },
    {
        id: 2,
        img: 'extra2.png',
        title: 'Map',
    },
    {
        id: 3,
        img: 'extra3.png',
        title: 'Insurance',
    },
    {
        id: 4,
        img: 'extra4.png',
        title: 'All',
    }
];

const NavService: React.FC<NavServiceProps> = ({ title }) => {
    return (
        <>
            <h4 className="service-title">{title}</h4>
            <div className="service-car">
                {carService.map(i => (
                    <div className="nav-item-car">
                        <div className="img-item-car">
                            <img src={`/${i.img}`} alt="" />
                        </div>
                        <div className="n-i-car-title">{i.title}</div>
                    </div>
                ))}
                {/* Add other nav items here */}
            </div>
            <div className="service-extra">
                {extraService.map(i => (
                    <div className="nav-item-extra">
                        <div className="img-item-extra">
                            <img src={`/${i.img}`} alt="" />
                        </div>
                        <div className="n-i-extra-title">{i.title}</div>
                    </div>
                ))}
                {/* Add other nav items here */}
            </div>
        </>
    );
};

export default NavService;