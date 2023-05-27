import React from 'react';
import { render, cleanup } from '@testing-library/react';

import LoaderLine from '.';

afterEach(cleanup);

describe('<LoaderLine />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-loader-line';

    test(`${testMsg}`, () => {
        const { getByTestId } = render(<LoaderLine />);

        const component = getByTestId(componentId);

        expect(component).toBeTruthy();
    });
});
