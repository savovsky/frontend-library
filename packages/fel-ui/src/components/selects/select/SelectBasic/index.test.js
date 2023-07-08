import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SelectBasic from '.';

afterEach(cleanup);

describe('<SelectBasic />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-select-basic';
    const selectId = 'userName';
    const label = 'user name';
    const optionsId = 'fel-select-options';
    const optionItems = [
        { id: 'foo', value: 'abc' },
        { id: 'bar', value: 'xyz' },
        { id: 'baz', value: 'com' },
    ];
    const handleSelectedOption = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const currentOptionId = 'foo';

        const { getByTestId, getByText } = render(
            <SelectBasic
                selectId={selectId}
                label={label}
                optionItems={optionItems}
                currentOptionId={currentOptionId}
                handleSelectedOption={handleSelectedOption}
            />,
        );

        const component = getByTestId(componentId);
        const displayedOption = getByTestId('fel-select-displayed-option');
        const selectLabel = getByText(label);
        const displayedValue = getByText('abc');

        expect(component).toBeTruthy();
        expect(displayedOption).toBeTruthy();
        expect(selectLabel).toBeInTheDocument();
        expect(displayedValue).toBeInTheDocument();

        fireEvent.click(displayedOption);

        const value2 = getByText('xyz');

        fireEvent.click(value2);

        expect(handleSelectedOption).toBeCalledWith(selectId, 'bar');

        fireEvent.keyPress(displayedOption, {
            key: 'Enter',
            charCode: 13,
        });

        expect(handleSelectedOption).toBeCalledWith(selectId, 'bar');

        const value3 = getByText('com');

        userEvent.tab();

        fireEvent.keyPress(value3, {
            key: 'Enter',
            charCode: 13,
        });

        expect(handleSelectedOption).toBeCalledWith(selectId, 'baz');
    });

    test(`${testMsg} with provided props`, async () => {
        const currentOptionId = 'baz';

        const { getByTestId, queryByTestId, getByText } = render(
            <SelectBasic
                selectId={selectId}
                label={label}
                optionItems={optionItems}
                currentOptionId={currentOptionId}
                handleSelectedOption={handleSelectedOption}
            />,
        );

        const component = getByTestId(componentId);
        const displayedOption = getByTestId('fel-select-displayed-option');
        const displayedValue = getByText('com');
        const options = queryByTestId(optionsId);

        expect(component).toBeTruthy();
        expect(displayedOption).toBeTruthy();
        expect(displayedValue).toBeInTheDocument();
        expect(options).toBeNull();

        fireEvent.click(displayedOption);

        await waitFor(() => {
            expect(queryByTestId(optionsId)).toBeTruthy();
        });

        fireEvent.mouseDown(document);

        await waitFor(() => {
            expect(queryByTestId(optionsId)).toBeNull();
        });

        fireEvent.click(displayedOption);

        await waitFor(() => {
            expect(queryByTestId(optionsId)).toBeTruthy();
        });

        fireEvent.focusOut(queryByTestId(optionsId));
    });
});
