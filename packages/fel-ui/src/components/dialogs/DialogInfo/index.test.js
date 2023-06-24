import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import DialogInfo from '.';

afterEach(cleanup);

describe('<DialogInfo />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-dialog-info';
    const dialogIconCloseId = 'fel-dialog-close-icon-btn';
    const headerTitle = 'foo';
    const buttonLabel = 'ok';
    const contentMsg = 'bar';
    const content = () => <div>{contentMsg}</div>;
    const handleOnClickClose = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <DialogInfo
                headerTitle={headerTitle}
                content={content()}
                handleOnClickClose={handleOnClickClose}
            />,
        );

        const component = getByTestId(componentId);
        const dialogIconClose = getByTestId(dialogIconCloseId);
        const dialogTitle = getByText(headerTitle);
        const dialogContent = getByText(contentMsg);
        const footerButton = getByText(buttonLabel);

        expect(component).toBeTruthy();
        expect(dialogIconClose).toBeTruthy();
        expect(dialogIconClose).not.toBeDisabled();
        expect(dialogTitle).toBeInTheDocument();
        expect(dialogContent).toBeInTheDocument();
        expect(footerButton).toBeTruthy();
        expect(footerButton).not.toHaveClass('disabled');

        fireEvent.click(dialogIconClose);
        expect(handleOnClickClose).toHaveBeenCalled();

        fireEvent.click(footerButton);
        expect(handleOnClickClose).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const footerButtonLabel = 'close';

        const { getByTestId, getByText } = render(
            <DialogInfo
                headerTitle={headerTitle}
                content={content()}
                handleOnClickClose={handleOnClickClose}
                footerButtonLabel={footerButtonLabel}
            />,
        );

        const component = getByTestId(componentId);
        const footerButton = getByText(footerButtonLabel);

        expect(component).toBeTruthy();
        expect(footerButton).toBeTruthy();
        expect(footerButton).not.toHaveClass('disabled');

        fireEvent.click(footerButton);
        expect(handleOnClickClose).toHaveBeenCalled();
    });
});
