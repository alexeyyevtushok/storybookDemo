import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FormProps } from './Form.d'
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({header, child}: FormProps) => {
    return (
        <Container fluid>
            <Row className={'justify-content-center'}>
                <Col xs={12} md={9} lg={7} xl={6} className={'formContent'}>
                    <h1 className={'formHeader'}>{header || 'Form'}</h1>
                    <form>
                        {child}
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Form;
