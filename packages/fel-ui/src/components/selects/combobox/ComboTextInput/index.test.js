import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ComboTextInput from '.';

afterEach(cleanup);

describe('<ComboTextInput />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-combo-text-input-container';
    const inputId = 'first-name';
    const label = 'first name';
    const value = 'John';
    const textInputRef = { current: 'foo' };

    const handleTextInputOnChange = jest.fn();
    const handleTextInputOnClick = jest.fn();
    const handleOnClickTextInputButton = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText, getByDisplayValue } = render(
            <ComboTextInput
                inputId={inputId}
                label={label}
                value={value}
                handleTextInputOnChange={handleTextInputOnChange}
                handleTextInputOnClick={handleTextInputOnClick}
                handleOnClickTextInputButton={handleOnClickTextInputButton}
                textInputRef={textInputRef}
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

        fireEvent.change(textInput, { target: { value: 'foo' } });

        expect(handleTextInputOnChange).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ComboTextInput
                inputId={inputId}
                label={label}
                value=""
                handleTextInputOnChange={handleTextInputOnChange}
                handleTextInputOnClick={handleTextInputOnClick}
                handleOnClickTextInputButton={handleOnClickTextInputButton}
                textInputRef={textInputRef}
                isOptionsHidden={false}
            />,
        );

        const component = getByTestId(componentId);
        const textInput = getByTestId('fel-text-input');
        const textInputLabel = getByText(label);
        const displayOptionsButton = getByTestId('fel-display-options-btn');

        expect(component).toBeTruthy();
        expect(textInput).toBeTruthy();
        expect(textInputLabel).toBeInTheDocument();
        expect(textInput).not.toBeDisabled();
        expect(displayOptionsButton).toBeTruthy();
        expect(displayOptionsButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'sort-up',
        );
    });

    test(`${testMsg} with provided props`, () => {
        const err = 'some error';

        const { getByTestId, getByText } = render(
            <ComboTextInput
                inputId={inputId}
                label={label}
                value={value}
                error={err}
                handleTextInputOnChange={handleTextInputOnChange}
                handleTextInputOnClick={handleTextInputOnClick}
                handleOnClickTextInputButton={handleOnClickTextInputButton}
                textInputRef={textInputRef}
            />,
        );

        const component = getByTestId(componentId);
        const textInput = getByTestId('fel-text-input');
        const textInputLabel = getByText(label);
        const error = getByText(err);

        expect(component).toBeTruthy();
        expect(textInput).toBeTruthy();
        expect(textInput).toHaveClass('error');
        expect(textInputLabel).toBeInTheDocument();
        expect(textInputLabel).toHaveClass('error');
        expect(textInput).not.toBeDisabled();
        expect(error).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ComboTextInput
                inputId={inputId}
                label={label}
                value={value}
                isDisabled={true}
                handleTextInputOnChange={handleTextInputOnChange}
                handleTextInputOnClick={handleTextInputOnClick}
                handleOnClickTextInputButton={handleOnClickTextInputButton}
                textInputRef={textInputRef}
            />,
        );

        const component = getByTestId(componentId);
        const textInputWrapper = component.childNodes[0];
        const textInput = getByTestId('fel-text-input');
        const textInputLabel = getByText(label);

        expect(component).toBeTruthy();
        expect(textInputWrapper).toHaveClass('disabled');
        expect(textInput).toBeTruthy();
        expect(textInput).not.toHaveClass('error');
        expect(textInputLabel).toBeInTheDocument();
        expect(textInputLabel).not.toHaveClass('error');
        expect(textInput).toBeDisabled();

        userEvent.type(textInput, 'hi');

        expect(handleTextInputOnChange).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <ComboTextInput
                inputId={inputId}
                label={label}
                value={value}
                handleTextInputOnChange={handleTextInputOnChange}
                handleTextInputOnClick={handleTextInputOnClick}
                handleOnClickTextInputButton={handleOnClickTextInputButton}
                textInputRef={textInputRef}
                isOptionsHidden={true}
            />,
        );

        const component = getByTestId(componentId);
        const textInput = getByTestId('fel-text-input');
        const displayOptionsButton = getByTestId('fel-display-options-btn');

        expect(component).toBeTruthy();
        expect(textInput).toBeTruthy();
        expect(displayOptionsButton).toBeTruthy();
        expect(textInput).not.toBeDisabled();
        expect(displayOptionsButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'sort-down',
        );

        fireEvent.click(textInput);

        expect(handleTextInputOnClick).toHaveBeenCalled();
    });
});
