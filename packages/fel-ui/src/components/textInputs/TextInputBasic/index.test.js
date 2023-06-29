import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextInputBasic from '.';

afterEach(cleanup);

describe('<TextInputBasic />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-text-input-basic';
    const inputId = 'phone-number';
    const label = 'phone number';
    const value = '12345';
    const placeholder = 'phone';
    const validationError = 'error message';
    const handleTextInputOnBlur = jest.fn();
    const handleTextInputOnChange = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText, getByDisplayValue } = render(
            <TextInputBasic
                inputId={inputId}
                label={label}
                value={value}
                handleTextInputOnBlur={handleTextInputOnBlur}
                handleTextInputOnChange={handleTextInputOnChange}
            />,
        );

        const component = getByTestId(componentId);
        const textInput = getByTestId('fel-text-input');
        const textInputLabel = getByText(label);
        const textInputValue = getByDisplayValue(value);

        expect(component).toBeTruthy();
        expect(textInput).toBeTruthy();
        expect(textInputLabel).toBeInTheDocument();
        expect(textInputValue).toBeInTheDocument();
        expect(textInput).not.toBeDisabled();

        const newValue = 'xyz';

        fireEvent.change(textInput, { target: { value: newValue } });

        expect(handleTextInputOnChange).toBeCalledWith(inputId, newValue);

        fireEvent.blur(textInput);

        expect(handleTextInputOnBlur).toBeCalledWith(inputId);
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText, getByPlaceholderText } = render(
            <TextInputBasic
                inputId={inputId}
                label={label}
                value=""
                placeholder={placeholder}
                handleTextInputOnBlur={handleTextInputOnBlur}
                handleTextInputOnChange={handleTextInputOnChange}
            />,
        );

        const component = getByTestId(componentId);
        const textInput = getByTestId('fel-text-input');
        const textInputLabel = getByText(label);
        const textInputPlaceholder = getByPlaceholderText(placeholder);

        expect(component).toBeTruthy();
        expect(textInput).toBeTruthy();
        expect(textInputLabel).toBeInTheDocument();
        expect(textInputPlaceholder).toBeInTheDocument();
        expect(textInput).not.toBeDisabled();

        const newValue = 'xyz';

        fireEvent.change(textInput, { target: { value: newValue } });

        expect(handleTextInputOnChange).toBeCalledWith(inputId, newValue);

        fireEvent.blur(textInput);
        fireEvent.mouseDown(document);
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <TextInputBasic
                inputId={inputId}
                label={label}
                value={value}
                validationError={validationError}
            />,
        );

        const component = getByTestId(componentId);
        const textInput = getByTestId('fel-text-input');
        const textInputLabel = getByText(label);

        expect(component).toBeTruthy();
        expect(textInput).toBeTruthy();
        expect(textInput).toHaveClass('error');
        expect(textInputLabel).toBeInTheDocument();
        expect(textInput).toHaveClass('error');
        expect(textInput).not.toBeDisabled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <TextInputBasic
                inputId={inputId}
                label={label}
                value={value}
                isDisabled={true}
                handleTextInputOnChange={handleTextInputOnChange}
            />,
        );

        const component = getByTestId(componentId);
        const textInputWrapper = component.childNodes[0];
        const textInput = getByTestId('fel-text-input');
        const textInputLabel = getByText(label);

        expect(component).toBeTruthy();
        expect(textInputWrapper).toHaveClass('disabled');
        expect(textInput).toBeTruthy();
        expect(textInputLabel).toBeInTheDocument();
        expect(textInput).not.toHaveClass('error');
        expect(textInput).toBeDisabled();

        userEvent.type(textInput, 'hi');

        expect(handleTextInputOnChange).not.toHaveBeenCalled();
    });
});
