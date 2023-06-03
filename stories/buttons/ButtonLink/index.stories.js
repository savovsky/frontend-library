import React from 'react';

import { ButtonLink, LoaderLine } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/buttons/ButtonLink/README.md';

export default {
    title: 'UI/buttons/ButtonLink',
    component: ButtonLink,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClick: { action: 'clicked', control: false },
    },
};

const content = 'button link';

const ContentComponent = ({ label }) => (
    <div>
        <LoaderLine />
        {label}
    </div>
);

const Template = args => <ButtonLink {...args} />;

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClick = () => {};

export const Default = Template.bind({});

Default.args = {
    content,
    handleOnClick,
};

export const Mock = Template.bind({});

Mock.args = {
    content,
    isMockedData: true,
    handleOnClick,
};

export const Disabled = Template.bind({});

Disabled.args = {
    content,
    isDisabled: true,
    handleOnClick,
};

export const ComponentAsContent = Template.bind({});

ComponentAsContent.args = {
    content: <ContentComponent label={content} />,
    handleOnClick,
};

export const CustomMargin = Template.bind({});

CustomMargin.args = {
    content,
    margin: '20px 0 0 50px',
    handleOnClick,
};

export const CustomTextTransform = Template.bind({});

CustomTextTransform.args = {
    content,
    textTransform: 'uppercase',
    handleOnClick,
};
