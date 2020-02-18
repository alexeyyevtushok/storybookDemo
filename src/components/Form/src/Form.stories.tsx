import React from 'react';
import ButtonDefault from "../../ButtonDefault/src/ButtonDefault";
import { ButtonNext } from "../../ButtonDefault/src/ButtonDefault.stories";
import FormInput from "../../Input/src/FormInput";
import Form from './Form';
import { text, radios, boolean } from '@storybook/addon-knobs';

export default {
    title: "Form"
};

const radioOptions = {
    Default: 'darkorange',
    Red: 'darkred',
    Green: 'darkgreen',
};

export const FormWithInput = () => (
    <Form
        header={text('Form header', 'Form with input')}
        child={
            <FormInput
                withIcon={boolean('Show icon', true)}
                iconColor={radios('Icon color', radioOptions, 'darkorange')}
                placeholder={text('Placeholder', 'Enter your data...')}
                header={text('Input header', 'To do smth fill the input.')}
            />
        }/>
);

export const FormWithButton = () => (
    <Form
        header={'Form with button'}
        child={
            <ButtonDefault onClick={() => console.log('click')}  buttonText={text('Button text', 'Submit')}/>
        }/>
);

export const FormWithCoupleInputs = () => (
    <Form
        header={text('Form header', 'Couple inputs form')}
        child={
            <>
                <FormInput
                    withIcon={boolean('Show icon 1', false)}
                    iconColor={radios('Icon color 1', radioOptions, 'darkorange')}
                    placeholder={text('Placeholder 1', 'Enter your login...')}
                    header={text('Input header 1', 'Login is required.')}
                />
                <FormInput
                    withIcon={boolean('Show icon 2', false)}
                    iconColor={radios('Icon color 2', radioOptions, 'darkorange')}
                    placeholder={text('Placeholder 2', 'Enter your password...')}
                    header={text('Input header 2', 'Password is required.')}
                />
                <ButtonDefault onClick={() => console.log('click')} buttonText={text('Button text', 'Submit')}/>
            </>
        }/>
);

export const MaternityLeaveForm = () => (
    <Form
        header={text('Form header', 'Maternity Leave Calculator')}
        child={
            <>
                <FormInput
                    withIcon={boolean('Show icon', true)}
                    iconColor={radios('Icon color', radioOptions, 'darkorange')}
                    placeholder={text('Placeholder', 'Enter your SSN...')}
                    header={text('Input header', 'To calculate fill the input please.')}
                />
                <ButtonDefault onClick={() => console.log('click')} buttonText={text('Button text', 'Submit')}/>
            </>
        }/>
);

FormWithButton.story = {
    parameters: {
        jest: ['Passable.test.tsx']
    },
};

MaternityLeaveForm.story = {
    parameters: {
        jest: ['Passable.test.tsx']
    },
};

FormWithCoupleInputs.story = {
    parameters: {
        jest: ['Passable.test.tsx']
    },
};

FormWithInput.story = {
    parameters: {
        jest: ['Passable.test.tsx']
    },
};



