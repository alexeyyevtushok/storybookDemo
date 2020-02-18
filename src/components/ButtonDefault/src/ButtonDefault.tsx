import React from 'react';
import './ButtonDefault.css';
import {ButtonDefaultProps} from './ButtonDefault.d';

const ButtonDefault = ({onClick, buttonText}: ButtonDefaultProps) => {
    return (
        <div className={'defaultButtonWrap'}>
            <button onClick={onClick && onClick}>{buttonText || 'Enter'}</button>
        </div>
    );
}

export default ButtonDefault;
