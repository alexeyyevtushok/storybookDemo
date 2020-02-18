import React from 'react';
import Range from '../../Range/src/Range'
import { text } from '@storybook/addon-knobs';
import { default as WizardFormStory } from './WizardForm';

export default {
    title: "WizardForm"
};

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
    'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim ' +
    'id est laborum.';


export const WizardForm = () => (
    <div style={{marginTop: "50px"}}>
        <WizardFormStory
            header={text('header','Wizard form example of header')}
            nextButtonClick={() => console.log('next')}
            nextButtonText={text('Next btn','Next')}
            backButtonClick={() => console.log('back')}
            backButtonText={text('Back btn','Back')}
            child={
                <div >
                    <div>{loremIpsum}</div>
                    <Range max={12}/>
                </div>
            }/>
    </div>
);

WizardForm.story = {
    parameters: {
        jest: ['Passable.test.tsx']
    },
};




