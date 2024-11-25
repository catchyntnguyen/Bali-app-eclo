import React from 'react';

interface NavServiceProps {
    title: string;
    imageUrl: string;
    carModel: string;
    seats: number;
    smallBags: number;
    largeBags: number;
    transmission: string;
    cancellationPolicy: string;
}

const Cartcar: React.FC<NavServiceProps> = ({
    title,
    imageUrl,
    carModel,
    seats,
    smallBags,
    largeBags,
    transmission,
    cancellationPolicy
}) => {
    return (
        <div className='cartCar'>
            <div className='cartCar-left'>
                <div className='cartCar-left-img'>
                    <img src={imageUrl} alt={carModel} />
                </div>
                <div>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9998 6.49992H9.79317L10.4265 3.45325L10.4465 3.23992C10.4465 2.96659 10.3332 2.71325 10.1532 2.53325L9.4465 1.83325L5.05984 6.22659C4.81317 6.46659 4.6665 6.79992 4.6665 7.16659V13.8333C4.6665 14.5666 5.2665 15.1666 5.99984 15.1666H11.9998C12.5532 15.1666 13.0265 14.8333 13.2265 14.3533L15.2398 9.65325C15.2998 9.49992 15.3332 9.33992 15.3332 9.16659V7.83325C15.3332 7.09992 14.7332 6.49992 13.9998 6.49992ZM13.9998 9.16659L11.9998 13.8333H5.99984V7.16659L8.89317 4.27325L8.15317 7.83325H13.9998V9.16659ZM0.666504 7.16659H3.33317V15.1666H0.666504V7.16659Z" fill="#A4A4A4" />
                    </svg>
                </div>
            </div>
            <div className='cartCar-middle'>
                <div className='cartCar-middle-header'>
                    {carModel}
                </div>
                <div className='cartCar-middle-content'>
                    <div>
                        <div className='cartCar-middle-item'> <img src="/iconCar1.png" alt="" /> <p>{seats} seats</p>  </div>
                        <div className='cartCar-middle-item'> <img src="/iconCar2.png" alt="" /> <p>{smallBags} Small Bag</p>  </div>
                    </div>
                    <div>
                        <div className='cartCar-middle-item'> <img src="/iconCar3.png" alt="" /> <p>{transmission}</p>  </div>
                        <div className='cartCar-middle-item'> <img src="/iconCar4.png" alt="" /> <p>{largeBags} Large Bag</p>  </div>
                    </div>
                </div>
            </div>
            <div className='cartCar-right'>
                <button className='button' onClick={() => window.location.href = '/detailCar/1'}>View deal</button>
            </div>
        </div>
    );
};

export default Cartcar;

