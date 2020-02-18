import React from 'react';
import './ButtonDefault.css';
var ButtonDefault = function (_a) {
    var onClick = _a.onClick, buttonText = _a.buttonText;
    return (React.createElement("div", { className: 'defaultButtonWrap' },
        React.createElement("button", { onClick: onClick && onClick }, buttonText || 'Enter')));
};
export default ButtonDefault;
