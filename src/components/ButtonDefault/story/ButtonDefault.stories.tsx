import { text } from "@storybook/addon-knobs";
import React from "react";
import { default as Button } from "../src/ButtonDefault";

export default {
    title: "ButtonDefault"
};


export const ButtonNext = () => (
    <div style={{width: '100%', textAlign: 'center', background: '#e9e8e8', padding: '100px'}}>
        <Button onClick={() => console.log('next')} buttonText={text('Button text', 'Next')}/>
    </div>
);

ButtonNext.story = {
    parameters: {
        jest: ['Passable.test.tsx']
    },
};