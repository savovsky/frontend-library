import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Th from '.';

afterEach(cleanup);

describe('<Th />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-table-th';
    const title = 'foo';

    test(`${testMsg} with provided props`, () => {
        const aligned = 'center';

        const { getByTestId, getByText } = render(
            <table>
                <thead>
                    <tr>
                        <Th title={title} aligned={aligned} />
                    </tr>
                </thead>
            </table>,
        );

        const th = getByTestId(componentId);
        const columnTitle = getByText(title);

        expect(th).toBeTruthy();
        expect(th).toHaveClass(`align-${aligned}`);
        expect(columnTitle).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <table>
                <thead>
                    <tr>
                        <Th title={title} />
                    </tr>
                </thead>
            </table>,
        );

        const th = getByTestId(componentId);
        const columnTitle = getByText(title);

        expect(th).toBeTruthy();
        expect(th).toHaveClass('align-left');
        expect(columnTitle).toBeInTheDocument();
    });
});
