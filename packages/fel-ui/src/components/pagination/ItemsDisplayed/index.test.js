import React from 'react';
import { render, cleanup } from '@testing-library/react';

import str from '../../../utils/stringsUtils';
import ItemsDisplayed from '.';

afterEach(cleanup);

describe('<ItemsDisplayed />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-items-displayed';

    test(`${testMsg} with provided props`, () => {
        const fromItem = 1;
        const toItem = 5;
        const totalItems = 10;
        const text = `${str.viewing} ${fromItem}-${toItem} ${str.of} ${totalItems}`;

        const { getByTestId, getByText } = render(
            <ItemsDisplayed
                fromItem={fromItem}
                toItem={toItem}
                totalItems={totalItems}
            />,
        );

        const component = getByTestId(componentId);
        const displayedText = getByText(text);

        expect(component).toBeTruthy();
        expect(displayedText).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const fromItem = 1;
        const toItem = 50;
        const totalItems = 10;
        const text = `${str.viewing} ${fromItem}-${totalItems} ${str.of} ${totalItems}`;

        const { getByTestId, getByText } = render(
            <ItemsDisplayed
                fromItem={fromItem}
                toItem={toItem}
                totalItems={totalItems}
            />,
        );

        const component = getByTestId(componentId);
        const displayedText = getByText(text);

        expect(component).toBeTruthy();
        expect(displayedText).toBeInTheDocument();
    });
});
