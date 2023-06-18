import React from 'react';

import { Modal } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/dialogs/Modal/README.md';
import textMock from './textMock';

export default {
    title: 'UI/dialogs/Modal',
    component: Modal,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        children: { control: false },
        handleOnModalClose: { action: 'close' },
    },
};

const DialogContent = () => <div>Your Component content goes here</div>;

const Template = args => (
    <>
        <div>{textMock}</div>
        <Modal {...args} />
    </>
);

export const Default = Template.bind({});

Default.args = {
    children: <DialogContent />,
    bodyPaddingRight: 16,
    isClosingOnClickOutside: true,
    isClosingOnHitEscape: true,
    handleOnModalClose: () => {},
};
