import React from 'react';

import { DialogHeader } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/dialogs/DialogHeader/README.md';

export default {
    title: 'UI/dialogs/DialogHeader',
    component: DialogHeader,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClickClose: { action: 'clicked', control: false },
    },
};

const Template = args => (
    <div role="grid">
        <DialogHeader {...args} />
    </div>
);

const headerTitle = 'dialog title';

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClickClose = () => {};

export const Default = Template.bind({});

Default.args = {
    headerTitle,
    handleOnClickClose,
};

export const DisabledCloseButton = Template.bind({});

DisabledCloseButton.args = {
    headerTitle,
    isDisabled: true,
    handleOnClickClose,
};

export const CustomTextTransform = Template.bind({});

CustomTextTransform.args = {
    headerTitle,
    textTransform: 'uppercase',
    handleOnClickClose,
};
