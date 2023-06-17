import React from 'react';

import { Chip } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/chips/Chip/README.md';

export default {
    title: 'UI/chips/Chip',
    component: Chip,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
};

const Template = args => (
    <div role="grid">
        <Chip {...args} />
    </div>
);

const content = 'Lorem ipsum dolor sit amet';

export const Default = Template.bind({});

Default.args = {
    content,
};

export const Disabled = Template.bind({});

Disabled.args = {
    content,
    isDisabled: true,
};

export const CustomMaxWidth = Template.bind({});

CustomMaxWidth.args = {
    content,
    maxWidth: '100px',
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    content,
    margin: '20px 0 0 50px',
};

export const CustomTextTransform = Template.bind({});

CustomTextTransform.args = {
    content: 'upper case',
    textTransform: 'uppercase',
};
