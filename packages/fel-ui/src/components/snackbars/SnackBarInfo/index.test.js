import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SnackBarInfo from '.';

afterEach(cleanup);

describe('<SnackBarInfo />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-snackbar-info';
    const content = 'Some message';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <SnackBarInfo content={content} />,
        );

        const component = getByTestId(componentId);
        const message = getByText(content);

        expect(component).toBeTruthy();
        expect(component.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'info-circle',
        );
        expect(message).toBeInTheDocument();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <SnackBarInfo content={content} mode="foo" />,
        );

        const component = getByTestId(componentId);
        const message = getByText(content);

        expect(component).toBeTruthy();
        expect(component.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'circle',
        );
        expect(message).toBeInTheDocument();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <SnackBarInfo content={content} mode="error" />,
        );

        const component = getByTestId(componentId);
        const message = getByText(content);

        expect(component).toBeTruthy();
        expect(component.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'exclamation-circle',
        );
        expect(message).toBeInTheDocument();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <SnackBarInfo content={content} mode="warning" />,
        );

        const component = getByTestId(componentId);
        const message = getByText(content);

        expect(component).toBeTruthy();
        expect(component.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'exclamation-triangle',
        );
        expect(message).toBeInTheDocument();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <SnackBarInfo content={content} mode="info" />,
        );

        const component = getByTestId(componentId);
        const message = getByText(content);

        expect(component).toBeTruthy();
        expect(component.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'info-circle',
        );
        expect(message).toBeInTheDocument();
    });

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <SnackBarInfo content={content} mode="success" />,
        );

        const component = getByTestId(componentId);
        const message = getByText(content);

        expect(component).toBeTruthy();
        expect(component.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'check-circle',
        );
        expect(message).toBeInTheDocument();
    });
});
