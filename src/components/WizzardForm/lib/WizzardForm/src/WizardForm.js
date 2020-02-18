import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WizardForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBack from "../../ButtonBack/src/ButtonBack";
import ButtonDefault from "../../ButtonDefault/src/ButtonDefault";
var WizardForm = function (_a) {
    var child = _a.child, header = _a.header, nextButtonText = _a.nextButtonText, backButtonText = _a.backButtonText, nextButtonClick = _a.nextButtonClick, backButtonClick = _a.backButtonClick;
    return (React.createElement(Container, { fluid: true },
        React.createElement(Row, { className: 'justify-content-center' },
            React.createElement(Col, { xs: 12, md: 10, className: 'formWizardContent' },
                React.createElement("h1", { className: 'formWizardHeader' }, header || 'WizardForm header'),
                React.createElement("form", null, child),
                React.createElement("div", { className: 'formWizardButtons' },
                    backButtonClick && backButtonText && React.createElement(ButtonBack, { onClick: backButtonClick, buttonText: backButtonText || 'Back' }),
                    React.createElement(ButtonDefault, { onClick: nextButtonClick, buttonText: nextButtonText || 'Next' }))))));
};
export default WizardForm;
