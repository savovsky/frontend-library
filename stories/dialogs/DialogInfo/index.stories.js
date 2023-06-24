import React from 'react';

import { DialogInfo, DialogContainer } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/dialogs/DialogInfo/README.md';

export default {
    title: 'UI/dialogs/DialogInfo',
    component: DialogInfo,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClickClose: { action: 'clicked', control: false },
    },
};

const headerTitle = 'dialog title';
const demoContent = () => <div>Hello World!</div>;

const Template = args => <DialogInfo {...args} />;

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClickClose = () => {};

export const Default = Template.bind({});

Default.args = {
    headerTitle,
    content: demoContent(),
    handleOnClickClose,
};

export const CustomButtonLabel = Template.bind({});

CustomButtonLabel.args = {
    headerTitle,
    content: demoContent(),
    handleOnClickClose,
    footerButtonLabel: 'close',
};

export const CustomHeaderTextTransform = Template.bind({});

CustomHeaderTextTransform.args = {
    headerTitle,
    headerTextTransform: 'uppercase',
    handleOnClickClose,
};

const TemplateWithWrapper = args => (
    <DialogContainer>
        <DialogInfo {...args} />
    </DialogContainer>
);

export const WithinContainer = TemplateWithWrapper.bind({});

WithinContainer.args = {
    headerTitle,
    content: demoContent(),
    handleOnClickClose,
};
