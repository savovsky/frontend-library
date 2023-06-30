import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import NextButton from '.';

afterEach(cleanup);

describe('<NextButton />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-paginator-page-btn';
    const handleOnClickPage = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const buttonIndex = 0;
        const currentPage = 1;
        const totalPagesCount = 10;

        const { getByTestId } = render(
            <NextButton
                buttonIndex={buttonIndex}
                currentPage={currentPage}
                totalPagesCount={totalPagesCount}
                handleOnClickPage={handleOnClickPage}
            />,
        );

        const button = getByTestId(componentId);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('disabled');
        expect(button).toHaveClass('active');

        fireEvent.click(button);
        expect(handleOnClickPage).toHaveBeenCalledWith(1);
    });

    test(`${testMsg} with provided props`, () => {
        const buttonIndex = 1;
        const currentPage = 5;
        const totalPagesCount = 10;

        const { getByTestId } = render(
            <NextButton
                buttonIndex={buttonIndex}
                currentPage={currentPage}
                totalPagesCount={totalPagesCount}
                handleOnClickPage={handleOnClickPage}
            />,
        );

        const button = getByTestId(componentId);

        expect(button).toBeTruthy();
        expect(button).toHaveClass('disabled');
        expect(button).not.toHaveClass('active');

        fireEvent.click(button);
        expect(handleOnClickPage).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const buttonIndex = 3;
        const currentPage = 4;
        const totalPagesCount = 10;

        const { getByTestId } = render(
            <NextButton
                buttonIndex={buttonIndex}
                currentPage={currentPage}
                totalPagesCount={totalPagesCount}
                handleOnClickPage={handleOnClickPage}
            />,
        );

        const button = getByTestId(componentId);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('disabled');
        expect(button).toHaveClass('active');

        fireEvent.click(button);
        expect(handleOnClickPage).toHaveBeenCalledWith(4);
    });

    test(`${testMsg} with provided props`, () => {
        const buttonIndex = 3;
        const currentPage = 3;
        const totalPagesCount = 7;

        const { getByTestId } = render(
            <NextButton
                buttonIndex={buttonIndex}
                currentPage={currentPage}
                totalPagesCount={totalPagesCount}
                handleOnClickPage={handleOnClickPage}
            />,
        );

        const button = getByTestId(componentId);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('disabled');
        expect(button).not.toHaveClass('active');

        fireEvent.click(button);
        expect(handleOnClickPage).toHaveBeenCalledWith(4);
    });
});
