import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import ButtonLink from '.';

afterEach(cleanup);

describe('<ButtonBasic />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-button-link';
    const handleOnClick = jest.fn();
    const content = 'foo';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonLink handleOnClick={handleOnClick} content={content} />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonLink
                handleOnClick={handleOnClick}
                content={content}
                isDisabled={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonLink
                handleOnClick={handleOnClick}
                content={content}
                isDisabled={true}
                isMockedData={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonLink
                handleOnClick={handleOnClick}
                content={content}
                isMockedData={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });
});
