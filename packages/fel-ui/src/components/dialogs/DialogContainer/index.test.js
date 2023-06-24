import React from 'react';
import { render, cleanup } from '@testing-library/react';

import DialogContainer from '.';

afterEach(cleanup);

describe('<DialogContainer />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-dialog-container';
    const contentTxt = 'foo';
    const content = () => <div>{contentTxt}</div>;

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <DialogContainer>{content()}</DialogContainer>,
        );

        const component = getByTestId(componentId);
        const txt = getByText(contentTxt);

        expect(component).toBeTruthy();
        expect(component).toHaveClass('fel__card-dialog');
        expect(component).not.toHaveClass('fel__card-dialog-light');
        expect(txt).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <DialogContainer isLightBackground={true}>
                {content()}
            </DialogContainer>,
        );

        const component = getByTestId(componentId);
        const txt = getByText(contentTxt);

        expect(component).toBeTruthy();
        expect(component).not.toHaveClass('fel__card-dialog');
        expect(component).toHaveClass('fel__card-dialog-light');
        expect(txt).toBeInTheDocument();
    });
});
