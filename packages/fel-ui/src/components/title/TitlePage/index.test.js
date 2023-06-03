import React from 'react';
import { render, cleanup } from '@testing-library/react';

import TitlePage from '.';

afterEach(cleanup);

describe('<TitlePage />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-title-page';
    const content = 'foo';

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <TitlePage content={content} />,
        );

        const title = getByTestId(componentId);
        const titleLabel = getByText(content);

        expect(title).toBeTruthy();
        expect(titleLabel).toBeInTheDocument();
    });
});
