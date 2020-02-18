import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './WizardForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBack from "../../ButtonBack/src/ButtonBack";
import ButtonDefault from "../../ButtonDefault/src/ButtonDefault";
import { WizardFormProps } from './WizardForm.d'

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
                <Col xs={12} md={10} className={'formWizardContent'}>
                    <h1 className={'formWizardHeader'}>{header || 'WizardForm header'}</h1>
                    <form>
                        {child}
                    </form>
                    <div className={'formWizardButtons'}>
                        <ButtonBack onClick={nextButtonClick} buttonText={backButtonText || 'Back'}/>
                        <ButtonDefault onClick={backButtonClick} buttonText={nextButtonText || 'Next'}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


export default WizardForm;
