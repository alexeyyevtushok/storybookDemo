import React from 'react';
import { text } from '@storybook/addon-knobs';
import { default as Button } from "../src/ButtonBack";

export default {
    title: "ButtonBack"
};

export const ButtonBack = () => (
    <div style={{width: '100%', textAlign: 'center', background: '#e9e8e8', padding: '100px'}}>
        <Button onClick={() => console.log('back')} buttonText={text('Button text', 'Back')}/>
    </div>
);


ButtonBack.story = {
    parameters: {
        jest: ['Passable.test.tsx']
    },
};