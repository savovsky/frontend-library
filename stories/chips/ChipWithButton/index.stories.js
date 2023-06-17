import React from 'react';

import { ChipWithButton } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/chips/ChipWithButton/README.md';

export default {
    title: 'UI/chips/ChipWithButton',
    component: ChipWithButton,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClickBtn: { action: 'clicked', control: false },
    },
};

const Template = args => (
    <div role="grid">
        <ChipWithButton {...args} />
    </div>
);

const content = 'Lorem ipsum dolor sit amet';

// TODO Should not be provided, should come from argTypes ?!?
// const handleOnClickBtn = () => {};

export const Default = Template.bind({});

Default.args = {
    content,
};

export const Disabled = Template.bind({});

Disabled.args = {
    content,
    isDisabled: true,
};

export const CustomMaxWidth = Template.bind({});

CustomMaxWidth.args = {
    content,
    maxWidth: '100px',
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    content,
    margin: '20px 0 0 50px',
};

export const CustomTextTransform = Template.bind({});

CustomTextTransform.args = {
    content: 'upper case',
    textTransform: 'uppercase',
};
