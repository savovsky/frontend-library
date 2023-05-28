import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import ButtonBasic from '.';

afterEach(cleanup);

describe('<ButtonBasic />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-button-basic';
    const handleOnClick = jest.fn();
    const content = 'foo';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic handleOnClick={handleOnClick} content={content} />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).not.toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                mode="primary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).not.toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                mode="secondary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).not.toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                mode="tertiary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).not.toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                mode="quaternary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).toHaveClass('quaternary');
        expect(button).not.toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                isDisabled={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                mode="primary"
                isDisabled={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                mode="secondary"
                isDisabled={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                mode="tertiary"
                isDisabled={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                mode="quaternary"
                isDisabled={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).toHaveClass('quaternary');
        expect(button).toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                isMockedData={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).not.toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                isMockedData={true}
                mode="primary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).not.toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                isMockedData={true}
                mode="secondary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).not.toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                isMockedData={true}
                mode="tertiary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).not.toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                isMockedData={true}
                mode="quaternary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).toHaveClass('quaternary');
        expect(button).not.toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                isMockedData={true}
                isDisabled={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                isMockedData={true}
                isDisabled={true}
                mode="primary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                isMockedData={true}
                isDisabled={true}
                mode="secondary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                isMockedData={true}
                isDisabled={true}
                mode="tertiary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).toHaveClass('tertiary');
        expect(button).not.toHaveClass('quaternary');
        expect(button).toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonBasic
                handleOnClick={handleOnClick}
                content={content}
                isMockedData={true}
                isDisabled={true}
                mode="quaternary"
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(content);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('primary');
        expect(button).not.toHaveClass('secondary');
        expect(button).not.toHaveClass('tertiary');
        expect(button).toHaveClass('quaternary');
        expect(button).toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(buttonLabel).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });
});
