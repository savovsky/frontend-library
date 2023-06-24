import React from 'react';

import { DialogConfirmBasic } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/dialogs/DialogConfirmBasic/README.md';

export default {
    title: 'UI/dialogs/DialogConfirmBasic',
    component: DialogConfirmBasic,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleOnClickYes: { action: 'clicked', control: false },
        handleOnClickNo: { action: 'clicked', control: false },
        handleOnClickOk: { action: 'clicked', control: false },
        handleOnClickClose: { action: 'clicked', control: false },
    },
};

const headerTitle = 'dialog title';
const confirmQuestionContent = 'Are you sure you would like to ...';

const Template = args => <DialogConfirmBasic {...args} />;

// TODO Should not be provided, should come from argTypes ?!?
const handleOnClickYes = () => {};
const handleOnClickNo = () => {};
const handleOnClickOk = () => {};
const handleOnClickClose = () => {};

export const ConfirmationStep = Template.bind({});

ConfirmationStep.args = {
    headerTitle,
    confirmQuestionContent,
    successMessageContent: '',
    errorMessage: '',
    isLoading: false,
    isSuccess: false,
    isError: false,
    handleOnClickYes,
    handleOnClickNo,
    handleOnClickOk,
    handleOnClickClose,
};

export const LoadingState = Template.bind({});

LoadingState.args = {
    headerTitle,
    confirmQuestionContent,
    successMessageContent: '',
    errorMessage: '',
    isLoading: true,
    isSuccess: false,
    isError: false,
    handleOnClickYes,
    handleOnClickNo,
    handleOnClickOk,
    handleOnClickClose,
};

export const SuccessState = Template.bind({});

SuccessState.args = {
    headerTitle,
    confirmQuestionContent,
    successMessageContent: 'The action was successful!',
    errorMessage: '',
    isLoading: false,
    isSuccess: true,
    isError: false,
    handleOnClickYes,
    handleOnClickNo,
    handleOnClickOk,
    handleOnClickClose,
};

export const ErrorState = Template.bind({});

ErrorState.args = {
    headerTitle,
    confirmQuestionContent,
    successMessageContent: '',
    errorMessage: 'Some HTTP error',
    isLoading: false,
    isSuccess: false,
    isError: true,
    handleOnClickYes,
    handleOnClickNo,
    handleOnClickOk,
    handleOnClickClose,
};
