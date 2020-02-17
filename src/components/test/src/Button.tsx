import React from 'react';
import './Button.css';
import { ButtonProps } from './index';

const Button = ({textValue, classValue}: ButtonProps) => {
    const setClass = classValue || 'default'
    const [ active, setActive ] = React.useState(false);
    return (
        <div className="App">
            <button className={setClass} onClick={() => setActive(!active)}>{textValue || 'click'}</button>
            <br/>
            {active && <span>Button is clicked</span>}
        </div>
    );
}

export default Button;
