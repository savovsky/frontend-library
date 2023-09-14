import React from 'react';
import { render, cleanup } from '@testing-library/react';

import LoaderSpin from '.';

afterEach(cleanup);

describe('<LoaderSpin />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-loader-spin';

    test(`${testMsg}`, () => {
        const { getByTestId } = render(<LoaderSpin />);

        const component = getByTestId(componentId);

        expect(component).toBeTruthy();
    });
});
