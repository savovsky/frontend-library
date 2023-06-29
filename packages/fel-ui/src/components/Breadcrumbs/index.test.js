import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Breadcrumbs from '.';

afterEach(cleanup);

describe('<Breadcrumbs />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-breadcrumbs';
    const handleOnClickOne = jest.fn();
    const handleOnClickTwo = jest.fn();
    const labelItemOne = 'one';
    const labelItemTwo = 'two';
    const labelItemThree = 'three';

    const breadcrumbs = [
        {
            content: labelItemOne,
            handleOnClick: handleOnClickOne,
        },
        {
            content: labelItemTwo,
            handleOnClick: handleOnClickTwo,
        },
        {
            content: labelItemThree,
        },
    ];

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <Breadcrumbs breadcrumbs={breadcrumbs} />,
        );

        const component = getByTestId(componentId);
        const itemOne = getByText(labelItemOne, { exact: false }); // ignore case
        const itemTwo = getByText(labelItemTwo, { exact: false }); // ignore case
        const itemThree = getByText(labelItemThree, { exact: false }); // ignore case

        expect(component).toBeTruthy();
        expect(itemOne).toBeInTheDocument();
        expect(itemTwo).toBeInTheDocument();
        expect(itemThree).toBeInTheDocument();

        fireEvent.click(itemOne);
        expect(handleOnClickOne).toHaveBeenCalled();

        fireEvent.click(itemTwo);
        expect(handleOnClickTwo).toHaveBeenCalled();
    });
});
