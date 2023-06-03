import React from 'react';

import { ButtonIcon } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/buttons/ButtonIcon/README.md';

export default {
    title: 'UI/buttons/ButtonIcon',
    component: ButtonIcon,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClick: { action: 'clicked', control: false },
        size: { control: 'select' },
        icon: { control: 'select' },
    },
};

const Template = args => <ButtonIcon {...args} />;

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClick = () => {};

export const Default = Template.bind({});

Default.args = {
    icon: 'edit',
    label: 'edit',
    handleOnClick,
};

export const Mock = Template.bind({});

Mock.args = {
    icon: 'edit',
    label: 'edit',
    isMockedData: true,
    handleOnClick,
};

export const Disabled = Template.bind({});

Disabled.args = {
    icon: 'trash',
    label: 'delete',
    isDisabled: true,
    handleOnClick,
};

export const LargeIcon = Template.bind({});

LargeIcon.args = {
    icon: 'trash',
    size: '2x',
    handleOnClick,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    icon: 'trash',
    label: 'delete',
    margin: '20px 0 0 50px',
    handleOnClick,
};

export const CustomTextTransform = Template.bind({});

CustomTextTransform.args = {
    icon: 'trash',
    label: 'delete',
    textTransform: 'uppercase',
    handleOnClick,
};
