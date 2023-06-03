import React from 'react';

import { TitleContainer } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/title/TitleContainer/README.md';

export default {
    title: 'UI/title/TitleContainer',
    component: TitleContainer,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
};

const content = 'title container';

const Template = args => <TitleContainer {...args} />;

export const Default = Template.bind({});

Default.args = {
    content,
};

export const CustomPadding = Template.bind({});

CustomPadding.args = {
    content,
    padding: '50px',
};

export const CustomTextTransform = Template.bind({});

CustomTextTransform.args = {
    content,
    textTransform: 'uppercase',
};

export const Secondary = Template.bind({});

Secondary.args = {
    content,
    mode: 'secondary',
};

export const Tertiary = Template.bind({});

Tertiary.args = {
    content,
    mode: 'tertiary',
};
