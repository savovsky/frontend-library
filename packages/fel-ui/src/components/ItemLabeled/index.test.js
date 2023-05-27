import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ItemLabeled from '.';

afterEach(cleanup);

describe('<ItemLabeled />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-item-labeled';
    const linkId = 'fel-item-link';

    const label = 'name';
    const value = 'John Doe';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, queryByTestId, getByText } = render(
            <ItemLabeled label={label} value={value} />,
        );

        const component = getByTestId(componentId);
        const link = queryByTestId(linkId);
        const itemLabel = getByText(`${label}:`);
        const itemValue = getByText(value);

        expect(component).toBeTruthy();
        expect(itemLabel).toBeInTheDocument();
        expect(itemValue).toBeInTheDocument();
        expect(itemValue).not.toHaveClass('accent');
        expect(itemValue).not.toHaveClass('mockup');
        expect(link).toBeNull();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, queryByTestId, getByText } = render(
            <ItemLabeled label={label} value={value} isAccent={true} />,
        );

        const component = getByTestId(componentId);
        const link = queryByTestId(linkId);
        const itemLabel = getByText(`${label}:`);
        const itemValue = getByText(value);

        expect(component).toBeTruthy();
        expect(itemLabel).toBeInTheDocument();
        expect(itemValue).toBeInTheDocument();
        expect(itemValue).toHaveClass('accent');
        expect(itemValue).not.toHaveClass('mockup');
        expect(link).toBeNull();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, queryByTestId, getByText } = render(
            <ItemLabeled label={label} value={value} isMockedData={true} />,
        );

        const component = getByTestId(componentId);
        const link = queryByTestId(linkId);
        const itemLabel = getByText(`${label}:`);
        const itemValue = getByText(value);

        expect(component).toBeTruthy();
        expect(itemLabel).toBeInTheDocument();
        expect(itemValue).toBeInTheDocument();
        expect(itemValue).not.toHaveClass('accent');
        expect(itemValue).toHaveClass('mockup');
        expect(link).toBeNull();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, queryByTestId, getByText } = render(
            <ItemLabeled
                label={label}
                value={value}
                href="https://google.com"
            />,
        );

        const component = getByTestId(componentId);
        const link = queryByTestId(linkId);
        const itemLabel = getByText(`${label}:`);
        const itemValue = getByText(value);

        expect(component).toBeTruthy();
        expect(itemLabel).toBeInTheDocument();
        expect(itemValue).toBeInTheDocument();
        expect(itemValue).not.toHaveClass('accent');
        expect(itemValue).not.toHaveClass('mockup');
        expect(link).toBeTruthy();
    });
});
