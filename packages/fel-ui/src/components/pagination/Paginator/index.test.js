import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Paginator from '.';

afterEach(cleanup);

describe('<Paginator />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-paginator';
    const previousButtonId = 'fel-paginator-previous-btn';
    const nextButtonId = 'fel-paginator-next-btn';
    const handleOnSelect = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const totalPagesCount = 10;
        const pageIndex = 0;

        const { getByTestId, getByText } = render(
            <Paginator
                totalPagesCount={totalPagesCount}
                pageIndex={pageIndex}
                handleOnSelect={handleOnSelect}
            />,
        );

        const component = getByTestId(componentId);
        const previousButton = getByTestId(previousButtonId);
        const nextButton = getByTestId(nextButtonId);
        const pageButton2 = getByText('2');

        expect(component).toBeTruthy();
        expect(previousButton).toBeTruthy();
        expect(nextButton).toBeTruthy();
        expect(pageButton2).toBeTruthy();

        expect(getByText(totalPagesCount)).toBeInTheDocument();
        expect(getByText(pageIndex + 1)).toBeInTheDocument();

        fireEvent.click(nextButton);

        expect(handleOnSelect).toHaveBeenCalledWith(1);

        fireEvent.click(previousButton);

        expect(handleOnSelect).toHaveBeenCalledWith(0);

        fireEvent.click(pageButton2);

        expect(handleOnSelect).toHaveBeenCalledWith(1);
    });

    test(`${testMsg} with provided props`, () => {
        const totalPagesCount = 1;
        const pageIndex = 0;

        const { getByTestId, getByText } = render(
            <Paginator
                totalPagesCount={totalPagesCount}
                pageIndex={pageIndex}
                handleOnSelect={handleOnSelect}
            />,
        );

        const component = getByTestId(componentId);
        const previousButton = getByTestId(previousButtonId);
        const nextButton = getByTestId(nextButtonId);
        const pageButton1 = getByText('1');

        expect(component).toBeTruthy();
        expect(previousButton).toBeTruthy();
        expect(nextButton).toBeTruthy();
        expect(pageButton1).toBeTruthy();

        expect(getByText(totalPagesCount)).toBeInTheDocument();
        expect(getByText(pageIndex + 1)).toBeInTheDocument();

        fireEvent.click(nextButton);

        expect(handleOnSelect).not.toHaveBeenCalled();

        fireEvent.click(previousButton);

        expect(handleOnSelect).not.toHaveBeenCalled();

        fireEvent.click(pageButton1);

        expect(handleOnSelect).not.toHaveBeenCalled();
    });
});
