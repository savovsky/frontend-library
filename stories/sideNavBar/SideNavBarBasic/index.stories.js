import React from 'react';

import { SideNavBarBasic } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/sideNavBar/SideNavBarBasic/README.md';
import mockup from './navLinksMock';

export default {
    title: 'UI/sideNavBar/SideNavBarBasic',
    component: SideNavBarBasic,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnLinkSelect: { action: 'link selected with id', control: false },
    },
};

const Template = args => (
    <aside style={{ margin: '50px' }}>
        <SideNavBarBasic {...args} />
    </aside>
);

// TODO Should not be provided, should come from argTypes ?!?
const handleOnLinkSelect = () => {};

export const Default = Template.bind({});

Default.args = {
    navItems: mockup,
    handleOnLinkSelect,
};

export const DefaultActiveLink = Template.bind({});

DefaultActiveLink.args = {
    navItems: mockup,
    defaultActiveNavLinkId: '4',
    handleOnLinkSelect,
};
