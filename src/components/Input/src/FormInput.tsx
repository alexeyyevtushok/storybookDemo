import React from 'react';
import Icon from './Icon';
import { FormInputProps } from './FormInput.d'
import './FormInput.css';

const FormInput = ({withIcon, iconColor, placeholder, header}: FormInputProps) => {
    return (
        <div className={'formInputWrap'}>
            <p>{header || 'Fill the input please.'}</p>
            {withIcon && <Icon color={iconColor} size={17}/>}
            <input placeholder={placeholder || 'Enter your data...'}/>
        </div>
    );
}

export default FormInput;
