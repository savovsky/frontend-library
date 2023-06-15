import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SwitchBasic from '.';

afterEach(cleanup);

describe('<SwitchBasic />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-switch-basic';
    const inputId = 'switch';
    const handleOnClick = jest.fn();

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId } = render(
            <SwitchBasic inputId={inputId} handleOnClick={handleOnClick} />,
        );

        const component = getByTestId(componentId);
        const switchInput = component.querySelector('input');
        const switchTrack = component.querySelector('div');

        expect(component).toBeTruthy();
        expect(switchInput.checked).toEqual(false);
        expect(component).not.toHaveClass('disabled');
        expect(switchTrack).toHaveClass('primary');
        expect(switchTrack).not.toHaveClass('on');
        expect(switchTrack).not.toHaveClass('mockup');

        fireEvent.click(switchInput);
        expect(switchInput.checked).toEqual(true);
        expect(switchTrack).toHaveClass('on');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <SwitchBasic
                inputId={inputId}
                handleOnClick={handleOnClick}
                isOn={true}
                isDisabled={true}
            />,
        );

        const component = getByTestId(componentId);
        const switchInput = component.querySelector('input');
        const switchTrack = component.querySelector('div');

        expect(component).toBeTruthy();
        expect(switchInput.checked).toEqual(true);
        expect(component).toHaveClass('disabled');
        expect(switchTrack).toHaveClass('on');
        expect(switchTrack).not.toHaveClass('mockup');

        userEvent.click(switchInput);
        expect(switchInput.checked).toEqual(true);
        expect(switchTrack).toHaveClass('on');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <SwitchBasic
                inputId={inputId}
                handleOnClick={handleOnClick}
                mode="secondary"
            />,
        );

        const component = getByTestId(componentId);
        const switchInput = component.querySelector('input');
        const switchTrack = component.querySelector('div');

        expect(component).toBeTruthy();
        expect(switchInput.checked).toEqual(false);
        expect(component).not.toHaveClass('disabled');
        expect(component).not.toHaveClass('primary');
        expect(switchTrack).not.toHaveClass('on');
        expect(switchTrack).toHaveClass('secondary');
        expect(switchTrack).not.toHaveClass('mockup');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <SwitchBasic
                inputId={inputId}
                handleOnClick={handleOnClick}
                mode="secondary"
                isMockedData={true}
                isOn={true}
            />,
        );

        const component = getByTestId(componentId);
        const switchInput = component.querySelector('input');
        const switchTrack = component.querySelector('div');

        expect(component).toBeTruthy();
        expect(switchInput.checked).toEqual(true);
        expect(component).not.toHaveClass('disabled');
        expect(component).not.toHaveClass('primary');
        expect(switchTrack).toHaveClass('on');
        expect(switchTrack).toHaveClass('secondary');
        expect(switchTrack).toHaveClass('mockup');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <SwitchBasic
                inputId={inputId}
                handleOnClick={handleOnClick}
                mode="secondary"
                isOn={true}
            />,
        );

        const component = getByTestId(componentId);
        const switchInput = component.querySelector('input');
        const switchTrack = component.querySelector('div');

        expect(component).toBeTruthy();
        expect(switchInput.checked).toEqual(true);
        expect(component).not.toHaveClass('disabled');
        expect(component).not.toHaveClass('primary');
        expect(switchTrack).toHaveClass('on');
        expect(switchTrack).toHaveClass('secondary');
        expect(switchTrack).not.toHaveClass('mockup');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId } = render(
            <SwitchBasic
                inputId={inputId}
                handleOnClick={handleOnClick}
                mode="tertiary"
                isOn={true}
            />,
        );

        const component = getByTestId(componentId);
        const switchInput = component.querySelector('input');
        const switchTrack = component.querySelector('div');

        expect(component).toBeTruthy();
        expect(switchInput.checked).toEqual(true);
        expect(component).not.toHaveClass('disabled');
        expect(component).not.toHaveClass('primary');
        expect(switchTrack).toHaveClass('on');
        expect(switchTrack).toHaveClass('tertiary');
        expect(switchTrack).not.toHaveClass('mockup');
    });
});
