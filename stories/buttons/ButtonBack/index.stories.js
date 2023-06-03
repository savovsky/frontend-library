import React from 'react';

import { ButtonBack } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/buttons/ButtonBack/README.md';

export default {
    title: 'UI/buttons/ButtonBack',
    component: ButtonBack,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClick: { action: 'clicked', control: false },
    },
};

const Template = args => <ButtonBack {...args} />;

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClick = () => {};

export const Default = Template.bind({});

Default.args = {
    handleOnClick,
};

export const Disabled = Template.bind({});

Disabled.args = {
    isDisabled: true,
    handleOnClick,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    margin: '20px 0 0 50px',
    handleOnClick,
};

export const CustomTextTransform = Template.bind({});

CustomTextTransform.args = {
    textTransform: 'lowercase',
    handleOnClick,
};

export const CustomLabel = Template.bind({});

CustomLabel.args = {
    label: 'custom label',
    handleOnClick,
};
