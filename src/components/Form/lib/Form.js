import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
var Form = function (_a) {
    var header = _a.header, child = _a.child;
    return (React.createElement(Container, { fluid: true },
        React.createElement(Row, { className: 'justify-content-center' },
            React.createElement(Col, { xs: 12, className: 'formContent' },
                React.createElement("h1", { className: 'formHeader' }, header || 'Form'),
                React.createElement("form", null, child)))));
};
export default Form;
