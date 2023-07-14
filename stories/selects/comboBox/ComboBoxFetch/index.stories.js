import React from 'react';

import { ComboBoxFetch } from '../../../../packages/fel-ui/src';
import readMe from '../../../../packages/fel-ui/src/components/selects/combobox/ComboBoxFetch/README.md';
import mock from '../optionsMock';

export default {
    title: 'UI/selects/combobox/ComboBoxFetch',
    component: ComboBoxFetch,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleComboOnOptionSelect: { action: 'select' },
        handleComboTextInputOnChange: { action: 'change' },
        // controlled value prop
        currentOptionId: {
            control: {
                disable: true,
            },
        },
    },
};

const DemoWrapper = ({ children }) => (
    <div style={{ margin: '0 0 250px' }}>{children}</div>
);

const inputId = 'country';
const label = 'country';

const Template = args => (
    <DemoWrapper>
        <ComboBoxFetch {...args} />
    </DemoWrapper>
);

export const Fetching = Template.bind({});

Fetching.args = {
    inputId,
    label,
    optionItems: [],
    isFetching: true,
    isFetchFulfilled: false,
    isFetchRejected: false,
    fetchError: '',
    isPayloadValid: false,
};

export const Rejected = Template.bind({});

Rejected.args = {
    inputId,
    label,
    optionItems: [],
    isFetching: false,
    isFetchFulfilled: false,
    isFetchRejected: true,
    fetchError: 'Some HTTP error - Lorem ipsum dolor sit amet.',
    isPayloadValid: false,
};

export const FulfilledWidthInvalidData = Template.bind({});

FulfilledWidthInvalidData.args = {
    inputId,
    label,
    optionItems: [],
    isFetching: false,
    isFetchFulfilled: true,
    isFetchRejected: false,
    fetchError: '',
    isPayloadValid: false,
};

export const FulfilledWidthValidData = Template.bind({});

FulfilledWidthValidData.args = {
    inputId,
    label,
    optionItems: mock,
    isFetching: false,
    isFetchFulfilled: true,
    isFetchRejected: false,
    fetchError: '',
    isPayloadValid: true,
};

export const CustomContainerWidth = Template.bind({});

CustomContainerWidth.args = {
    inputId,
    label,
    optionItems: mock,
    isFetching: false,
    isFetchFulfilled: true,
    isFetchRejected: false,
    fetchError: '',
    isPayloadValid: true,
    maxWidth: '250px',
};

export const CustomOptionsContainerMaxHeight = Template.bind({});

CustomOptionsContainerMaxHeight.args = {
    inputId,
    label,
    optionItems: mock,
    isFetching: false,
    isFetchFulfilled: true,
    isFetchRejected: false,
    fetchError: '',
    isPayloadValid: true,
    optionsContainerMaxHeight: '110px',
};

export const Disabled = Template.bind({});

Disabled.args = {
    inputId,
    label,
    optionItems: [],
    isDisabled: true,
    isFetching: false,
    isFetchFulfilled: false,
    isFetchRejected: false,
    fetchError: 'Required field',
    isPayloadValid: true,
};

export const MockOptions = Template.bind({});

MockOptions.args = {
    inputId,
    label,
    optionItems: mock,
    isFetching: false,
    isFetchFulfilled: true,
    isFetchRejected: false,
    fetchError: '',
    isPayloadValid: true,
    isMockedData: true,
};

export const CustomInternalValidationError = Template.bind({});

CustomInternalValidationError.args = {
    inputId,
    label,
    optionItems: mock,
    isFetching: false,
    isFetchFulfilled: true,
    isFetchRejected: false,
    fetchError: '',
    isPayloadValid: true,
    validationError: 'Required field',
    validationErrorInternal: 'Custom internal validation error',
};
