import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Tooltip from '.';

afterEach(cleanup);

describe('<Tooltip />', () => {
    const testMsg = 'Should render Component correctly';
    const content = 'foo';
    const text = 'Hover over me';
    const offset = '30px';

    test(`${testMsg} with provided default props on mouseOver`, () => {
        const { getByText } = render(
            <Tooltip content={content}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.mouseOver(child);
        const tooltip = getByText(content);

        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveClass('fel__bottom');
        expect(tooltip).not.toHaveClass('fel__light-tooltip');
        expect(tooltip).toHaveStyle({ width: '150px' });
    });

    test(`${testMsg} with provided props on mouseOver`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content} isDisabled={true}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.mouseOver(child);
        const tooltip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(tooltip).not.toBeInTheDocument();
    });

    test(`${testMsg} with provided props on mouseOver`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content} placement="top" isLight={true}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.mouseOver(child);
        const tooltip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).not.toHaveClass('fel__bottom');
        expect(tooltip).toHaveClass('fel__top');
        expect(tooltip).toHaveClass('fel__light-tooltip');
        expect(tooltip).toHaveStyle({ width: '150px' });
    });

    test(`${testMsg} with provided props on mouseOver`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content} placement="top" offset={offset}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.mouseOver(child);
        const tooltip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).not.toHaveClass('fel__bottom');
        expect(tooltip).toHaveClass('fel__top');
        expect(tooltip).not.toHaveClass('fel__light-tooltip');
        expect(tooltip).toHaveStyle({
            width: '150px',
            bottom: `calc(100% + ${offset})`,
        });
    });

    test(`${testMsg} with provided props on mouseOver`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content} placement="right" offset={offset}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.mouseOver(child);
        const tooltip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).not.toHaveClass('fel__bottom');
        expect(tooltip).toHaveClass('fel__right');
        expect(tooltip).not.toHaveClass('fel__light-tooltip');
        expect(tooltip).toHaveStyle({
            width: '150px',
            left: `calc(100% + ${offset})`,
        });
    });

    test(`${testMsg} with provided props on mouseOver`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content} placement="left" offset={offset}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.mouseOver(child);
        const tooltip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).not.toHaveClass('fel__bottom');
        expect(tooltip).toHaveClass('fel__left');
        expect(tooltip).not.toHaveClass('fel__light-tooltip');
        expect(tooltip).toHaveStyle({
            width: '150px',
            right: `calc(100% + ${offset})`,
        });
    });

    test(`${testMsg} with provided props on mouseOver`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content} offset="">
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.mouseOver(child);
        const tooltip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveClass('fel__bottom');
        expect(tooltip).not.toHaveClass('fel__light-tooltip');
        expect(tooltip).toHaveStyle({ width: '150px' });
    });

    test(`${testMsg} with provided props on mouseOver`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content} offset={offset}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.mouseOver(child);
        const tooltip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveClass('fel__bottom');
        expect(tooltip).not.toHaveClass('fel__light-tooltip');
        expect(tooltip).toHaveStyle({
            width: '150px',
            top: `calc(100% + ${offset})`,
        });
    });

    test(`${testMsg} with provided default props on mouseLeave`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.mouseOver(child);
        const tooltip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();

        fireEvent.mouseLeave(child);
        const toolTip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(toolTip).toBeNull();
    });

    test(`${testMsg} with provided default props on click`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.mouseOver(child);
        const tooltip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();

        fireEvent.click(child);
        const toolTip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(toolTip).toBeNull();
    });

    test(`${testMsg} with provided default props onKeyPress Enter`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.focus(child);
        const tooltip = queryByText(content);
        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();

        fireEvent.keyPress(child, { key: 'Enter', charCode: 13 });
        const toolTip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(toolTip).toBeNull();
    });

    test(`${testMsg} with provided default props onKeyPress but not Enter`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.focus(child);
        const tooltip = queryByText(content);
        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();

        fireEvent.keyPress(child, { key: 'm', charCode: 77 });
        const toolTip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(toolTip).toBeInTheDocument();
    });

    test(`${testMsg} with provided default props onBlur`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.focus(child);
        const tooltip = queryByText(content);
        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();

        fireEvent.blur(child);
        const toolTip = queryByText(content);

        expect(child).toBeInTheDocument();
        expect(toolTip).toBeNull();
    });

    test(`${testMsg} with provided default props onFocus`, () => {
        const { getByText, queryByText } = render(
            <Tooltip content={content}>
                <div>{text}</div>
            </Tooltip>,
        );

        const child = getByText(text);

        expect(child).toBeInTheDocument();

        fireEvent.focus(child);
        const tooltip = queryByText(content);
        expect(child).toBeInTheDocument();
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveClass('fel__bottom');
        expect(tooltip).not.toHaveClass('fel__light-tooltip');
        expect(tooltip).toHaveStyle({ width: '150px' });
    });
});
