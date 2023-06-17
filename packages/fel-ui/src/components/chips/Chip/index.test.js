import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Chip from '.';

afterEach(cleanup);

describe('<Chip />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-chip';
    const content = 'foo';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(<Chip content={content} />);

        const component = getByTestId(componentId);
        const label = getByText(content);

        expect(component).toBeTruthy();
        expect(label).toBeInTheDocument();
    });
});
