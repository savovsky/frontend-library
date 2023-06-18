import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import DialogHeader from '.';

afterEach(cleanup);

describe('<DialogHeader />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-dialog-header';
    const buttonTestId = 'fel-dialog-close-icon-btn';
    const headerTitle = 'foo';
    const handleOnClickClose = jest.fn();

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <DialogHeader
                headerTitle={headerTitle}
                handleOnClickClose={handleOnClickClose}
            />,
        );

        const component = getByTestId(componentId);
        const title = getByText(headerTitle);
        const button = getByTestId(buttonTestId);

        expect(component).toBeTruthy();
        expect(title).toBeInTheDocument();
        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('disabled');

        fireEvent.click(button);

        expect(handleOnClickClose).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <DialogHeader
                headerTitle={headerTitle}
                handleOnClickClose={handleOnClickClose}
                isDisabled={true}
            />,
        );

        const component = getByTestId(componentId);
        const title = getByText(headerTitle);
        const button = getByTestId(buttonTestId);

        expect(component).toBeTruthy();
        expect(title).toBeInTheDocument();
        expect(button).toBeTruthy();
        expect(button).toHaveClass('disabled');
        expect(button).toBeDisabled();

        fireEvent.click(button);

        expect(handleOnClickClose).not.toHaveBeenCalled();
    });
});
