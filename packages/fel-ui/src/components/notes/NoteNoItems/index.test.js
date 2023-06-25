import React from 'react';
import { render, cleanup } from '@testing-library/react';

import str from '../../../utils/stringsUtils';
import NoteNoItem from '.';

afterEach(cleanup);

describe('<NoteNoItem />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-note-no-items';
    const note = 'foo';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(<NoteNoItem />);

        const component = getByTestId(componentId);
        const message = getByText(str.noItems);

        expect(component).toBeTruthy();
        expect(message).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <NoteNoItem content={note} />,
        );

        const component = getByTestId(componentId);
        const message = getByText(note);

        expect(component).toBeTruthy();
        expect(message).toBeInTheDocument();
    });
});
