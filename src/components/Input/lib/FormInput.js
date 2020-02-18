import React from 'react';
import Icon from './Icon';
import './FormInput.css';
var FormInput = function (_a) {
    var withIcon = _a.withIcon, iconColor = _a.iconColor, placeholder = _a.placeholder, header = _a.header;
    return (React.createElement("div", { className: 'formInputWrap' },
        React.createElement("p", null, header || 'Fill the input please.'),
        withIcon && React.createElement(Icon, { color: iconColor, size: 17 }),
        React.createElement("input", { placeholder: placeholder || 'Enter your data...' })));
};
export default FormInput;
