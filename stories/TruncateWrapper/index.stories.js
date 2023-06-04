import React from 'react';

import { TruncateWrapper } from '../../packages/fel-ui/src';
import readMe from '../../packages/fel-ui/src/components/TruncateWrapper/README.md';

export default {
    title: 'UI/TruncateWrapper',
    component: TruncateWrapper,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        children: { control: false },
    },
};

const DemoWrapper = ({ children }) => (
    <div
        style={{
            margin: '100px',
        }}
    >
        {children}
    </div>
);

const Template = args => (
    <DemoWrapper>
        <TruncateWrapper {...args} />
    </DemoWrapper>
);

const text = '123456789';
const limit = 5;

export const Default = Template.bind({});

Default.args = {
    text,
    limit,
};

export const TooltipRight = Template.bind({});

TooltipRight.args = {
    text,
    limit,
    tooltipPlacement: 'right',
};

export const TooltipBottomOffset = Template.bind({});

TooltipBottomOffset.args = {
    text,
    limit,
    tooltipPlacement: 'bottom',
    tooltipOffset: '40px',
};

export const TooltipCustomWidth = Template.bind({});

TooltipCustomWidth.args = {
    text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    limit: 15,
    tooltipWidth: '200px',
};
