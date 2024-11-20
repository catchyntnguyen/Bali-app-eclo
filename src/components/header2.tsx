import React from 'react';

interface Headers {
    title: string;
    className: string;
}

const Headers2: React.FC<Headers> = ({
  title
}) => {
    return (
        <div className={`header2`}>
            <button >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 15V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17L2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V9" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M13 9L10.7071 11.2929C10.3166 11.6834 10.3166 12.3166 10.7071 12.7071L13 15" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" />
                </svg>
            {title}
            </button>
        </div>
    );
};

export default Headers2;

