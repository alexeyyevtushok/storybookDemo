import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styled from "styled-components";
import { FormProps } from './Form.d';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormCol = styled(Col)`
    background: #e9e8e8;
    padding: 0 !important;
    div {
        margin-top: 35px;
        margin-bottom: 35px;
    }
`;

const FormHeader = styled.h1`
    font-size: 25px;
    font-weight: 300;
    text-align: center;
    padding: 20px;
    background: #c7c7c7;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
`;

const Form = ({header, child}: FormProps) => {
    return (
        <Container fluid>
            <Row className={'justify-content-center'}>
                <FormCol xs={12}>
                    <FormHeader>{header || 'Form'}</FormHeader>
                    <StyledForm>
                        {child}
                    </StyledForm>
                </FormCol>
            </Row>
        </Container>
    );
};

export default Form;
