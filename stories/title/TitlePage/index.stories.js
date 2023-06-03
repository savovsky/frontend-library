import React from 'react';

import { TitlePage } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/title/TitlePage/README.md';

export default {
    title: 'UI/title/TitlePage',
    component: TitlePage,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
};

const content = 'page title';

const Template = args => <TitlePage {...args} />;

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
