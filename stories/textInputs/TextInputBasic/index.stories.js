/* eslint-disable react/destructuring-assignment */

import React, { useState } from 'react';

import { TextInputBasic } from '../../../packages/fel-ui/src';
import readMe from '../../../packages/fel-ui/src/components/textInputs/TextInputBasic/README.md';

export default {
    title: 'UI/textInputs/TextInputBasic',
    component: TextInputBasic,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleTextInputOnBlur: {
            action: 'blur',
            control: false,
        },
        handleTextInputOnChange: {
            action: 'change',
            control: false,
        },
        // controled value prop
        value: {
            control: {
                disable: true,
            },
        },
    },
};

const Template = args => {
    const [value, setValue] = useState(args.value || '');

    const handleTextInputOnChange = (inputId, inputValue) => {
        args.handleTextInputOnChange(inputId, inputValue);
        setValue(inputValue);
    };

    return (
        <TextInputBasic
            {...args}
            value={value}
            handleTextInputOnChange={handleTextInputOnChange}
        />
    );
};

const inputId = 'phone-number';
const label = 'phone number';
const value = '';

// TODO Should not be provided, should come from argTypes ?!?
// const handleTextInputOnBlur = () => {};
// const handleTextInputOnChange = () => {};

export const Default = Template.bind({});

Default.args = {
    inputId,
    label,
    value,
};

export const WithInitialValue = Template.bind({});

WithInitialValue.args = {
    inputId,
    label,
    value: '12345',
};

export const CustomWidth = Template.bind({});

CustomWidth.args = {
    inputId,
    label,
    value: '1234556256235623562353',
    width: '150px',
};

export const ValidationError = Template.bind({});

ValidationError.args = {
    inputId,
    label,
    value: '8h3d7hd7hd7h',
    width: '200px',
    validationError: 'invalid phone number',
};

export const Disabled = Template.bind({});

Disabled.args = {
    inputId,
    label,
    value: '1234556256235623562353',
    width: '250px',
    validationError: 'invalid phone number',
    isDisabled: true,
};

export const MaxLength = Template.bind({});

MaxLength.args = {
    inputId,
    label,
    value: '1234567890',
    maxLength: 10,
};

export const Placeholder = Template.bind({});

Placeholder.args = {
    inputId,
    label,
    value: '',
    placeholder: 'numbers only',
};

export const InitiallyOnFocus = Template.bind({});

InitiallyOnFocus.args = {
    inputId,
    label,
    value: '',
    hasAutoFocus: true,
};
