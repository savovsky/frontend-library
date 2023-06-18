import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Modal from '.';

afterEach(cleanup);

describe('<Modal />', () => {
    const testMsg = 'Should render Component correctly';
    const overlayContnetWrapperId = 'fel-overlay-content-wrapper';
    const modalId = 'fel-modal';
    const contentTxt = 'Hello World!';
    const content = () => <div>{contentTxt}</div>;
    const handleOnModalClose = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const { queryByTestId, queryByText } = render(
            <Modal isOpen={false} handleOnModalClose={handleOnModalClose}>
                {content()}
            </Modal>,
        );

        const modal = queryByTestId(modalId);
        const txt = queryByText(contentTxt);

        expect(modal).toBeNull();
        expect(txt).not.toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <Modal isOpen={true} handleOnModalClose={handleOnModalClose}>
                {content()}
            </Modal>,
        );

        const modal = getByTestId(modalId);
        const txt = getByText(contentTxt);

        expect(modal).toBeTruthy();
        expect(txt).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <Modal
                isOpen={true}
                handleOnModalClose={handleOnModalClose}
                bodyPaddingRight={10}
                isClosingOnClickOutside={true}
                isClosingOnHitEscape={false}
            >
                {content()}
            </Modal>,
        );

        const modal = getByTestId(modalId);

        expect(modal).toBeTruthy();

        fireEvent.click(modal);

        expect(handleOnModalClose).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <Modal
                isOpen={true}
                handleOnModalClose={handleOnModalClose}
                bodyPaddingRight={10}
                isClosingOnClickOutside={false}
                isClosingOnHitEscape={true}
            >
                {content()}
            </Modal>,
        );

        const modal = getByTestId(modalId);

        expect(modal).toBeTruthy();

        fireEvent.keyDown(document, {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            charCode: 27,
        });

        expect(handleOnModalClose).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <Modal
                isOpen={true}
                handleOnModalClose={handleOnModalClose}
                bodyPaddingRight={10}
                isClosingOnClickOutside={true}
                isClosingOnHitEscape={true}
            >
                {content()}
            </Modal>,
        );

        const overlayContnetWrapper = getByTestId(overlayContnetWrapperId);

        expect(overlayContnetWrapper).toBeTruthy();

        fireEvent.click(overlayContnetWrapper);

        fireEvent.keyPress(overlayContnetWrapper, {
            key: 'm',
            charCode: 77,
        });

        fireEvent.keyDown(overlayContnetWrapper, {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            charCode: 27,
        });
    });
});
