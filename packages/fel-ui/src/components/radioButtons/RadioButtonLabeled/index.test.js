import React from 'react';
import { render, cleanup } from '@testing-library/react';

import CheckBoxLabeled from '.';

afterEach(cleanup);

describe('<CheckBoxLabeled />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-radio-button-labeled';
    const inputId = 'radio-button-one';
    const label = 'Choose me';
    const handleOnClick = jest.fn();

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <CheckBoxLabeled
                content={label}
                inputId={inputId}
                handleOnClick={handleOnClick}
                isSelected={false}
            />,
        );

        const radioButton = getByTestId(componentId);
        const labelTag = radioButton.querySelector('label');
        const radioButtonLabel = getByText(label);

        expect(radioButton).toBeTruthy();
        expect(labelTag).not.toHaveClass('disabled');
        expect(radioButtonLabel).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <CheckBoxLabeled
                content={label}
                inputId={inputId}
                handleOnClick={handleOnClick}
                isSelected={true}
                isDisabled={true}
            />,
        );

        const radioButton = getByTestId(componentId);
        const labelTag = radioButton.querySelector('label');
        const radioButtonLabel = getByText(label);

        expect(radioButton).toBeTruthy();
        expect(labelTag).toHaveClass('disabled');
        expect(radioButtonLabel).toBeInTheDocument();
    });
});
