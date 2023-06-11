import React from 'react';

import { CheckBoxLabeled } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/checkboxes/CheckBoxLabeled/README.md';

export default {
    title: 'UI/checkboxes/CheckBoxLabeled',
    component: CheckBoxLabeled,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClick: { action: 'clicked', control: false },
        size: { control: 'select' },
    },
};

const Template = args => <CheckBoxLabeled {...args} />;

const label = 'check me';
const inputId = 'check-box';

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

export const LargeIcon = Template.bind({});

LargeIcon.args = {
    label,
    inputId,
    size: 'lg',
    handleOnClick,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    label,
    inputId,
    margin: '50px 10px 0 100px',
    handleOnClick,
};

export const Selected = Template.bind({});

Selected.args = {
    label,
    inputId,
    isSelected: true,
    handleOnClick,
};

export const CustomLabelPlacement = Template.bind({});

CustomLabelPlacement.args = {
    label,
    inputId,
    labelPlacement: 'left',
    handleOnClick,
};
