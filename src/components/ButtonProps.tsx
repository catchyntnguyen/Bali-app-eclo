import React from 'react';

interface ButtonProps {
    title: string;
    icon: React.ReactNode; 
    className?: string; 
}

const CustomButton: React.FC<ButtonProps> = ({ title, icon, className = '' }) => {
    return (
        <button className={`button ${className}`}>
            {title}
            {icon} 
        </button>
    );
};

export default CustomButton;
