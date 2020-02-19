import React from 'react';
import styled from "styled-components";
import Icon from './Icon';
import { FormInputProps } from './FormInput.d';

const FormInputWrap = styled.div`
    position: relative;
    width: 50%;
    margin: 0 auto;
    
    svg {
        position: absolute;
        left: 20px;
        top: 55%;
    }
`;

const FormInputP = styled.p`
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
`;

const StyledInput = styled.input`
    border: none;
    padding: 25px 50px;
    width: 100%;
    font-weight: 500;
    font-size: 18px;
`;

const FormInput = ({withIcon, iconColor, placeholder, header, onChange}: FormInputProps) => {
    return (
        <FormInputWrap>
            <FormInputP>{header || 'Fill the input please.'}</FormInputP>
            {withIcon && <Icon color={iconColor} size={17}/>}
            <StyledInput onChange={onChange} placeholder={placeholder || 'Enter your data...'}/>
        </FormInputWrap>
    );
}

export default FormInput;
