import React from 'react';

import { ItemLabeledColored } from '../../packages/fel-ui/src';
import readMe from '../../packages/fel-ui/src/components/ItemLabeledColored/README.md';

export default {
    title: 'UI/ItemLabeledColored',
    component: ItemLabeledColored,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
        // controls: { hideNoControlsWarning: true },
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

export const IndicatorWithPercentageColorSet = Template.bind({});

IndicatorWithPercentageColorSet.args = {
    label,
    value,
    indicatorColor: '#dc4405',
    indicatorPercentage: '15.00',
};

export const IndicatorClassnameSet = Template.bind({});

IndicatorClassnameSet.args = {
    label,
    value,
    indicatorClassName: 'fel__color-indicator_secondary',
};

export const IndicatorWithPercentageClassnameSet = Template.bind({});

IndicatorWithPercentageClassnameSet.args = {
    label,
    value,
    indicatorClassName: 'fel__color-indicator_secondary',
    indicatorPercentage: '15.00',
};

export const LabelColorSet = Template.bind({});

LabelColorSet.args = {
    label,
    value,
    indicatorClassName: 'fel__color-indicator_secondary',
    labelColor: '#dc4405',
};
export const LabelClassnameSet = Template.bind({});

LabelClassnameSet.args = {
    label,
    value,
    indicatorColor: '#dc4405',
    labelClassName: 'fel__item-labeled_value_secondary',
};

export const Mock = Template.bind({});

Mock.args = {
    label,
    value,
    indicatorColor: '#dc4405',
    indicatorClassname: 'fel__color-indicator_secondary',
    labelClassName: 'fel__item-labeled_value_secondary',
    isMockedData: true,
};
