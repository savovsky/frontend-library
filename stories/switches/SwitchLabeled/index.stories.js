import React from 'react';

import { SwitchLabeled } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/switches/SwitchLabeled/README.md';

export default {
    title: 'UI/switches/SwitchLabeled',
    component: SwitchLabeled,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClick: { action: 'clicked', control: false },
    },
};

const Template = args => <SwitchLabeled {...args} />;

const label = 'Click me';
const inputId = 'switch-labeled';

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClick = () => {};

export const Default = Template.bind({});

Default.args = {
    label,
    inputId,
    handleOnClick,
};

export const Disabled = Template.bind({});

Disabled.args = {
    label,
    inputId,
    isDisabled: true,
    handleOnClick,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    label,
    inputId,
    margin: '50px 10px 0 100px',
    handleOnClick,
};

export const MockData = Template.bind({});

MockData.args = {
    label,
    inputId,
    isOn: true,
    isMockedData: true,
    handleOnClick,
};

export const CustomLabeledPlacement = Template.bind({});

CustomLabeledPlacement.args = {
    label,
    inputId,
    labelPlacement: 'left',
    handleOnClick,
};

export const ON = Template.bind({});

ON.args = {
    label,
    inputId,
    isOn: true,
    handleOnClick,
};

export const OFF = Template.bind({});

OFF.args = {
    label,
    inputId,
    isOn: false,
    handleOnClick,
};
