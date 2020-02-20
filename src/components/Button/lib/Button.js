import React from 'react';
import './Button.css';
var Button = function (_a) {
    var textValue = _a.textValue, classValue = _a.classValue;
    var setClass = classValue || 'default';
    var _b = React.useState(false), active = _b[0], setActive = _b[1];
    return (React.createElement("div", null,
        React.createElement("button", { className: setClass, onClick: function () { return setActive(!active); } }, textValue || 'click'),
        React.createElement("br", null),
        active && React.createElement("span", null, "Button is clicked")));
};
export default Button;
