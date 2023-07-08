import React from 'react';

import { SelectBasic } from '../../../../packages/fel-ui/src';
import readMe from '../../../../packages/fel-ui/src/components/selects/select/SelectBasic/README.md';
import mock from '../optionsMock';

export default {
    title: 'UI/selects/select/SelectBasic',
    component: SelectBasic,
    parameters: {
        componentSubtitle: 'React Component',
        notes: { readMe },
    },
    argTypes: {
        handleSelectedOption: { action: 'select', control: false },
        // controlled value prop
        currentOptionId: {
            control: {
                disable: true,
            },
        },
    },
};

const DemoWrapper = ({ children }) => (
    <div style={{ margin: '55px 0 80px' }}>{children}</div>
);

const Template = args => (
    <DemoWrapper>
        <SelectBasic {...args} />
    </DemoWrapper>
);

export const Default = Template.bind({});

Default.args = {
    selectId: 'status',
    label: 'status',
    optionItems: mock.status,
    currentOptionId: 'ACTIVE',
};

export const Disabled = Template.bind({});

Disabled.args = {
    selectId: 'status',
    label: 'status',
    optionItems: mock.status,
    currentOptionId: 'ACTIVE',
    isDisabled: true,
};

export const MissingOptions = Template.bind({});

MissingOptions.args = {
    selectId: 'status',
    label: 'status',
    optionItems: [],
    currentOptionId: '',
};

export const CustomWidth = Template.bind({});

CustomWidth.args = {
    selectId: 'status',
    label: 'status',
    optionItems: mock.status,
    currentOptionId: 'ACTIVE',
    width: '120px',
};

export const OptionsContainerMaxHeight = Template.bind({});

OptionsContainerMaxHeight.args = {
    selectId: 'quantity',
    label: 'quantity',
    optionItems: mock.quantity,
    currentOptionId: '2',
    width: '100px',
    optionsContainerMaxHeight: '165px',
};

export const MockOptions = Template.bind({});

MockOptions.args = {
    selectId: 'status',
    label: 'status',
    optionItems: mock.status,
    currentOptionId: 'ACTIVE',
    isMockedData: true,
};

export const Placeholder = Template.bind({});

Placeholder.args = {
    selectId: 'status',
    label: '',
    optionItems: mock.status,
    currentOptionId: '',
    placeholder: 'Select an option',
    optionsContainerMaxHeight: '435px',
};

export const PlaceholderDisabled = Template.bind({});

PlaceholderDisabled.args = {
    selectId: 'status',
    label: '',
    optionItems: mock.status,
    currentOptionId: '',
    placeholder: 'Select an option',
    optionsContainerMaxHeight: '435px',
    isDisabled: true,
};
