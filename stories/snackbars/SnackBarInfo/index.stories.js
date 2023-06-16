import React from 'react';

import { SnackBarInfo } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/snackbars/SnackBarInfo/README.md';

export default {
    title: 'UI/snackbars/SnackBarInfo',
    component: SnackBarInfo,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
};

const Template = args => <SnackBarInfo {...args} />;

export const Default = Template.bind({});

Default.args = {
    content: 'Some message',
};

export const ErrorMode = Template.bind({});

ErrorMode.args = {
    content: 'Error message',
    mode: 'error',
};

export const WarningMode = Template.bind({});

WarningMode.args = {
    content: 'Warning message',
    mode: 'warning',
};

export const InfoMode = Template.bind({});

InfoMode.args = {
    content: 'Info message',
    mode: 'info',
};

export const SuccessMode = Template.bind({});

SuccessMode.args = {
    content: 'Success message',
    mode: 'success',
};

export const UnknownMode = Template.bind({});

UnknownMode.args = {
    content: 'Unknown mode snackbar',
    mode: 'foo',
};
