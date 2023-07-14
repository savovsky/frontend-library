import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import str from '../../../../utils/stringsUtils';
import ComboBoxFetch from '.';

afterEach(cleanup);

describe('<ComboBoxFetch />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-combo-box-fetch';
    const textInputId = 'fel-text-input';
    const inputId = 'userName';
    const label = 'user name';
    const optionItems = [
        { id: 'foo', value: 'abc' },
        { id: 'bar', value: 'abe' },
        { id: 'baz', value: 'cam' },
    ];
    const handleComboOnOptionSelect = jest.fn();
    const handleComboTextInputOnChange = jest.fn();
    const fetchData = jest.fn();
    const isFetching = false;
    const isFetchFulfilled = false;
    const isFetchRejected = false;
    const isPayloadValid = false;
    const fetchError = '';

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ComboBoxFetch
                inputId={inputId}
                label={label}
                optionItems={optionItems}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
                handleComboTextInputOnChange={handleComboTextInputOnChange}
                fetchData={fetchData}
                isFetching={isFetching}
                isFetchFulfilled={isFetchFulfilled}
                isFetchRejected={isFetchRejected}
                isPayloadValid={isPayloadValid}
                fetchError={fetchError}
            />,
        );

        const comboBox = getByTestId(componentId);
        const comboBoxLabel = getByText(label);

        expect(comboBox).toBeTruthy();
        expect(comboBoxLabel).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText, queryByDisplayValue } = render(
            <ComboBoxFetch
                inputId={inputId}
                label={label}
                optionItems={optionItems}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
                handleComboTextInputOnChange={handleComboTextInputOnChange}
                fetchData={fetchData}
                isFetching={isFetching}
                isFetchFulfilled={isFetchFulfilled}
                isFetchRejected={isFetchRejected}
                isPayloadValid={isPayloadValid}
                fetchError={fetchError}
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
        const { getByTestId, getByText, queryByDisplayValue } = render(
            <ComboBoxFetch
                inputId={inputId}
                label={label}
                optionItems={optionItems}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
                handleComboTextInputOnChange={handleComboTextInputOnChange}
                fetchData={fetchData}
                isFetching={isFetching}
                isFetchFulfilled={true}
                isFetchRejected={isFetchRejected}
                isPayloadValid={true}
                fetchError={fetchError}
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
        const { getByTestId, queryByText, getByDisplayValue } = render(
            <ComboBoxFetch
                inputId={inputId}
                label={label}
                optionItems={optionItems}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
                handleComboTextInputOnChange={handleComboTextInputOnChange}
                fetchData={fetchData}
                isFetching={isFetching}
                isFetchFulfilled={true}
                isFetchRejected={isFetchRejected}
                isPayloadValid={true}
                fetchError={fetchError}
            />,
        );

        const textInput = getByTestId(textInputId);
        const textInputButton = getByTestId('fel-display-options-btn');

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

        fireEvent.mouseDown(document);
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <ComboBoxFetch
                inputId={inputId}
                label={label}
                optionItems={optionItems}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
                handleComboTextInputOnChange={handleComboTextInputOnChange}
                fetchData={fetchData}
                isDisabled={false}
                isFetching={true}
                isFetchFulfilled={isFetchFulfilled}
                isFetchRejected={isFetchRejected}
                isPayloadValid={isPayloadValid}
                fetchError={fetchError}
            />,
        );

        const textInput = getByTestId(textInputId);

        expect(textInput).toBeTruthy();

        fireEvent.click(textInput);

        expect(textInput).toBeDisabled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <ComboBoxFetch
                inputId={inputId}
                label={label}
                optionItems={optionItems}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
                handleComboTextInputOnChange={handleComboTextInputOnChange}
                fetchData={fetchData}
                isDisabled={false}
                isFetching={isFetching}
                isFetchFulfilled={isFetchFulfilled}
                isFetchRejected={true}
                isPayloadValid={isPayloadValid}
                fetchError={fetchError}
            />,
        );

        const textInput = getByTestId(textInputId);

        expect(textInput).toBeTruthy();

        fireEvent.click(textInput);

        expect(textInput).toBeDisabled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <ComboBoxFetch
                inputId={inputId}
                label={label}
                optionItems={optionItems}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
                handleComboTextInputOnChange={handleComboTextInputOnChange}
                fetchData={fetchData}
                isDisabled={false}
                isFetching={isFetching}
                isFetchFulfilled={true}
                isFetchRejected={isFetchRejected}
                isPayloadValid={false}
                fetchError={fetchError}
            />,
        );

        const textInput = getByTestId(textInputId);

        expect(textInput).toBeTruthy();

        fireEvent.click(textInput);

        expect(textInput).toBeDisabled();
    });
});
