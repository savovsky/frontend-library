import React from 'react';

import { ItemLabeledColored } from '../../packages/fel-ui/src';
import readMe from '../../packages/fel-ui/src/components/ItemLabeledColored/README.md';

export default {
    title: 'UI/ItemLabeledColored',
    component: ItemLabeledColored,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
        controls: { hideNoControlsWarning: true },
    },
};

const Template = args => <ItemLabeledColored {...args} />;

const label = 'amount';
const value = '$5.00';

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

export const IndicatorColorSet = Template.bind({});

IndicatorColorSet.args = {
    label,
    value,
    indicatorColor: '#dc4405',
};

// TODO IndicatorWithPercantageColorSet and so on...

export const Mock = Template.bind({});

Mock.args = {
    label,
    value,
    // TODO add more
    isMockedData: true,
};
