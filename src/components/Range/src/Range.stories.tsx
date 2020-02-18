import React from 'react';
import { default as RangeInput } from "./Range";
import { number } from '@storybook/addon-knobs';

export default {
    title: "Range"
};

export const Range = () => (
    <div style={{width: '100%', textAlign: 'center', background: '#e9e8e8', padding: '100px'}}>
        <RangeInput max={number('Max value', 6)}/>
    </div>
);

Range.story = {
    parameters: {
        jest: ['Passable.test.tsx']
    },
};
