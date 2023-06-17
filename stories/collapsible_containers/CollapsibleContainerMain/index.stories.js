import React from 'react';

import { CollapsibleContainerMain } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/collapsible_containers/CollapsibleContainerMain/README.md';
import textMock from './textMock';

export default {
    title: 'UI/collapsible containers/CollapsibleContainerMain',
    component: CollapsibleContainerMain,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClickCollapse: { action: 'clicked', control: false },
        bodyContent: { control: false },
        headerContent: { control: false },
    },
};

const bodyHeight = '150px';
const title = 'container title';

const DemoHeaderContent = () => {
    return <div>Header content goes here</div>;
};

const DemoBodyContent = () => {
    return (
        <div style={{ overflow: 'auto', height: bodyHeight }}>{textMock}</div>
    );
};

const Template = args => (
    <>
        <CollapsibleContainerMain {...args} />
        <div>Hello World!</div>
    </>
);

export const Default = Template.bind({});

Default.args = {
    title,
    bodyHeight,
    bodyContent: <DemoBodyContent />,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    title,
    bodyHeight,
    bodyContent: <DemoBodyContent />,
    margin: '50px 0 20px 200px',
};

export const Collapsed = Template.bind({});

Collapsed.args = {
    title,
    bodyHeight,
    bodyContent: <DemoBodyContent />,
    isCollapsed: true,
};

export const HeaderContent = Template.bind({});

HeaderContent.args = {
    title,
    bodyHeight,
    headerContent: <DemoHeaderContent />,
    bodyContent: <DemoBodyContent />,
    isCollapsed: true,
};

export const HeaderBorder = Template.bind({});

HeaderBorder.args = {
    title,
    bodyHeight,
    bodyContent: <DemoBodyContent />,
    hasHeaderBorder: true,
};

export const CustomTitleTextTransform = Template.bind({});

CustomTitleTextTransform.args = {
    title,
    bodyHeight,
    bodyContent: <DemoBodyContent />,
    titleTextTransform: 'uppercase',
};
