import React from 'react';

import { LoaderSpin } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/loaders/LoaderSpin/README.md';

export default {
    title: 'UI/loaders/LoaderSpin',
    component: LoaderSpin,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
        controls: { hideNoControlsWarning: true },
    },
};

const Template = args => <LoaderSpin {...args} />;

export const Default = Template.bind({});

Default.args = {};
