import React from 'react';
import './ButtonBack.css';
import Arrow from './Arrow';
var ButtonBack = function (_a) {
    var onClick = _a.onClick, buttonText = _a.buttonText;
    return (React.createElement("div", { className: 'backButtonWrap' },
        React.createElement("button", { onClick: onClick && onClick },
            React.createElement(Arrow, { color: 'black' }),
            buttonText || 'Back')));
};
export default ButtonBack;
