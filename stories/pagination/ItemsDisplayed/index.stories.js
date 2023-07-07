import React from 'react';

import { ItemsDisplayed } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/pagination/ItemsDisplayed/README.md';

export default {
    title: 'UI/pagination/ItemsDisplayed',
    component: ItemsDisplayed,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
};

const Template = args => <ItemsDisplayed {...args} />;

export const Default = Template.bind({});

Default.args = {
    fromItem: 10,
    toItem: 30,
    totalItems: 155,
};
