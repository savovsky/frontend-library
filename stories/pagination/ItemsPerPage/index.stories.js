import React from 'react';

import { ItemsPerPage } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/pagination/ItemsPerPage/README.md';

export default {
    title: 'UI/pagination/ItemsPerPage',
    component: ItemsPerPage,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleSelectedOption: { action: 'selected', control: false },
    },
};

// TODO Should not be provided, should come from argTypes ?!?
const handleSelectedOption = () => {};

const DemoWrapper = ({ children }) => (
    <div style={{ margin: '100px' }}>{children}</div>
);

const Template = args => (
    <DemoWrapper>
        <ItemsPerPage {...args} />
    </DemoWrapper>
);

export const Default = Template.bind({});

Default.args = {
    currentPageSizeId: '50',
    pageSizeOptions: [
        { id: '10', value: '10' },
        { id: '50', value: '50' },
        { id: 'ALL', value: 'All' },
    ],
    handleSelectedOption,
};
