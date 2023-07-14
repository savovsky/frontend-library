import React from 'react';

import { ComboBoxBasic } from '../../../../packages/fel-ui/src';
import readMe from '../../../../packages/fel-ui/src/components/selects/combobox/ComboBoxBasic/README.md';
import mock from '../optionsMock';

export default {
    title: 'UI/selects/combobox/ComboBoxBasic',
    component: ComboBoxBasic,
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
        <ComboBoxBasic {...args} />
    </DemoWrapper>
);

export const Default = Template.bind({});

Default.args = {
    inputId,
    label,
    optionItems: mock,
    currentOptionId: '',
};

export const CustomContainerWidth = Template.bind({});

CustomContainerWidth.args = {
    inputId,
    label,
    optionItems: mock,
    currentOptionId: 'USA',
    maxWidth: '250px',
};

export const CustomOptionsContainerMaxHeight = Template.bind({});

CustomOptionsContainerMaxHeight.args = {
    inputId,
    label,
    optionItems: mock,
    currentOptionId: 'USA',
    optionsContainerMaxHeight: '105px',
};

export const Disabled = Template.bind({});

Disabled.args = {
    inputId,
    label,
    optionItems: mock,
    currentOptionId: 'USA',
    isDisabled: true,
};

export const MultipleSelect = Template.bind({});

MultipleSelect.args = {
    inputId,
    label,
    optionItems: mock,
    currentOptionId: ' ',
    isMultipleSelect: true,
};

export const MockOptions = Template.bind({});

MockOptions.args = {
    inputId,
    label,
    optionItems: mock,
    currentOptionId: '',
    isMockedData: true,
};

export const CustomInternalValidationError = Template.bind({});

CustomInternalValidationError.args = {
    inputId,
    label,
    optionItems: mock,
    currentOptionId: '',
    validationError: 'Required field',
    validationErrorInternal: 'Custom internal validation error',
};
