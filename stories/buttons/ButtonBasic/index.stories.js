import React from 'react';

import { ButtonBasic } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/buttons/ButtonBasic/README.md';

export default {
    title: 'UI/buttons/ButtonBasic',
    component: ButtonBasic,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClick: { action: 'clicked', control: false },
    },
};

const Template = args => <ButtonBasic {...args} />;

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClick = () => {};

export const PrimaryDefault = Template.bind({});

PrimaryDefault.args = {
    content: 'primary button',
    handleOnClick,
};

export const Secondary = Template.bind({});

Secondary.args = {
    content: 'secondary button',
    mode: 'secondary',
    handleOnClick,
};

export const Tertiary = Template.bind({});

Tertiary.args = {
    content: 'tertiary button',
    mode: 'tertiary',
    handleOnClick,
};

export const Quaternary = Template.bind({});

Quaternary.args = {
    content: 'quaternary button',
    mode: 'quaternary',
    handleOnClick,
};

export const PrimaryDisabled = Template.bind({});

PrimaryDisabled.args = {
    content: 'primary',
    isDisabled: true,
    handleOnClick,
};

export const SecondaryDisabled = Template.bind({});

SecondaryDisabled.args = {
    content: 'secondary',
    mode: 'secondary',
    isDisabled: true,
    handleOnClick,
};

export const TertiaryDisabled = Template.bind({});

TertiaryDisabled.args = {
    content: 'tertiary',
    mode: 'tertiary',
    isDisabled: true,
    handleOnClick,
};

export const QuaternaryDisabled = Template.bind({});

QuaternaryDisabled.args = {
    content: 'quaternary',
    mode: 'quaternary',
    isDisabled: true,
    handleOnClick,
};

export const PrimaryMock = Template.bind({});

PrimaryMock.args = {
    content: 'primary mock',
    isMockedData: true,
    handleOnClick,
};

export const SecondaryMock = Template.bind({});

SecondaryMock.args = {
    content: 'secondary mock',
    mode: 'secondary',
    isMockedData: true,
    handleOnClick,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    content: 'custom margin',
    margin: '20px 0 0 50px',
    handleOnClick,
};

export const CustomTextTransform = Template.bind({});

CustomTextTransform.args = {
    content: 'lower case',
    textTransform: 'lowercase',
    handleOnClick,
};
