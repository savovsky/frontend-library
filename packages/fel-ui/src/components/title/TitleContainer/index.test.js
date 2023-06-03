import React from 'react';
import { render, cleanup } from '@testing-library/react';

import TitleContainer from '.';

afterEach(cleanup);

describe('<TitleContainer />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-title-container';
    const content = 'foo';

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <TitleContainer content={content} />,
        );

        const title = getByTestId(componentId);
        const titleLabel = getByText(content);

        expect(title).toBeTruthy();
        expect(titleLabel).toBeInTheDocument();
        expect(titleLabel).toHaveClass('primary');
        expect(titleLabel).not.toHaveClass('secondary');
        expect(titleLabel).not.toHaveClass('tertiary');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <TitleContainer content={content} mode="primary" />,
        );

        const title = getByTestId(componentId);
        const titleLabel = getByText(content);

        expect(title).toBeTruthy();
        expect(titleLabel).toBeInTheDocument();
        expect(titleLabel).toHaveClass('primary');
        expect(titleLabel).not.toHaveClass('secondary');
        expect(titleLabel).not.toHaveClass('tertiary');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <TitleContainer content={content} mode="secondary" />,
        );

        const title = getByTestId(componentId);
        const titleLabel = getByText(content);

        expect(title).toBeTruthy();
        expect(titleLabel).toBeInTheDocument();
        expect(titleLabel).not.toHaveClass('primary');
        expect(titleLabel).toHaveClass('secondary');
        expect(titleLabel).not.toHaveClass('tertiary');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <TitleContainer content={content} mode="tertiary" />,
        );

        const title = getByTestId(componentId);
        const titleLabel = getByText(content);

        expect(title).toBeTruthy();
        expect(titleLabel).toBeInTheDocument();
        expect(titleLabel).not.toHaveClass('primary');
        expect(titleLabel).not.toHaveClass('secondary');
        expect(titleLabel).toHaveClass('tertiary');
    });
});
