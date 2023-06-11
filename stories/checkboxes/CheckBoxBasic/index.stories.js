import React from 'react';

import { CheckBoxBasic } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/checkboxes/CheckBoxBasic/README.md';

export default {
    title: 'UI/checkboxes/CheckBoxBasic',
    component: CheckBoxBasic,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClick: { action: 'clicked', control: false },
        size: { control: 'select' },
    },
};

const Template = args => <CheckBoxBasic {...args} />;

const inputId = 'check-box';

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

export const LargeIcon = Template.bind({});

LargeIcon.args = {
    inputId,
    size: 'lg',
    handleOnClick,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    inputId,
    margin: '50px 10px 0 100px',
    handleOnClick,
};

export const Selected = Template.bind({});

Selected.args = {
    inputId,
    isSelected: true,
    handleOnClick,
};
