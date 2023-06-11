import React from 'react';
import { render, cleanup } from '@testing-library/react';

import CheckBoxLabeled from '.';

afterEach(cleanup);

describe('<CheckBoxLabeled />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-check-box-labeled';
    const inputId = 'check-box';
    const label = 'check me';
    const handleOnClick = jest.fn();

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <CheckBoxLabeled
                label={label}
                inputId={inputId}
                handleOnClick={handleOnClick}
            />,
        );

        const component = getByTestId(componentId);
        const labelTag = component.querySelector('label');
        const checkboxLabel = getByText(label);

        expect(component).toBeTruthy();
        expect(labelTag).not.toHaveClass('disabled');
        expect(checkboxLabel).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <CheckBoxLabeled
                label={label}
                inputId={inputId}
                handleOnClick={handleOnClick}
                isDisabled={true}
            />,
        );

        const component = getByTestId(componentId);
        const labelTag = component.querySelector('label');
        const checkboxLabel = getByText(label);

        expect(component).toBeTruthy();
        expect(labelTag).toHaveClass('disabled');
        expect(checkboxLabel).toBeInTheDocument();
    });
});
