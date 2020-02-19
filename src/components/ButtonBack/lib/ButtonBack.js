var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import Arrow from './Arrow';
import styled from 'styled-components';
var ButtonBackWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    button {\n        color: black;\n        font-weight: bold;\n        background: inherit;\n        border-radius: 6px;\n        padding: 15px 60px;\n        padding-left: 0;\n        border: none;\n    };\n    button:hover{\n        cursor: pointer;\n        box-shadow: 0px 0px 20px -11px rgba(0, 0, 0, 0.75);\n    }\n"], ["\n    button {\n        color: black;\n        font-weight: bold;\n        background: inherit;\n        border-radius: 6px;\n        padding: 15px 60px;\n        padding-left: 0;\n        border: none;\n    };\n    button:hover{\n        cursor: pointer;\n        box-shadow: 0px 0px 20px -11px rgba(0, 0, 0, 0.75);\n    }\n"])));
var ButtonBack = function (_a) {
    var onClick = _a.onClick, buttonText = _a.buttonText;
    return (React.createElement(ButtonBackWrapper, null,
        React.createElement("button", { onClick: onClick && onClick },
            React.createElement(Arrow, { color: 'black' }),
            buttonText || 'Back')));
};
export default ButtonBack;
var templateObject_1;
