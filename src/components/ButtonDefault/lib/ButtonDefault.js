var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var ButtonDefaultWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    button {\n        color: white;\n        font-weight: bold;\n        background: #ff8c00d6;\n        border-radius: 6px;\n        padding: 15px 60px;\n        border: none;\n    };\n    button:hover{\n        cursor: pointer;\n        box-shadow: 0px 0px 20px -11px rgba(0,0,0,0.75);\n    }\n"], ["\n    button {\n        color: white;\n        font-weight: bold;\n        background: #ff8c00d6;\n        border-radius: 6px;\n        padding: 15px 60px;\n        border: none;\n    };\n    button:hover{\n        cursor: pointer;\n        box-shadow: 0px 0px 20px -11px rgba(0,0,0,0.75);\n    }\n"])));
var ButtonDefault = function (_a) {
    var onClick = _a.onClick, buttonText = _a.buttonText;
    return (React.createElement(ButtonDefaultWrapper, null,
        React.createElement("button", { onClick: onClick && onClick }, buttonText || 'Enter')));
};
export default ButtonDefault;
var templateObject_1;
