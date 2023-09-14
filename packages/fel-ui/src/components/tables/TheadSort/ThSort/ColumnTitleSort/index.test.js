import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import ColumnTitleSort from '.';

afterEach(cleanup);

describe('<ColumnTitleSort />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-sort-table-column-btn';
    const columnId = 'foo';
    const title = 'bar';
    const handleOnClickSort = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const isSortAscending = true;
        const sortedColumnId = 'foo';

        const { getByTestId, getByText } = render(
            <ColumnTitleSort
                columnId={columnId}
                title={title}
                isSortAscending={isSortAscending}
                sortedColumnId={sortedColumnId}
                handleOnClickSort={handleOnClickSort}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(title);

        expect(button).toBeTruthy();
        expect(buttonLabel).toBeInTheDocument();
        expect(button.querySelectorAll('svg')[0]).not.toHaveClass('active');
        expect(button.querySelectorAll('svg')[1]).toHaveClass('active');

        fireEvent.click(button);

        expect(handleOnClickSort).toHaveBeenCalledWith(columnId);
    });

    test(`${testMsg} with provided props`, () => {
        const isSortAscending = false;
        const sortedColumnId = 'foo';

        const { getByTestId, getByText } = render(
            <ColumnTitleSort
                columnId={columnId}
                title={title}
                isSortAscending={isSortAscending}
                sortedColumnId={sortedColumnId}
                handleOnClickSort={handleOnClickSort}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(title);

        expect(button).toBeTruthy();
        expect(buttonLabel).toBeInTheDocument();
        expect(button.querySelectorAll('svg')[0]).toHaveClass('active');
        expect(button.querySelectorAll('svg')[1]).not.toHaveClass('active');

        fireEvent.click(button);

        expect(handleOnClickSort).toHaveBeenCalledWith(columnId);
    });
});
