import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckBoxBasic from '.';

afterEach(cleanup);

describe('<CheckBoxBasic />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-check-box-basic';
    const inputId = 'check-box';
    const handleOnClick = jest.fn();

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId } = render(
            <CheckBoxBasic inputId={inputId} handleOnClick={handleOnClick} />,
        );

        const checkbox = getByTestId(componentId);
        const checkboxInput = checkbox.querySelector('input');

        expect(checkbox).toBeTruthy();
        expect(checkbox).not.toHaveClass('disabled');
        expect(checkbox.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'square',
        );
        expect(checkboxInput.checked).toEqual(false);

        fireEvent.click(checkboxInput);

        expect(handleOnClick).toHaveBeenCalled();
        expect(checkbox.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'check-square',
        );
        expect(checkboxInput.checked).toEqual(true);
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <CheckBoxBasic
                inputId={inputId}
                handleOnClick={handleOnClick}
                isSelected={true}
                isDisabled={true}
            />,
        );

        const checkbox = getByTestId(componentId);
        const checkboxInput = checkbox.querySelector('input');

        expect(checkbox).toBeTruthy();
        expect(checkbox).toHaveClass('disabled');
        expect(checkbox.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'check-square',
        );
        expect(checkboxInput.checked).toEqual(true);

        userEvent.click(checkboxInput);

        expect(handleOnClick).not.toHaveBeenCalled();
        expect(checkbox.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'check-square',
        );
        expect(checkboxInput.checked).toEqual(true);
    });
});
