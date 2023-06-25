import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RadioButtonsBasic from '.';

afterEach(cleanup);

describe('<RadioButtonsBasic />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-radio-button-basic';
    const inputId = 'radio-button-one';
    const handleOnClick = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <RadioButtonsBasic
                inputId={inputId}
                handleOnClick={handleOnClick}
                isSelected={false}
            />,
        );

        const radioButton = getByTestId(componentId);
        const radioButtonInput = radioButton.querySelector('input');

        expect(radioButton).toBeTruthy();
        expect(radioButton).not.toHaveClass('disabled');
        expect(radioButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'circle',
        );
        expect(radioButtonInput.checked).toEqual(false);

        fireEvent.click(radioButtonInput);

        expect(handleOnClick).toHaveBeenCalled();
        expect(radioButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'dot-circle',
        );
        expect(radioButtonInput.checked).toEqual(true);
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <RadioButtonsBasic
                inputId={inputId}
                handleOnClick={handleOnClick}
                isSelected={true}
                isDisabled={true}
            />,
        );

        const radioButton = getByTestId(componentId);
        const radioButtonInput = radioButton.querySelector('input');

        expect(radioButton).toBeTruthy();
        expect(radioButton).toHaveClass('disabled');
        expect(radioButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'dot-circle',
        );
        expect(radioButtonInput.checked).toEqual(true);

        userEvent.click(radioButtonInput);

        expect(handleOnClick).not.toHaveBeenCalled();
        expect(radioButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'dot-circle',
        );
        expect(radioButtonInput.checked).toEqual(true);
    });
});
