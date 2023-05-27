import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ItemLabeledColored from '.';

afterEach(cleanup);

describe('<ItemLabeled />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-item-labeled-colored';
    const labelClassName = 'fel-foo-bar';
    const labelColor = '#aaa';

    const label = 'amount';
    const value = '$5.00';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ItemLabeledColored label={label} value={value} />,
        );

        const component = getByTestId(componentId);
        const itemLabel = getByText(`${label}:`);
        const itemValue = getByText(value);

        expect(component).toBeTruthy();
        expect(itemLabel).toBeInTheDocument();
        expect(itemValue).toBeInTheDocument();
        expect(itemValue).not.toHaveClass('mockup');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ItemLabeledColored
                label={label}
                value={value}
                labelClassName={labelClassName}
            />,
        );

        const component = getByTestId(componentId);
        const itemLabel = getByText(`${label}:`);
        const itemValue = getByText(value);

        expect(component).toBeTruthy();
        expect(itemLabel).toBeInTheDocument();
        expect(itemValue).toBeInTheDocument();
        expect(itemValue).toHaveClass(labelClassName);
        expect(itemValue).not.toHaveStyle({ color: labelColor });
        expect(itemValue).not.toHaveClass('mockup');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ItemLabeledColored
                label={label}
                value={value}
                labelColor={labelColor}
            />,
        );

        const component = getByTestId(componentId);
        const itemLabel = getByText(`${label}:`);
        const itemValue = getByText(value);

        expect(component).toBeTruthy();
        expect(itemLabel).toBeInTheDocument();
        expect(itemValue).toBeInTheDocument();
        expect(itemValue).not.toHaveClass(labelClassName);
        expect(itemValue).toHaveStyle({ color: labelColor });
        expect(itemValue).not.toHaveClass('mockup');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ItemLabeledColored
                label={label}
                value={value}
                isMockedData={true}
            />,
        );

        const component = getByTestId(componentId);
        const itemLabel = getByText(`${label}:`);
        const itemValue = getByText(value);

        expect(component).toBeTruthy();
        expect(itemLabel).toBeInTheDocument();
        expect(itemValue).toBeInTheDocument();
        expect(itemValue).not.toHaveClass(labelClassName);
        expect(itemValue).not.toHaveStyle({ color: labelColor });
        expect(itemValue).toHaveClass('mockup');
    });

    test(`${testMsg} with provided props`, () => {
        const indicatorPercentage = '12.73';

        const { getByTestId, getByText } = render(
            <ItemLabeledColored
                label={label}
                value={value}
                indicatorPercentage={indicatorPercentage}
            />,
        );

        const component = getByTestId(componentId);
        const itemLabel = getByText(`${label}:`);
        const itemValue = getByText(value);
        const percentage = getByText(`${indicatorPercentage}%`);

        expect(component).toBeTruthy();
        expect(itemLabel).toBeInTheDocument();
        expect(itemValue).toBeInTheDocument();
        expect(percentage).toBeInTheDocument();
        expect(itemValue).not.toHaveClass(labelClassName);
        expect(itemValue).not.toHaveStyle({ color: labelColor });
        expect(itemValue).not.toHaveClass('mockup');
    });
});
