import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SwitchLabeled from '.';

afterEach(cleanup);

describe('<SwitchLabeled />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-switch-labeled';
    const inputId = 'switch-labeled';
    const label = 'Click me';
    const handleOnClick = jest.fn();

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <SwitchLabeled
                label={label}
                inputId={inputId}
                handleOnClick={handleOnClick}
            />,
        );

        const component = getByTestId(componentId);
        const labelTag = component.querySelector('label');
        const switchLabel = getByText(label);

        expect(component).toBeTruthy();
        expect(labelTag).not.toHaveClass('disabled');
        expect(switchLabel).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <SwitchLabeled
                label={label}
                inputId={inputId}
                handleOnClick={handleOnClick}
                isDisabled={true}
            />,
        );

        const component = getByTestId(componentId);
        const labelTag = component.querySelector('label');
        const switchLabel = getByText(label);

        expect(component).toBeTruthy();
        expect(labelTag).toHaveClass('disabled');
        expect(switchLabel).toBeInTheDocument();
    });
});
