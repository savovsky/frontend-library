import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import CollapsibleContainerMain from '.';

afterEach(cleanup);

describe('<CollapsibleContainerMain />', () => {
    const testMsg = 'Should render Component correctly';
    const collapsibleContainerId = 'fel-collapsible-container-main';
    const containerHeaderId = 'fel-collapsible-container-main-header';
    const containerBodyId = 'fel-collapsible-container-main-body';
    const collapseButtonId = 'fel-collapse-btn';
    const collapseArrowId = 'fel-main-container-collapse-arrow';

    const title = 'My title';
    const bodyHeight = '200px';
    const content = 'Hello world';
    const body = <div>{content}</div>;
    const handleOnClickCollapse = jest.fn();

    test(`${testMsg} with provided default props`, () => {
        const { getByTestId, getByText } = render(
            <CollapsibleContainerMain
                title={title}
                bodyHeight={bodyHeight}
                bodyContent={body}
            />,
        );

        const collapsibleContainer = getByTestId(collapsibleContainerId);
        const collapseButton = getByTestId(collapseButtonId);
        const containerHeader = getByTestId(containerHeaderId);
        const containerBody = getByTestId(containerBodyId);
        const containeTitle = getByText(title);
        const bodyContent = getByText(content);

        expect(collapsibleContainer).toBeTruthy();
        expect(containeTitle).toBeInTheDocument();
        expect(containerHeader).toBeInTheDocument();
        expect(bodyContent).toBeInTheDocument();
        expect(collapseButton).toBeTruthy();
        expect(containerBody).not.toHaveClass('hidden');

        fireEvent.click(collapseButton);

        expect(containerBody).toHaveClass('hidden');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <CollapsibleContainerMain
                title={title}
                bodyHeight={bodyHeight}
                bodyContent={body}
                handleOnClickCollapse={handleOnClickCollapse}
            />,
        );

        const collapsibleContainer = getByTestId(collapsibleContainerId);
        const collapseButton = getByTestId(collapseButtonId);
        const containerHeader = getByTestId(containerHeaderId);
        const containerBody = getByTestId(containerBodyId);
        const containeTitle = getByText(title);
        const bodyContent = getByText(content);

        expect(collapsibleContainer).toBeTruthy();
        expect(collapseButton).toBeTruthy();
        expect(containeTitle).toBeInTheDocument();
        expect(bodyContent).toBeInTheDocument();
        expect(containerHeader).toBeInTheDocument();
        expect(containerBody).not.toHaveClass('hidden');

        fireEvent.click(collapseButton);
        expect(handleOnClickCollapse).toBeCalledWith(-1);
        expect(containerBody).toHaveClass('hidden');

        fireEvent.click(collapseButton);
        expect(handleOnClickCollapse).toBeCalledWith(1);
        expect(containerBody).not.toHaveClass('hidden');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <CollapsibleContainerMain
                title={title}
                bodyHeight={bodyHeight}
                bodyContent={body}
                handleOnClickCollapse={handleOnClickCollapse}
                hasHeaderBorder={true}
            />,
        );

        const collapsibleContainer = getByTestId(collapsibleContainerId);
        const collapseButton = getByTestId(collapseButtonId);
        const containerHeader = getByTestId(containerHeaderId);
        const containerBody = getByTestId(containerBodyId);
        const containeTitle = getByText(title);
        const bodyContent = getByText(content);

        expect(collapsibleContainer).toBeTruthy();
        expect(collapseButton).toBeTruthy();
        expect(containeTitle).toBeInTheDocument();
        expect(containerHeader).toBeInTheDocument();
        expect(containerHeader).toHaveClass('border');
        expect(bodyContent).toBeInTheDocument();
        expect(containerBody).not.toHaveClass('hidden');
    });

    test(`${testMsg} Should have collapse button and arrow and handle onClick`, () => {
        const { getByTestId } = render(
            <CollapsibleContainerMain
                title={title}
                bodyHeight={bodyHeight}
                bodyContent={body}
            />,
        );

        const collapseButton = getByTestId(collapseButtonId);
        const collapseArrow = getByTestId(collapseArrowId);

        expect(collapseButton).toBeTruthy();
        expect(collapseArrow).toBeTruthy();
        expect(collapseArrow).toHaveClass('up');

        fireEvent.click(collapseButton);
        expect(collapseArrow).toHaveClass('down');
    });

    test(`${testMsg} Should have collapse button and arrow and handle onClick`, () => {
        const { getByTestId } = render(
            <CollapsibleContainerMain
                title={title}
                bodyHeight={bodyHeight}
                bodyContent={body}
                isCollapsed={true}
            />,
        );

        const collapseButton = getByTestId(collapseButtonId);
        const collapseArrow = getByTestId(collapseArrowId);

        expect(collapseButton).toBeTruthy();
        expect(collapseArrow).toBeTruthy();
        expect(collapseArrow).toHaveClass('down');

        fireEvent.click(collapseButton);
        expect(collapseArrow).toHaveClass('up');
    });
});
