import React from 'react';

import { Stepper } from '../../packages/fel-ui/src';
import readMe from '../../packages/fel-ui/src/components/Stepper/README.md';
import mock from './stepperMock';

export default {
    title: 'UI/Stepper',
    component: Stepper,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
};

const Template = args => <Stepper {...args} />;

export const Default = Template.bind({});

Default.args = {
    stepperItems: mock.default,
    completedSteps: 0,
};

export const CustomStepItemWidth = Template.bind({});

CustomStepItemWidth.args = {
    stepperItems: mock.default,
    completedSteps: 1,
    stepItemWidth: '80px',
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    stepperItems: mock.default,
    completedSteps: 1,
    margin: '100px 50px',
};

export const TwoComleted = Template.bind({});

TwoComleted.args = {
    stepperItems: mock.default,
    completedSteps: 2,
};

export const NodesReactComponents = Template.bind({});

NodesReactComponents.args = {
    stepperItems: mock.nodesReactComponents,
    completedSteps: 2,
};
