import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import PreviousButton from '.';

afterEach(cleanup);

describe('<PreviousButton />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-paginator-previous-btn';
    const handleOnClickPrevious = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <PreviousButton
                handleOnClickPrevious={handleOnClickPrevious}
                isDisabled={false}
            />,
        );

        const previousButton = getByTestId(componentId);

        expect(previousButton).toBeTruthy();
        expect(previousButton).not.toHaveClass('disabled');
        expect(previousButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'chevron-left',
        );

        fireEvent.click(previousButton);
        expect(handleOnClickPrevious).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <PreviousButton
                handleOnClickPrevious={handleOnClickPrevious}
                isDisabled={true}
            />,
        );

        const previousButton = getByTestId(componentId);

        expect(previousButton).toBeTruthy();
        expect(previousButton).toHaveClass('disabled');
        expect(previousButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'chevron-left',
        );

        fireEvent.click(previousButton);
        expect(handleOnClickPrevious).not.toHaveBeenCalled();
    });
});
