import React from 'react';
import { render, cleanup } from '@testing-library/react';

import NoteImportant from '.';

afterEach(cleanup);

describe('<NoteImportant />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-note-important';
    const note = 'foo';

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <NoteImportant content={note} />,
        );

        const component = getByTestId(componentId);
        const message = getByText(note);

        expect(component).toBeTruthy();
        expect(component).toHaveClass('left-aligned');
        expect(component).not.toHaveClass('right-aligned');
        expect(message).toBeInTheDocument();
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <NoteImportant content={note} aligned="right" />,
        );

        const component = getByTestId(componentId);
        const message = getByText(note);

        expect(component).toBeTruthy();
        expect(component).not.toHaveClass('left-aligned');
        expect(component).toHaveClass('right-aligned');
        expect(message).toBeInTheDocument();
    });
});
