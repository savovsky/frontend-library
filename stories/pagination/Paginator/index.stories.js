import React from 'react';

import { Paginator } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/pagination/Paginator/README.md';

export default {
    title: 'UI/pagination/Paginator',
    component: Paginator,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnSelect: { action: 'selected', control: false },
    },
};

const Template = args => <Paginator {...args} />;

// TODO Should not be provided, should come from argTypes ?!?
const handleOnSelect = () => {};

export const Default = Template.bind({});

Default.args = {
    totalPagesCount: 35,
    pageIndex: 0,
    handleOnSelect,
};
