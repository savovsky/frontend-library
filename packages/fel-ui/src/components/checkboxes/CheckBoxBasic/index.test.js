import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import ButtonIcon from '.';

afterEach(cleanup);

describe('<ButtonIcon />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-button-icon';
    const handleOnClick = jest.fn();
    const icon = 'trash';
    const label = 'foo';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId } = render(
            <ButtonIcon handleOnClick={handleOnClick} icon={icon} />,
        );

        const button = getByTestId(componentId);

        expect(button).toBeTruthy();
        expect(button).not.toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(button.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'trash-alt',
        );

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonIcon
                handleOnClick={handleOnClick}
                icon={icon}
                label={label}
                isDisabled={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(label);

        expect(button).toBeTruthy();
        expect(buttonLabel).toBeInTheDocument();
        expect(button).toHaveClass('disabled');
        expect(button).not.toHaveClass('mockup');
        expect(button.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'trash-alt',
        );

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonIcon
                handleOnClick={handleOnClick}
                icon={icon}
                label={label}
                isDisabled={true}
                isMockedData={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(label);

        expect(button).toBeTruthy();
        expect(buttonLabel).toBeInTheDocument();
        expect(button).toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(button.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'trash-alt',
        );

        fireEvent.click(button);

        expect(handleOnClick).not.toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ButtonIcon
                handleOnClick={handleOnClick}
                icon={icon}
                label={label}
                isDisabled={false}
                isMockedData={true}
            />,
        );

        const button = getByTestId(componentId);
        const buttonLabel = getByText(label);

        expect(button).toBeTruthy();
        expect(buttonLabel).toBeInTheDocument();
        expect(button).not.toHaveClass('disabled');
        expect(button).toHaveClass('mockup');
        expect(button.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'trash-alt',
        );

        fireEvent.click(button);

        expect(handleOnClick).toHaveBeenCalled();
    });
});
