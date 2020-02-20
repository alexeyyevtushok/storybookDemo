var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from "styled-components";
import Icon from './Icon';
var FormInputWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    width: 50%;\n    margin: 0 auto;\n    \n    svg {\n        position: absolute;\n        left: 20px;\n        top: 55%;\n    }\n"], ["\n    position: relative;\n    width: 50%;\n    margin: 0 auto;\n    \n    svg {\n        position: absolute;\n        left: 20px;\n        top: 55%;\n    }\n"])));
var FormInputP = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    text-align: left;\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 5px;\n"], ["\n    text-align: left;\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 5px;\n"])));
var StyledInput = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border: none;\n    padding: 25px 50px;\n    width: 100%;\n    font-weight: 500;\n    font-size: 18px;\n"], ["\n    border: none;\n    padding: 25px 50px;\n    width: 100%;\n    font-weight: 500;\n    font-size: 18px;\n"])));
var FormInput = function (_a) {
    var withIcon = _a.withIcon, iconColor = _a.iconColor, placeholder = _a.placeholder, header = _a.header, onChange = _a.onChange;
    return (React.createElement(FormInputWrap, null,
        React.createElement(FormInputP, null, header || 'Fill the input please.'),
        withIcon && React.createElement(Icon, { color: iconColor, size: 17 }),
        React.createElement(StyledInput, { onChange: onChange, placeholder: placeholder || 'Enter your data...' })));
};
export default FormInput;
var templateObject_1, templateObject_2, templateObject_3;
