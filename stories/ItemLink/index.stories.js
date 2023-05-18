import React from 'react';

import { ItemLink } from '../../packages/fel-ui/src';
import readMe from '../../packages/fel-ui/src/components/ItemLink/README.md';

export default {
    title: 'UI/ItemLink',
    component: ItemLink,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    // argTypes: {
    //     target: {
    //         options: ['self', 'blank', 'parent', 'top'],
    //         control: { type: 'select' },
    //     },
    // },
};

const Template = args => <ItemLink {...args} />;

const href = 'https://google.com';
const children = 'Folow me';

export const Default = Template.bind({});

Default.args = {
    href,
    children,
};

export const Disabled = Template.bind({});

Disabled.args = {
    href,
    children,
    isDisabled: true,
};

export const Mock = Template.bind({});

Mock.args = {
    href,
    children,
    isMockedData: true,
};

export const TargetParent = Template.bind({});

TargetParent.args = {
    href,
    children,
    target: 'parent',
};
