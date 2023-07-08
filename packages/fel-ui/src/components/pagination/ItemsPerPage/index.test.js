import React from 'react';
import { render, cleanup } from '@testing-library/react';

import str from '../../../utils/stringsUtils';
import ItemsPerPage from '.';

afterEach(cleanup);

describe('<ItemsPerPage />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-items-per-page';
    const currentPageSizeId = 'foo';
    const text = `${str.rows}`;
    const pageSizeOptions = [
        { id: 'foo', value: 'abc' },
        { id: 'bar', value: 'xyz' },
        { id: 'baz', value: 'com' },
    ];
    const handleSelectedOption = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ItemsPerPage
                pageSizeOptions={pageSizeOptions}
                currentPageSizeId={currentPageSizeId}
                handleSelectedOption={handleSelectedOption}
            />,
        );

        const component = getByTestId(componentId);
        const displayedText = getByText(text);
        const displayedOption = getByText('abc');

        expect(component).toBeTruthy();
        expect(displayedText).toBeInTheDocument();
        expect(displayedOption).toBeInTheDocument();
    });
});
