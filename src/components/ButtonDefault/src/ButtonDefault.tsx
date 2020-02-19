import React from 'react';
import { ButtonDefaultProps } from './ButtonDefault.d';
import styled from 'styled-components';

const ButtonDefaultWrapper = styled.div`
    button {
        color: white;
        font-weight: bold;
        background: #ff8c00d6;
        border-radius: 6px;
        padding: 15px 60px;
        border: none;
    };
    button:hover{
        cursor: pointer;
        box-shadow: 0px 0px 20px -11px rgba(0,0,0,0.75);
    }
`;

const ButtonDefault = ({onClick, buttonText}: ButtonDefaultProps) => {
    return (
        <ButtonDefaultWrapper>
            <button onClick={onClick && onClick}>{buttonText || 'Enter'}</button>
        </ButtonDefaultWrapper>
    );
};

export default ButtonDefault;
