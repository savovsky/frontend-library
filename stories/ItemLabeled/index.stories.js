import React from 'react';

import { ItemLabeled } from '../../packages/fel-ui/src';
import readMe from '../../packages/fel-ui/src/components/ItemLabeled/README.md';

export default {
    title: 'UI/ItemLabeled',
    component: ItemLabeled,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
        controls: { hideNoControlsWarning: true },
    },
};

const Template = args => <ItemLabeled {...args} />;

const label = 'name';
const value = 'John Doe';

export const Default = Template.bind({});

Default.args = {
    label,
    value,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    label,
    value,
    margin: '50px 0 0 100px',
};

export const Accent = Template.bind({});

Accent.args = {
    label,
    value,
    isAccent: true,
};

export const Link = Template.bind({});

Link.args = {
    label,
    value,
    href: 'https://google.com',
};

export const Mock = Template.bind({});

Mock.args = {
    label,
    value,
    isMockedData: true,
};

export const All = () => (
    <>
        <Default {...Default.args} />
        <Accent {...Accent.args} />
        <Link {...Link.args} />
        <Mock {...Mock.args} />
    </>
);
