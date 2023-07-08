import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import DisplayedOption from '.';

afterEach(cleanup);

describe('<DisplayedOption />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-select-displayed-option';
    const label = 'country';
    const currentOptionId = 'foo';
    const optionItems = [
        { id: 'foo', value: 'abc' },
        { id: 'bar', value: 'xyz' },
    ];
    const handleOnClickSelect = jest.fn();
    const handleOnKeyPressSelect = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <DisplayedOption
                label={label}
                currentOptionId={currentOptionId}
                optionItems={optionItems}
                handleOnClickSelect={handleOnClickSelect}
                handleOnKeyPressSelect={handleOnKeyPressSelect}
            />,
        );

        const displayedOption = getByTestId(componentId);
        const selectLabel = getByText(label);
        const displayedValue = getByText('abc');

        expect(displayedValue).toBeTruthy();
        expect(displayedValue).not.toHaveClass('disabled');

        expect(selectLabel).toBeInTheDocument();
        expect(selectLabel).not.toHaveClass('disabled');

        fireEvent.click(displayedOption);
        expect(handleOnClickSelect).toBeCalled();

        fireEvent.keyPress(displayedOption, { key: 'Enter', charCode: 13 });
        expect(handleOnKeyPressSelect).toBeCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <DisplayedOption
                label={label}
                currentOptionId={currentOptionId}
                optionItems={optionItems}
                isDisabled={true}
                handleOnClickSelect={handleOnClickSelect}
                handleOnKeyPressSelect={handleOnKeyPressSelect}
            />,
        );

        const displayedOption = getByTestId(componentId);
        const selectLabel = getByText(label);
        const displayedValue = getByText('abc');

        expect(displayedOption).toBeTruthy();
        expect(displayedOption).toHaveClass('disabled');
        expect(displayedOption).toHaveAttribute('tabindex', '-1');

        expect(displayedValue).toBeInTheDocument();

        expect(selectLabel).toBeInTheDocument();
        expect(selectLabel).toHaveClass('disabled');

        fireEvent.click(displayedOption);
        expect(handleOnClickSelect).not.toBeCalled();

        fireEvent.keyPress(displayedOption, { key: 'Enter', charCode: 13 });
        expect(handleOnKeyPressSelect).not.toBeCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText, queryByText } = render(
            <DisplayedOption
                label={label}
                currentOptionId="123"
                optionItems={optionItems}
                handleOnClickSelect={handleOnClickSelect}
                handleOnKeyPressSelect={handleOnKeyPressSelect}
            />,
        );

        const displayedOption = getByTestId(componentId);
        const selectLabel = getByText(label);
        const value1 = queryByText('abc');
        const value2 = queryByText('xyz');

        expect(displayedOption).toBeTruthy();
        expect(selectLabel).toBeInTheDocument();
        expect(value1).toBeNull();
        expect(value2).toBeNull();

        fireEvent.click(displayedOption);
        expect(handleOnClickSelect).toBeCalled();

        fireEvent.keyPress(displayedOption, { key: 'Enter', charCode: 13 });
        expect(handleOnKeyPressSelect).toBeCalled();
    });
});
