import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import ButtonBack from '.';

afterEach(cleanup);

describe('<ButtonBack />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-button-back';
    const handleOnClick = jest.fn();
    const defaultLabel = 'back';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBack handleOnClick={handleOnClick} />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(defaultLabel);

        expect(button).toBeTruthy();
        expect(buttonLabel).toBeInTheDocument();
        expect(button).not.toHaveClass('disabled');

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const label = 'foo';

        const { getByTestId, getByText, queryByText } = render(
            <ButtonBack handleOnClick={handleOnClick} label={label} />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(label);
        const buttonDefaultLabel = queryByText(defaultLabel);

        expect(button).toBeTruthy();
        expect(buttonLabel).toBeInTheDocument();
        expect(buttonDefaultLabel).not.toBeInTheDocument();
        expect(button).not.toHaveClass('disabled');

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBack handleOnClick={handleOnClick} isDisabled={true} />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(defaultLabel);

        expect(button).toBeTruthy();
        expect(buttonLabel).toBeInTheDocument();
        expect(button).toHaveClass('disabled');

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });
});
