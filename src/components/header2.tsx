import React, { useState, useEffect } from 'react';

interface Headers {
    title: string;
    className?: string;
    icon: string;
}

const Headers2: React.FC<Headers> = ({ title, icon }) => {
    const [itemIcon, setItemIcon] = useState<JSX.Element | null>(null);
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        switch (icon) {
            case 'heart':
                setShowIcon(true);
                setItemIcon(
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.66275 13.2135L9.82377 19.7065C11.0068 20.9532 12.9932 20.9532 14.1762 19.7065L20.3372 13.2135C22.5542 10.877 22.5543 7.08882 20.3373 4.75235C18.1203 2.41588 14.5258 2.41588 12.3088 4.75235V4.75235C12.1409 4.92925 11.8591 4.92925 11.6912 4.75235V4.75235C9.47421 2.41588 5.87975 2.41588 3.66275 4.75235C1.44575 7.08883 1.44575 10.877 3.66275 13.2135Z"
                            stroke="#D9D9D9"
                            strokeWidth="1.5"
                        />
                    </svg>
                );
                break;
            case 'trash':
                setShowIcon(true);
                setItemIcon(
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.05063 8.73418C4.20573 7.60763 5.00954 6 6.41772 6H17.5823C18.9905 6 19.7943 7.60763 18.9494 8.73418V8.73418C18.3331 9.55584 18 10.5552 18 11.5823V18C18 20.2091 16.2091 22 14 22H10C7.79086 22 6 20.2091 6 18V11.5823C6 10.5552 5.66688 9.55584 5.05063 8.73418V8.73418Z" stroke="#D9D9D9" stroke-width="1.5" />
                        <path d="M14 17L14 11" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 17L10 11" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 6L15.4558 4.36754C15.1836 3.55086 14.4193 3 13.5585 3H10.4415C9.58066 3 8.81638 3.55086 8.54415 4.36754L8 6" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                );
                break;
            default:
                setShowIcon(false);
                setItemIcon(null);
                break;
        }
    }, [icon]);

    return (
        <div className="header2">
            <div>
                <button onClick={() => window.location.href = '/'}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22 15V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17L2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V9"
                            stroke="#D9D9D9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M13 9L10.7071 11.2929C10.3166 11.6834 10.3166 12.3166 10.7071 12.7071L13 15"
                            stroke="#D9D9D9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                    {title}
                </button>
                {showIcon && <button className="btn2"  onClick={() => window.location.href = '/wishlist'}>{itemIcon}</button>}
            </div>
        </div>
    );
};

export default Headers2;
