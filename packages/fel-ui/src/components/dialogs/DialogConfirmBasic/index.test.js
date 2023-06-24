import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import DialogConfirmBasic from '.';

afterEach(cleanup);

describe('<DialogConfirmBasic />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-dialog-confirm-basic';
    const handleOnClickYes = jest.fn();
    const handleOnClickNo = jest.fn();
    const handleOnClickOk = jest.fn();
    const handleOnClickClose = jest.fn();
    const headerTitle = 'foo';
    const confirmQuestionContent = 'bar';

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <DialogConfirmBasic
                handleOnClickYes={handleOnClickYes}
                handleOnClickNo={handleOnClickNo}
                handleOnClickOk={handleOnClickOk}
                handleOnClickClose={handleOnClickClose}
                headerTitle={headerTitle}
                confirmQuestionContent={confirmQuestionContent}
                successMessageContent=""
                errorMessage=""
                isLoading={false}
                isSuccess={false}
                isError={false}
            />,
        );

        const component = getByTestId(componentId);
        const dialogTitle = getByText(headerTitle);
        const confirmQuestion = getByText(confirmQuestionContent);
        const buttonYes = getByText('yes');
        const buttonNo = getByText('no');

        expect(component).toBeTruthy();
        expect(dialogTitle).toBeInTheDocument();
        expect(confirmQuestion).toBeInTheDocument();
        expect(buttonYes).toBeInTheDocument();
        expect(buttonNo).toBeInTheDocument();

        fireEvent.click(buttonYes);
        expect(handleOnClickYes).toHaveBeenCalled();

        fireEvent.click(buttonNo);
        expect(handleOnClickNo).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <DialogConfirmBasic
                handleOnClickYes={handleOnClickYes}
                handleOnClickNo={handleOnClickNo}
                handleOnClickOk={handleOnClickOk}
                handleOnClickClose={handleOnClickClose}
                headerTitle={headerTitle}
                confirmQuestionContent={confirmQuestionContent}
                successMessageContent=""
                errorMessage=""
                isLoading={true}
                isSuccess={false}
                isError={false}
            />,
        );

        const component = getByTestId(componentId);
        const loader = getByTestId('fel-loader-line');
        const dialogTitle = getByText(headerTitle);
        const confirmQuestion = getByText(confirmQuestionContent);
        const buttonYes = getByText('yes');
        const buttonNo = getByText('no');

        expect(component).toBeTruthy();
        expect(loader).toBeTruthy();
        expect(dialogTitle).toBeInTheDocument();
        expect(confirmQuestion).toBeInTheDocument();
        expect(buttonYes).toBeInTheDocument();
        expect(buttonYes).toBeDisabled();
        expect(buttonNo).toBeInTheDocument();
        expect(buttonNo).toBeDisabled();
    });

    test(`${testMsg} with provided props`, () => {
        const successMessageContent = 'baz';

        const { getByTestId, queryByText } = render(
            <DialogConfirmBasic
                handleOnClickYes={handleOnClickYes}
                handleOnClickNo={handleOnClickNo}
                handleOnClickOk={handleOnClickOk}
                handleOnClickClose={handleOnClickClose}
                headerTitle={headerTitle}
                confirmQuestionContent={confirmQuestionContent}
                successMessageContent={successMessageContent}
                errorMessage=""
                isLoading={false}
                isSuccess={true}
                isError={false}
            />,
        );

        const component = getByTestId(componentId);
        const dialogTitle = queryByText(headerTitle);
        const confirmQuestion = queryByText(confirmQuestionContent);
        const successMessage = queryByText(successMessageContent);
        const buttonYes = queryByText('yes');
        const buttonNo = queryByText('no');
        const buttonOk = queryByText('ok');

        expect(component).toBeTruthy();
        expect(dialogTitle).toBeInTheDocument();
        expect(confirmQuestion).not.toBeInTheDocument();
        expect(successMessage).toBeInTheDocument();
        expect(buttonYes).not.toBeInTheDocument();
        expect(buttonNo).not.toBeInTheDocument();
        expect(buttonOk).toBeInTheDocument();

        fireEvent.click(buttonOk);
        expect(handleOnClickOk).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const errorMessage = 'baz';

        const { getByTestId, queryByText } = render(
            <DialogConfirmBasic
                handleOnClickYes={handleOnClickYes}
                handleOnClickNo={handleOnClickNo}
                handleOnClickOk={handleOnClickOk}
                handleOnClickClose={handleOnClickClose}
                headerTitle={headerTitle}
                confirmQuestionContent={confirmQuestionContent}
                successMessageContent=""
                errorMessage={errorMessage}
                isLoading={false}
                isSuccess={false}
                isError={true}
            />,
        );

        const component = getByTestId(componentId);
        const dialogTitle = queryByText(headerTitle);
        const confirmQuestion = queryByText(confirmQuestionContent);
        const error = queryByText(errorMessage);
        const buttonYes = queryByText('yes');
        const buttonNo = queryByText('no');
        const buttonOk = queryByText('ok');

        expect(component).toBeTruthy();
        expect(dialogTitle).toBeInTheDocument();
        expect(confirmQuestion).not.toBeInTheDocument();
        expect(error).toBeInTheDocument();
        expect(buttonYes).not.toBeInTheDocument();
        expect(buttonNo).not.toBeInTheDocument();
        expect(buttonOk).toBeInTheDocument();

        fireEvent.click(buttonOk);
        expect(handleOnClickOk).toHaveBeenCalled();
    });
});
