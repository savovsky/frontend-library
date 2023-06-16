import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import CopyToClipboard from '.';

afterEach(cleanup);

describe('<CopyToClipboard />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-copy-to-clipboard';
    const iconButtonId = 'fel-button-icon';
    const textToBeCopied = 'Text to be copied';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId } = render(
            <CopyToClipboard text={textToBeCopied} />,
        );

        const component = getByTestId(componentId);
        const iconButton = getByTestId(iconButtonId);

        expect(component).toBeTruthy();
        expect(iconButton).toBeTruthy();
        expect(iconButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'copy',
        );

        fireEvent.click(iconButton);
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <CopyToClipboard text={textToBeCopied} icon="clone" />,
        );

        const component = getByTestId(componentId);
        const iconButton = getByTestId(iconButtonId);

        expect(component).toBeTruthy();
        expect(iconButton).toBeTruthy();
        expect(iconButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'clone',
        );

        fireEvent.click(iconButton);
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <CopyToClipboard
                text={textToBeCopied}
                icon=""
                snackbarSuccessContent=""
                tooltipContent=""
            />,
        );

        const component = getByTestId(componentId);
        const iconButton = getByTestId(iconButtonId);

        expect(component).toBeTruthy();
        expect(iconButton).toBeTruthy();
        expect(iconButton.querySelector('svg')).toHaveAttribute(
            'data-icon',
            'copy',
        );

        fireEvent.click(iconButton);
    });
});
