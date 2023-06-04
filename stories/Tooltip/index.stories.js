import React from 'react';

import { Tooltip, LoaderSpin } from '../../packages/fel-ui/src';
import readMe from '../../packages/fel-ui/src/components/Tooltip/README.md';

export default {
    title: 'UI/Tooltip',
    component: Tooltip,
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
            margin: '100px 0 100px 300px',
            height: '100px',
            color: '#cc0000',
        }}
    >
        {children}
    </div>
);

const Template = args => (
    <DemoWrapper>
        <Tooltip {...args} />
    </DemoWrapper>
);

const content = 'Your tooltip goes here';
const text = 'Hover over me';

export const Default = Template.bind({});

Default.args = {
    content,
    children: <div>{text}</div>,
};

export const ContentComponent = Template.bind({});

ContentComponent.args = {
    content: <LoaderSpin />,
    children: <div>{text}</div>,
    width: 'auto',
};

export const Top = Template.bind({});

Top.args = {
    content,
    children: <div>{text}</div>,
    placement: 'top',
};

export const Right = Template.bind({});

Right.args = {
    content,
    children: <div>{text}</div>,
    placement: 'right',
};

export const Left = Template.bind({});

Left.args = {
    content,
    children: <div>{text}</div>,
    placement: 'left',
};

export const Disabled = Template.bind({});

Disabled.args = {
    content,
    children: <div>{text}</div>,
    isDisabled: true,
};

export const CustomWidth = Template.bind({});

CustomWidth.args = {
    content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    children: <div>{text}</div>,
    width: '250px',
};

export const CustomOffsetTop = Template.bind({});

CustomOffsetTop.args = {
    content,
    children: <div>{text}</div>,
    placement: 'top',
    offset: '25px',
};

export const CustomOffsetRight = Template.bind({});

CustomOffsetRight.args = {
    content,
    children: <div>{text}</div>,
    placement: 'right',
    offset: '60px',
};

export const CustomOffsetBottom = Template.bind({});

CustomOffsetBottom.args = {
    content,
    children: <div>{text}</div>,
    placement: 'bottom',
    offset: '60px',
};

export const CustomOffsetLeft = Template.bind({});

CustomOffsetLeft.args = {
    content,
    children: <div>{text}</div>,
    placement: 'left',
    offset: '60px',
};
