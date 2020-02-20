var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import ButtonBack from "../../ButtonBack/src/ButtonBack";
import ButtonDefault from "../../ButtonDefault/src/ButtonDefault";
var FormWizardContentCol = styled(Col)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    div {\n        margin-top: 35px;\n        margin-bottom: 35px;\n    }\n"], ["\n    div {\n        margin-top: 35px;\n        margin-bottom: 35px;\n    }\n"])));
var FormWizardButtons = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
var WizardForm = function (_a) {
    var child = _a.child, header = _a.header, nextButtonText = _a.nextButtonText, backButtonText = _a.backButtonText, nextButtonClick = _a.nextButtonClick, backButtonClick = _a.backButtonClick;
    return (React.createElement(Container, { fluid: true },
        React.createElement(Row, { className: 'justify-content-center' },
            React.createElement(FormWizardContentCol, { xs: 12 },
                React.createElement("h1", null, header || 'WizardForm header'),
                React.createElement("form", null, child),
                React.createElement(FormWizardButtons, null,
                    backButtonClick && backButtonText && React.createElement(ButtonBack, { onClick: backButtonClick, buttonText: backButtonText || 'Back' }),
                    React.createElement(ButtonDefault, { onClick: nextButtonClick, buttonText: nextButtonText || 'Next' }))))));
};
export default WizardForm;
var templateObject_1, templateObject_2;
