var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
var FormCol = styled(Col)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: #e9e8e8;\n    padding: 0 !important;\n    div {\n        margin-top: 35px;\n        margin-bottom: 35px;\n    }\n"], ["\n    background: #e9e8e8;\n    padding: 0 !important;\n    div {\n        margin-top: 35px;\n        margin-bottom: 35px;\n    }\n"])));
var FormHeader = styled.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 25px;\n    font-weight: 300;\n    text-align: center;\n    padding: 20px;\n    background: #c7c7c7;\n"], ["\n    font-size: 25px;\n    font-weight: 300;\n    text-align: center;\n    padding: 20px;\n    background: #c7c7c7;\n"])));
var StyledForm = styled.form(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 20px 0;\n"], ["\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 20px 0;\n"])));
var Form = function (_a) {
    var header = _a.header, child = _a.child;
    return (React.createElement(Container, { fluid: true },
        React.createElement(Row, { className: 'justify-content-center' },
            React.createElement(FormCol, { xs: 12 },
                React.createElement(FormHeader, null, header || 'Form'),
                React.createElement(StyledForm, null, child)))));
};
export default Form;
var templateObject_1, templateObject_2, templateObject_3;
