import React from 'react';

import { LoaderLine } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/loaders/LoaderLine/README.md';

export default {
    title: 'UI/loaders/LoaderLine',
    component: LoaderLine,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
        controls: { hideNoControlsWarning: true },
    },
};

const Template = args => <LoaderLine {...args} />;

export const Default = Template.bind({});

Default.args = {};
