import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import ButtonBack from "../../ButtonBack/src/ButtonBack";
import ButtonDefault from "../../ButtonDefault/src/ButtonDefault";
import { WizardFormProps } from './WizardForm.d';

const FormWizardContentCol = styled(Col)`
    div {
        margin-top: 35px;
        margin-bottom: 35px;
    }
`

const FormWizardButtons = styled.div`
    display: flex;
`

const WizardForm = (
    {
        child,
        header,
        nextButtonText,
        backButtonText,
        nextButtonClick,
        backButtonClick
    }:
        WizardFormProps) => {
    return (
        <Container fluid>
            <Row className={'justify-content-center'}>
                <FormWizardContentCol xs={12} >
                    <h1>{header || 'WizardForm header'}</h1>
                    <form>
                        {child}
                    </form>
                    <FormWizardButtons>
                        {backButtonClick && backButtonText && <ButtonBack onClick={backButtonClick} buttonText={backButtonText || 'Back'}/>}
                        <ButtonDefault onClick={nextButtonClick} buttonText={nextButtonText || 'Next'}/>
                    </FormWizardButtons>
                </FormWizardContentCol>
            </Row>
        </Container>
    );
}


export default WizardForm;
