import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SideNavBarBasic from '.';

afterEach(cleanup);

describe('<SideNavBarBasic />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-side-nav-bar';
    const handleOnLinkSelect = jest.fn();

    const navItems = [
        { id: 'foo', label: 'abc' },
        { id: 'bar', label: 'xyz' },
    ];

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <SideNavBarBasic
                navItems={navItems}
                handleOnLinkSelect={handleOnLinkSelect}
            />,
        );

        const component = getByTestId(componentId);
        const abcLink = getByText('abc');
        const xyzLink = getByText('xyz');

        expect(component).toBeTruthy();
        expect(abcLink).toBeInTheDocument();
        expect(abcLink).toHaveClass('active-nav-link');
        expect(xyzLink).toBeInTheDocument();
        expect(xyzLink).not.toHaveClass('active-nav-link');

        fireEvent.click(xyzLink);
        expect(handleOnLinkSelect).toBeCalledWith('bar');
        expect(abcLink).not.toHaveClass('active-nav-link');
        expect(xyzLink).toHaveClass('active-nav-link');

        fireEvent.keyPress(abcLink, { key: 'Enter', charCode: 13 });
        expect(handleOnLinkSelect).toBeCalledWith('foo');
        expect(abcLink).toHaveClass('active-nav-link');
        expect(xyzLink).not.toHaveClass('active-nav-link');

        userEvent.tab();

        fireEvent.click(xyzLink, { key: 'Enter', charCode: 13 });
        expect(handleOnLinkSelect).toBeCalledWith('bar');
        expect(abcLink).not.toHaveClass('active-nav-link');
        expect(xyzLink).toHaveClass('active-nav-link');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <SideNavBarBasic
                navItems={navItems}
                handleOnLinkSelect={handleOnLinkSelect}
                defaultActiveNavLinkId="bar"
            />,
        );

        const component = getByTestId(componentId);
        const abcLink = getByText('abc');
        const xyzLink = getByText('xyz');

        expect(component).toBeTruthy();
        expect(abcLink).toBeInTheDocument();
        expect(abcLink).not.toHaveClass('active-nav-link');
        expect(xyzLink).toBeInTheDocument();
        expect(xyzLink).toHaveClass('active-nav-link');

        fireEvent.click(abcLink);
        expect(handleOnLinkSelect).toBeCalledWith('foo');
        expect(abcLink).toHaveClass('active-nav-link');
        expect(xyzLink).not.toHaveClass('active-nav-link');

        fireEvent.keyPress(xyzLink, { key: 'Enter', charCode: 13 });
        expect(handleOnLinkSelect).toBeCalledWith('foo');
        expect(abcLink).not.toHaveClass('active-nav-link');
        expect(xyzLink).toHaveClass('active-nav-link');

        userEvent.tab();

        fireEvent.click(abcLink, { key: 'Enter', charCode: 13 });
        expect(handleOnLinkSelect).toBeCalledWith('bar');
        expect(abcLink).toHaveClass('active-nav-link');
        expect(xyzLink).not.toHaveClass('active-nav-link');
    });
});
