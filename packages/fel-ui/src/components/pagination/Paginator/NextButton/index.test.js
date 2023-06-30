import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import NextButton from '.';

afterEach(cleanup);

describe('<NextButton />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-paginator-next-btn';
    const handleOnClickNext = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <NextButton
                handleOnClickNext={handleOnClickNext}
                isDisabled={false}
            />,
        );

        const nextButton = getByTestId(componentId);

        expect(nextButton).toBeTruthy();
        expect(nextButton).not.toHaveClass('disabled');
        expect(nextButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'chevron-right',
        );

        fireEvent.click(nextButton);
        expect(handleOnClickNext).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <NextButton
                handleOnClickNext={handleOnClickNext}
                isDisabled={true}
            />,
        );

        const nextButton = getByTestId(componentId);

        expect(nextButton).toBeTruthy();
        expect(nextButton).toHaveClass('disabled');
        expect(nextButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'chevron-right',
        );

        fireEvent.click(nextButton);
        expect(handleOnClickNext).not.toHaveBeenCalled();
    });
});
