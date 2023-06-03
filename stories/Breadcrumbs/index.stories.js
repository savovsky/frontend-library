import React from 'react';

import { Breadcrumbs } from '../../packages/fel-ui/src';
import readMe from '../../packages/fel-ui/src/components/Breadcrumbs/README.md';
import mock from './breadcrumbsMock';

export default {
    title: 'UI/Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
};

const Template = args => <Breadcrumbs {...args} />;

export const Default = Template.bind({});

Default.args = {
    breadcrumbs: mock.default,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    breadcrumbs: mock.default,
    margin: '100px 50px',
};

export const CustomLinksTextTransform = Template.bind({});

CustomLinksTextTransform.args = {
    breadcrumbs: mock.default,
    linksTextTransform: 'uppercase',
};

export const LastNodeComponent = Template.bind({});

LastNodeComponent.args = {
    breadcrumbs: mock.lastNodeComponent,
};
