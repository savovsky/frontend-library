import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Options from '.';

afterEach(cleanup);

describe('<Options />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-combo-box-options-list';

    const currentOptionId = '2';
    const options = [
        { id: '1', value: 'option 1' },
        { id: '2', value: 'option 2' },
        { id: '3', value: 'option 3' },
    ];
    const handleOnClickOption = jest.fn();
    const handleOnKeyPressOption = jest.fn();
    const handleOnBlurOptions = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <Options
                currentOptionId={currentOptionId}
                options={options}
                handleOnClickOption={handleOnClickOption}
                handleOnKeyPressOption={handleOnKeyPressOption}
                handleOnClickOutside={handleOnBlurOptions}
            />,
        );

        const optionItems = getByTestId(componentId);

        expect(optionItems).toBeTruthy();

        expect(getByText('option 1')).toBeInTheDocument();
        expect(getByText('option 2')).toBeInTheDocument();
        expect(getByText('option 3')).toBeInTheDocument();

        fireEvent.click(optionItems.childNodes[0]);
        expect(handleOnClickOption).toHaveBeenCalledWith('1');

        fireEvent.keyPress(optionItems.childNodes[1], {
            key: 'Enter',
            charCode: 13,
        });
        expect(handleOnKeyPressOption).toHaveBeenCalled();
    });
});
