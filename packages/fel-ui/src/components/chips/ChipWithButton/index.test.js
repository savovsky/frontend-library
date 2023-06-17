import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import ChipWithButton from '.';

afterEach(cleanup);

describe('<ChipWithButton />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-chip-with-button';
    const buttonTestId = 'fel-button-icon';
    const content = 'foo';
    const handleOnClickBtn = jest.fn();

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ChipWithButton content={content} />,
        );

        const component = getByTestId(componentId);
        const button = getByTestId(buttonTestId);
        const label = getByText(content);

        expect(component).toBeTruthy();
        expect(button).toBeTruthy();
        expect(label).toBeInTheDocument();
        expect(button).not.toHaveClass('disabled');

        fireEvent.click(button);

        expect(handleOnClickBtn).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ChipWithButton
                content={content}
                handleOnClickBtn={handleOnClickBtn}
            />,
        );

        const component = getByTestId(componentId);
        const button = getByTestId(buttonTestId);
        const label = getByText(content);

        expect(component).toBeTruthy();
        expect(button).toBeTruthy();
        expect(label).toBeInTheDocument();
        expect(button).not.toHaveClass('disabled');

        fireEvent.click(button);

        expect(handleOnClickBtn).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ChipWithButton
                content={content}
                handleOnClickBtn={handleOnClickBtn}
                isDisabled={true}
            />,
        );

        const component = getByTestId(componentId);
        const button = getByTestId(buttonTestId);
        const label = getByText(content);

        expect(component).toBeTruthy();
        expect(button).toBeTruthy();
        expect(label).toBeInTheDocument();
        expect(button).toHaveClass('disabled');

        fireEvent.click(button);

        expect(handleOnClickBtn).not.toHaveBeenCalled();
    });
});
