import React from 'react';

import { RadioButtonLabeled } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/radioButtons/RadioButtonLabeled/README.md';

export default {
    title: 'UI/radioButtons/RadioButtonLabeled',
    component: RadioButtonLabeled,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClick: { action: 'clicked', control: false },
        size: { control: 'select' },
    },
};

const Template = args => <RadioButtonLabeled {...args} />;

const content = 'Choose me';
const inputId = 'radio-button-one';

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClick = () => {};

export const Active = Template.bind({});

Active.args = {
    content,
    inputId,
    isSelected: true,
    handleOnClick,
};

export const Inactive = Template.bind({});

Inactive.args = {
    content,
    inputId,
    isSelected: false,
    handleOnClick,
};

export const ActiveDisabled = Template.bind({});

ActiveDisabled.args = {
    content,
    inputId,
    isSelected: true,
    isDisabled: true,
    handleOnClick,
};

export const InactiveDisabled = Template.bind({});

InactiveDisabled.args = {
    content,
    inputId,
    isSelected: false,
    isDisabled: true,
    handleOnClick,
};

export const LargeIcon = Template.bind({});

LargeIcon.args = {
    content,
    inputId,
    isSelected: true,
    iconSize: 'lg',
    handleOnClick,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    content,
    inputId,
    isSelected: false,
    margin: '50px 10px 0 100px',
    handleOnClick,
};

export const CustomLabelPlacement = Template.bind({});

CustomLabelPlacement.args = {
    content,
    inputId,
    isSelected: false,
    labelPlacement: 'left',
    handleOnClick,
};
