import React from 'react';
import { ButtonBack } from "../../ButtonBack/src/ButtonBack.stories";
import FormInput from "./FormInput";
import { text, radios, boolean } from '@storybook/addon-knobs';

export default {
    title: "Input"
};

const radioOptions = {
    Default: 'darkorange',
    Red: 'darkred',
    Green: 'darkgreen',
};

export const Input = () => (
    <div style={{width: '100%', textAlign: 'center', background: '#e9e8e8', padding: '100px'}}>
        <FormInput
            withIcon={boolean('Show icon',true)}
            iconColor={radios('Icon color',radioOptions, 'darkorange' )}
            placeholder={text('Placeholder', 'Enter your data...')}
            header={text('Input header', 'To do smth fill the input.')}
        />
    </div>
);

Input.story = {
    parameters: {
        jest: ['Passable.test.tsx']
    },
};



