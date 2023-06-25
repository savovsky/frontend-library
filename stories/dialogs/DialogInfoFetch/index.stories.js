import React from 'react';

import { DialogInfoFetch, DialogContainer } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/dialogs/DialogInfoFetch/README.md';

export default {
    title: 'UI/dialogs/DialogInfoFetch',
    component: DialogInfoFetch,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClickRetry: { action: 'clicked', control: false },
        handleOnClickClose: { action: 'clicked', control: false },
    },
};

const headerTitle = 'dialog title';
const demoContent = () => <div>Hello World!</div>;

const Template = args => <DialogInfoFetch {...args} />;

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClickRetry = () => {};
const handleOnClickClose = () => {};

export const LoadingState = Template.bind({});

LoadingState.args = {
    headerTitle,
    content: null,
    errorMessage: '',
    isLoading: true,
    isSuccess: false,
    isError: false,
    handleOnClickRetry,
    handleOnClickClose,
};

export const SuccessState = Template.bind({});

SuccessState.args = {
    headerTitle,
    content: demoContent(),
    errorMessage: '',
    isLoading: false,
    isSuccess: true,
    isError: false,
    handleOnClickRetry,
    handleOnClickClose,
};

export const ErrorState = Template.bind({});

ErrorState.args = {
    headerTitle,
    content: null,
    errorMessage: 'some HTTP error',
    isLoading: false,
    isSuccess: false,
    isError: true,
    handleOnClickRetry,
    handleOnClickClose,
};

const TemplateWithWrapper = args => (
    <DialogContainer>
        <DialogInfoFetch {...args} />
    </DialogContainer>
);

export const WithinContainer = TemplateWithWrapper.bind({});

WithinContainer.args = {
    headerTitle,
    content: demoContent(),
    errorMessage: '',
    isLoading: false,
    isSuccess: true,
    isError: false,
    handleOnClickRetry,
    handleOnClickClose,
};
