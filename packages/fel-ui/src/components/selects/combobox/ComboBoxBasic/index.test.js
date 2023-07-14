import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import str from '../../../../utils/stringsUtils';
import ComboBoxBasic from '.';

afterEach(cleanup);

describe('<ComboBoxBasic />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-combo-box-basic';
    const inputId = 'userName';
    const label = 'user name';
    const optionItems = [
        { id: 'foo', value: 'abc' },
        { id: 'bar', value: 'abe' },
        { id: 'baz', value: 'cam' },
    ];
    const handleComboOnOptionSelect = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const currentOptionId = 'foo';

        const { getByTestId, getByText, getByDisplayValue } = render(
            <ComboBoxBasic
                inputId={inputId}
                label={label}
                optionItems={optionItems}
                currentOptionId={currentOptionId}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
            />,
        );

        const comboBox = getByTestId(componentId);
        const comboBoxLabel = getByText(label);
        const comboBoxValue = getByDisplayValue('abc');

        expect(comboBox).toBeTruthy();
        expect(comboBoxLabel).toBeInTheDocument();
        expect(comboBoxValue).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const currentOptionId = 'any';

        const { getByTestId, getByText, queryByDisplayValue } = render(
            <ComboBoxBasic
                inputId={inputId}
                label={label}
                optionItems={optionItems}
                currentOptionId={currentOptionId}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
            />,
        );

        const comboBox = getByTestId(componentId);
        const comboBoxLabel = getByText(label);
        const value1 = queryByDisplayValue('abc');
        const value2 = queryByDisplayValue('abe');
        const value3 = queryByDisplayValue('cam');

        expect(comboBox).toBeTruthy();
        expect(comboBoxLabel).toBeInTheDocument();
        expect(value1).toBeNull();
        expect(value2).toBeNull();
        expect(value3).toBeNull();
    });

    test(`${testMsg} with provided props`, () => {
        const currentOptionId = '';

        const { getByTestId, getByText, queryByDisplayValue } = render(
            <ComboBoxBasic
                inputId={inputId}
                label={label}
                optionItems={optionItems}
                currentOptionId={currentOptionId}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
            />,
        );

        const comboBox = getByTestId(componentId);
        const comboBoxLabel = getByText(label);
        const value1 = queryByDisplayValue('abc');
        const value2 = queryByDisplayValue('abe');
        const value3 = queryByDisplayValue('cam');

        expect(comboBox).toBeTruthy();
        expect(comboBoxLabel).toBeInTheDocument();
        expect(value1).toBeNull();
        expect(value2).toBeNull();
        expect(value3).toBeNull();
    });

    test(`${testMsg} with provided props`, () => {
        const currentOptionId = 'foo';

        const { getByTestId, queryByText, getByDisplayValue } = render(
            <ComboBoxBasic
                inputId={inputId}
                label={label}
                optionItems={optionItems}
                currentOptionId={currentOptionId}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
            />,
        );

        const comboBoxValue = getByDisplayValue('abc');
        const textInput = getByTestId('fel-text-input');
        const textInputButton = getByTestId('fel-display-options-btn');

        expect(comboBoxValue).toBeTruthy();
        expect(textInput).toBeTruthy();
        expect(textInputButton).toBeTruthy();

        fireEvent.click(textInput);
        expect(queryByText('abe')).toBeInTheDocument();
        expect(queryByText('cam')).toBeInTheDocument();

        fireEvent.change(textInput, { target: { value: 'z' } });
        fireEvent.click(textInput);
        fireEvent.change(textInput, { target: { value: 'zz' } });
        expect(queryByText(str.noMatches)).toBeInTheDocument();
        expect(queryByText('abc')).not.toBeInTheDocument();
        expect(queryByText('abe')).not.toBeInTheDocument();
        expect(queryByText('cam')).not.toBeInTheDocument();

        fireEvent.mouseDown(document);
        expect(getByDisplayValue('zz')).toBeInTheDocument();
        expect(queryByText(str.selectOptionOrClearInput)).toBeInTheDocument();

        fireEvent.click(textInput);
        expect(queryByText(str.noMatches)).not.toBeInTheDocument();
        expect(queryByText('abc')).toBeInTheDocument();
        expect(queryByText('abe')).toBeInTheDocument();
        expect(queryByText('cam')).toBeInTheDocument();

        fireEvent.change(textInput, { target: { value: 'b' } });
        expect(queryByText('abc')).toBeInTheDocument();
        expect(queryByText('abe')).toBeInTheDocument();
        expect(queryByText('cam')).not.toBeInTheDocument();

        fireEvent.click(textInputButton);
        expect(getByDisplayValue('b')).toBeInTheDocument();
        expect(queryByText(str.selectOptionOrClearInput)).toBeInTheDocument();

        fireEvent.click(textInputButton);
        expect(textInput).toHaveFocus();

        const value2 = queryByText('abe');
        expect(value2).toBeInTheDocument();

        fireEvent.click(value2);
        expect(handleComboOnOptionSelect).toBeCalledWith(inputId, 'bar');

        fireEvent.keyPress(textInput, {
            key: 'Enter',
            charCode: 13,
        });

        fireEvent.click(textInput);

        userEvent.tab();
        userEvent.tab();

        fireEvent.keyPress(queryByText('abc'), {
            key: 'Enter',
            charCode: 13,
        });

        expect(getByDisplayValue('abc')).toBeInTheDocument();
    });
});
