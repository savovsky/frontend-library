import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import TruncateWrapper from '.';

afterEach(cleanup);

describe('<TruncateWrapper />', () => {
    const testMsg = 'Should render Component correctly';
    const text = '123456789';

    test(`${testMsg} with provided default props on mouseOver and mouseLeave`, () => {
        const limit = 5;
        const truncateText = '12345...';

        const { getByText, queryByText } = render(
            <TruncateWrapper text={text} limit={limit} />,
        );

        const conetnt = getByText(truncateText);

        expect(conetnt).toBeInTheDocument();

        fireEvent.mouseOver(conetnt);
        const tooltip = getByText(text);

        expect(conetnt).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveClass('fel__top');

        fireEvent.mouseLeave(conetnt);
        const toolTip = queryByText(text);

        expect(conetnt).toBeInTheDocument();
        expect(toolTip).toBeNull();
    });

    test(`${testMsg} with provided default props on mouseOver and mouseLeave`, () => {
        const limit = 10;
        const truncateText = text;
        const tooltipDataTestId = 'fel-tooltip';

        const { getByText, queryByTestId } = render(
            <TruncateWrapper text={text} limit={limit} />,
        );

        const conetnt = getByText(truncateText);

        expect(conetnt).toBeInTheDocument();

        fireEvent.mouseOver(conetnt);
        const tooltip = queryByTestId(tooltipDataTestId);

        expect(conetnt).toBeInTheDocument();
        expect(tooltip).toBeNull();

        fireEvent.mouseLeave(conetnt);
        const toolTip = queryByTestId(tooltipDataTestId);

        expect(conetnt).toBeInTheDocument();
        expect(toolTip).toBeNull();
    });
});
