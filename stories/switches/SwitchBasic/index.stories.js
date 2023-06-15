import React from 'react';

import { SwitchBasic } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/switches/SwitchBasic/README.md';

export default {
    title: 'UI/switches/SwitchBasic',
    component: SwitchBasic,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClick: { action: 'clicked', control: false },
        size: { control: 'select' },
    },
};

const Template = args => <SwitchBasic {...args} />;

const inputId = 'switch-basic';

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClick = () => {};

export const Default = Template.bind({});

Default.args = {
    inputId,
    handleOnClick,
};

export const Disabled = Template.bind({});

Disabled.args = {
    inputId,
    isDisabled: true,
    handleOnClick,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    inputId,
    margin: '50px 10px 0 100px',
    handleOnClick,
};

export const MockData = Template.bind({});

MockData.args = {
    inputId,
    isOn: true,
    isMockedData: true,
    handleOnClick,
};

export const ON = Template.bind({});

ON.args = {
    inputId,
    isOn: true,
    handleOnClick,
};

export const OFF = Template.bind({});

OFF.args = {
    inputId,
    isOn: false,
    handleOnClick,
};
