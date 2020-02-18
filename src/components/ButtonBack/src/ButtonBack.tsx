import React from 'react';
import './ButtonBack.css';
import Arrow from './Arrow';
import { ButtonBackProps } from './ButtonBack.d'

const ButtonBack = ({onClick, buttonText}: ButtonBackProps) => {
    return (
        <div className={'backButtonWrap'}>
            <button onClick={onClick && onClick}><Arrow color={'black'}/>{buttonText || 'Back'}</button>
        </div>
    );
}

export default ButtonBack;
