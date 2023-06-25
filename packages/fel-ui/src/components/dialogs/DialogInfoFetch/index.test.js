import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import DialogInfoFetch from '.';

afterEach(cleanup);

describe('<DialogInfoFetch />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-dialog-info-fetch';
    const dialogIconCloseId = 'fel-dialog-close-icon-btn';
    const loaderId = 'fel-loader-spin';
    const headerTitle = 'foo';
    const contentMsg = 'bar';
    const content = () => <div>{contentMsg}</div>;
    const handleOnClickRetry = jest.fn();
    const handleOnClickClose = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText, queryByText } = render(
            <DialogInfoFetch
                handleOnClickRetry={handleOnClickRetry}
                handleOnClickClose={handleOnClickClose}
                headerTitle={headerTitle}
                content={null}
                errorMessage=""
                isLoading={true}
                isSuccess={false}
                isError={false}
            />,
        );

        const component = getByTestId(componentId);
        const dialogIconClose = getByTestId(dialogIconCloseId);
        const loader = getByTestId(loaderId);
        const dialogTitle = getByText(headerTitle);
        const dialogContent = queryByText(contentMsg);
        const buttonRetry = queryByText('retry');
        const buttonClose = queryByText('close');

        expect(component).toBeTruthy();
        expect(dialogIconClose).toBeTruthy();
        expect(dialogIconClose).toBeDisabled();
        expect(loader).toBeTruthy();
        expect(dialogTitle).toBeInTheDocument();
        expect(dialogContent).toBeNull();
        expect(buttonRetry).toBeNull();
        expect(buttonClose).toBeNull();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, queryByTestId, getByText, queryByText } = render(
            <DialogInfoFetch
                handleOnClickRetry={handleOnClickRetry}
                handleOnClickClose={handleOnClickClose}
                headerTitle={headerTitle}
                content={content()}
                errorMessage=""
                isLoading={false}
                isSuccess={true}
                isError={false}
            />,
        );

        const component = getByTestId(componentId);
        const dialogIconClose = getByTestId(dialogIconCloseId);
        const loader = queryByTestId(loaderId);
        const dialogTitle = getByText(headerTitle);
        const dialogContent = getByText(contentMsg);
        const buttonRetry = queryByText('retry');
        const buttonClose = queryByText('close');

        expect(component).toBeTruthy();
        expect(dialogIconClose).toBeTruthy();
        expect(dialogIconClose).not.toBeDisabled();
        expect(loader).toBeNull();
        expect(dialogTitle).toBeInTheDocument();
        expect(dialogContent).toBeInTheDocument();
        expect(buttonRetry).toBeNull();
        expect(buttonClose).toBeTruthy();

        fireEvent.click(dialogIconClose);
        expect(handleOnClickClose).toHaveBeenCalled();

        fireEvent.click(buttonClose);
        expect(handleOnClickClose).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const errorMsg = 'some error';

        const { getByTestId, queryByTestId, getByText } = render(
            <DialogInfoFetch
                handleOnClickRetry={handleOnClickRetry}
                handleOnClickClose={handleOnClickClose}
                headerTitle={headerTitle}
                content={null}
                errorMessage={errorMsg}
                isLoading={false}
                isSuccess={false}
                isError={true}
            />,
        );

        const component = getByTestId(componentId);
        const dialogIconClose = getByTestId(dialogIconCloseId);
        const loader = queryByTestId(loaderId);
        const dialogTitle = getByText(headerTitle);
        const error = getByText(errorMsg);
        const buttonRetry = getByText('retry');
        const buttonClose = getByText('close');

        expect(component).toBeTruthy();
        expect(dialogIconClose).toBeTruthy();
        expect(dialogIconClose).not.toBeDisabled();
        expect(loader).toBeNull();
        expect(dialogTitle).toBeInTheDocument();
        expect(error).toBeInTheDocument();
        expect(buttonRetry).toBeTruthy();
        expect(buttonClose).toBeTruthy();

        fireEvent.click(dialogIconClose);
        expect(handleOnClickClose).toHaveBeenCalled();

        fireEvent.click(buttonClose);
        expect(handleOnClickClose).toHaveBeenCalled();

        fireEvent.click(buttonRetry);
        expect(handleOnClickRetry).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const errorMsg = 'some error';

        const { getByTestId, queryByTestId, getByText, queryByText } = render(
            <DialogInfoFetch
                handleOnClickRetry={handleOnClickRetry}
                handleOnClickClose={handleOnClickClose}
                headerTitle={headerTitle}
                content={content()}
                errorMessage={errorMsg}
                isLoading={false}
                isSuccess={false}
                isError={false}
            />,
        );

        const component = getByTestId(componentId);
        const dialogIconClose = getByTestId(dialogIconCloseId);
        const loader = queryByTestId(loaderId);
        const dialogTitle = getByText(headerTitle);
        const dialogContent = queryByText(contentMsg);
        const error = queryByText(errorMsg);
        const buttonRetry = queryByText('retry');
        const buttonClose = queryByText('close');

        expect(component).toBeTruthy();
        expect(dialogIconClose).toBeTruthy();
        expect(dialogIconClose).not.toBeDisabled();
        expect(loader).toBeNull();
        expect(dialogTitle).toBeInTheDocument();
        expect(dialogContent).toBeNull();
        expect(error).toBeNull();
        expect(buttonRetry).toBeNull();
        expect(buttonClose).toBeNull();
    });
});
