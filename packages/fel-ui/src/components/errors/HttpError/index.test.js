import React from 'react';
import { render, cleanup } from '@testing-library/react';

import HttpError from '.';

afterEach(cleanup);

describe('<HttpError />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-http-error';
    const error = 'foo';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(<HttpError error={error} />);

        const component = getByTestId(componentId);
        const errorMsg = getByText(error);

        expect(component).toBeTruthy();
        expect(errorMsg).toBeInTheDocument();
    });
});
