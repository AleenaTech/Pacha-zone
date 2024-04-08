import React from 'react';

const ButtonBottom = ({ text, color, onClick }) => {
    return (
        <button
            className='btn-bottom'
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ButtonBottom;
