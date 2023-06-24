import React from 'react';

import { DialogContainer } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/dialogs/DialogContainer/README.md';

export default {
    title: 'UI/dialogs/DialogContainer',
    component: DialogContainer,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        children: { control: false },
    },
};

const dialogContent = () => <div>Your Component goes here.</div>;

const Template = args => <DialogContainer {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: dialogContent(),
};

export const CustomContainerWidth = Template.bind({});

CustomContainerWidth.args = {
    children: dialogContent(),
    containerWidth: '250px',
};

export const LightBackground = Template.bind({});

LightBackground.args = {
    children: dialogContent(),
    isLightBackground: true,
};
