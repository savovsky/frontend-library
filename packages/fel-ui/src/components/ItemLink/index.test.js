import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import ItemLink from '.';

afterEach(cleanup);

describe('<ItemLink />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-item-link';

    const href = 'https://google.com';
    const content = 'Hello world';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <ItemLink href={href}>{content}</ItemLink>,
        );

        const link = getByTestId(componentId);
        const linkContent = getByText(content);

        expect(link).toBeTruthy();
        expect(linkContent).toBeInTheDocument();
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).not.toHaveClass('disabled');
        expect(link).not.toHaveClass('mockup');

        fireEvent.click(link);
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ItemLink href={href} isDisabled={true}>
                {content}
            </ItemLink>,
        );

        const link = getByTestId(componentId);
        const linkContent = getByText(content);

        expect(link).toBeTruthy();
        expect(linkContent).toBeInTheDocument();
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveClass('disabled');
        expect(link).not.toHaveClass('mockup');

        fireEvent.click(link);
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ItemLink href={href} isMockedData={true}>
                {content}
            </ItemLink>,
        );

        const link = getByTestId(componentId);
        const linkContent = getByText(content);

        expect(link).toBeTruthy();
        expect(linkContent).toBeInTheDocument();
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).not.toHaveClass('disabled');
        expect(link).toHaveClass('mockup');

        fireEvent.click(link);
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <ItemLink href={href} target="self">
                {content}
            </ItemLink>,
        );

        const link = getByTestId(componentId);
        const linkContent = getByText(content);

        expect(link).toBeTruthy();
        expect(linkContent).toBeInTheDocument();
        expect(link).toHaveAttribute('target', '_self');
        expect(link).not.toHaveClass('disabled');
        expect(link).not.toHaveClass('mockup');

        fireEvent.click(link);
    });
});
