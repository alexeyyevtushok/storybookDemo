import React from 'react';
import Arrow from './Arrow';
import { ButtonBackProps } from './ButtonBack.d';
import styled from 'styled-components';

const ButtonBackWrapper = styled.div`
    button {
        color: black;
        font-weight: bold;
        background: inherit;
        border-radius: 6px;
        padding: 15px 60px;
        padding-left: 0;
        border: none;
    };
    button:hover{
        cursor: pointer;
        box-shadow: 0px 0px 20px -11px rgba(0, 0, 0, 0.75);
    }
`;

const ButtonBack = ({onClick, buttonText}: ButtonBackProps) => {
    return (
        <ButtonBackWrapper>
            <button onClick={onClick && onClick}><Arrow color={'black'}/>{buttonText || 'Back'}</button>
        </ButtonBackWrapper>
    );
};

export default ButtonBack;
