import React from 'react';

import { RadioButtonBasic } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/radioButtons/RadioButtonBasic/README.md';

export default {
    title: 'UI/radioButtons/RadioButtonBasic',
    component: RadioButtonBasic,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClick: { action: 'clicked', control: false },
        size: { control: 'select' },
    },
};

const Template = args => <RadioButtonBasic {...args} />;

const inputId = 'radio-button-one';

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClick = () => {};

export const Active = Template.bind({});

Active.args = {
    inputId,
    isSelected: true,
    handleOnClick,
};

export const Inactive = Template.bind({});

Inactive.args = {
    inputId,
    isSelected: false,
    handleOnClick,
};

export const ActiveDisabled = Template.bind({});

ActiveDisabled.args = {
    inputId,
    isSelected: true,
    isDisabled: true,
    handleOnClick,
};

export const InactiveDisabled = Template.bind({});

InactiveDisabled.args = {
    inputId,
    isSelected: false,
    isDisabled: true,
    handleOnClick,
};

export const LargeIcon = Template.bind({});

LargeIcon.args = {
    inputId,
    isSelected: true,
    size: 'lg',
    handleOnClick,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    inputId,
    isSelected: false,
    margin: '50px 10px 0 100px',
    handleOnClick,
};
