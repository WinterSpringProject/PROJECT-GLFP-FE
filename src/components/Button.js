import React from 'react';
import './css/Button.css';
import {Link} from 'react-router-dom';



export const Button = ({children, type, onClick, buttonStyle, buttonSize
}) => {
    
    return (
        <Link to='/Log-in' className='btn-mobile'>
            <button
            className={'btn $(checkButtonStyle} ${checkButtonSize}'}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};