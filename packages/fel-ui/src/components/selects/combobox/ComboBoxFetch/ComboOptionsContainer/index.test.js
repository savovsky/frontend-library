import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import str from '../../../../../utils/stringsUtils';
import ComboOptionsContainer from '.';

afterEach(cleanup);

describe('<ComboOptionsContainer />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-combo-options-container';

    const currentOptionId = '2';
    const options = [
        { id: '1', value: 'option 1' },
        { id: '2', value: 'option 2' },
        { id: '3', value: 'option 3' },
    ];
    const containerMaxHeight = '200px';
    const handleOnClickOption = jest.fn();
    const handleOnKeyPressOption = jest.fn();
    const handleOnClickOutsideOptions = jest.fn();
    const handleOnBlurOptions = jest.fn();

    test(`${testMsg} with provided props`, () => {
        const requestStates = {
            isFetching: false,
            isFetchFulfilled: true,
            isFetchRejected: false,
            fetchError: '',
            isPayloadValid: true,
        };

        const { getByTestId, getByText } = render(
            <ComboOptionsContainer
                isOptionsHidden={false}
                currentOptionId={currentOptionId}
                options={options}
                handleOnClickOption={handleOnClickOption}
                handleOnKeyPressOption={handleOnKeyPressOption}
                handleOnClickOutsideOptions={handleOnClickOutsideOptions}
                handleOnBlurOptions={handleOnBlurOptions}
                containerMaxHeight={containerMaxHeight}
                requestStates={requestStates}
            />,
        );

        const optionItems = getByTestId(componentId);

        expect(optionItems).toBeTruthy();

        expect(getByText('option 1')).toBeInTheDocument();
        expect(getByText('option 2')).toBeInTheDocument();
        expect(getByText('option 3')).toBeInTheDocument();

        fireEvent.mouseDown(document);

        expect(handleOnClickOutsideOptions).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const requestStates = {
            isFetching: false,
            isFetchFulfilled: false,
            isFetchRejected: false,
            fetchError: '',
            isPayloadValid: false,
        };

        const { queryByTestId, queryByText } = render(
            <ComboOptionsContainer
                isOptionsHidden={true}
                currentOptionId={currentOptionId}
                options={options}
                handleOnClickOption={handleOnClickOption}
                handleOnKeyPressOption={handleOnKeyPressOption}
                handleOnClickOutsideOptions={handleOnClickOutsideOptions}
                handleOnBlurOptions={handleOnBlurOptions}
                containerMaxHeight={containerMaxHeight}
                requestStates={requestStates}
            />,
        );

        const optionItems = queryByTestId(componentId);

        expect(optionItems).toBeNull();

        expect(queryByText('option 1')).not.toBeInTheDocument();
        expect(queryByText('option 2')).not.toBeInTheDocument();
        expect(queryByText('option 3')).not.toBeInTheDocument();

        fireEvent.mouseDown(document);

        expect(handleOnClickOutsideOptions).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const requestStates = {
            isFetching: true,
            isFetchFulfilled: false,
            isFetchRejected: false,
            fetchError: '',
            isPayloadValid: false,
        };

        const { getByTestId } = render(
            <ComboOptionsContainer
                isOptionsHidden={false}
                currentOptionId=""
                options={[]}
                handleOnClickOption={handleOnClickOption}
                handleOnKeyPressOption={handleOnKeyPressOption}
                handleOnClickOutsideOptions={handleOnClickOutsideOptions}
                handleOnBlurOptions={handleOnBlurOptions}
                containerMaxHeight={containerMaxHeight}
                requestStates={requestStates}
            />,
        );

        const optionItems = getByTestId(componentId);
        const loader = getByTestId('fel-loader-line');

        expect(optionItems).toBeTruthy();
        expect(loader).toBeTruthy();

        fireEvent.mouseDown(document);

        expect(handleOnClickOutsideOptions).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const fetchError = 'some error';

        const requestStates = {
            isFetching: false,
            isFetchFulfilled: false,
            isFetchRejected: true,
            fetchError,
            isPayloadValid: false,
        };

        const { getByTestId, queryByTestId, getByText } = render(
            <ComboOptionsContainer
                isOptionsHidden={false}
                currentOptionId=""
                options={[]}
                handleOnClickOption={handleOnClickOption}
                handleOnKeyPressOption={handleOnKeyPressOption}
                handleOnClickOutsideOptions={handleOnClickOutsideOptions}
                handleOnBlurOptions={handleOnBlurOptions}
                containerMaxHeight={containerMaxHeight}
                requestStates={requestStates}
            />,
        );

        const optionItems = getByTestId(componentId);
        const loader = queryByTestId('fel-loader-line');
        const error = getByText(fetchError);

        expect(optionItems).toBeTruthy();
        expect(loader).toBeNull();
        expect(error).toBeInTheDocument();

        fireEvent.mouseDown(document);

        expect(handleOnClickOutsideOptions).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const requestStates = {
            isFetching: false,
            isFetchFulfilled: true,
            isFetchRejected: false,
            fetchError: '',
            isPayloadValid: false,
        };

        const { getByTestId, queryByTestId, getByText } = render(
            <ComboOptionsContainer
                isOptionsHidden={false}
                currentOptionId=""
                options={[]}
                handleOnClickOption={handleOnClickOption}
                handleOnKeyPressOption={handleOnKeyPressOption}
                handleOnClickOutsideOptions={handleOnClickOutsideOptions}
                handleOnBlurOptions={handleOnBlurOptions}
                containerMaxHeight={containerMaxHeight}
                requestStates={requestStates}
            />,
        );

        const optionItems = getByTestId(componentId);
        const loader = queryByTestId('fel-loader-line');
        const error = getByText(str.invalidPayload);

        expect(optionItems).toBeTruthy();
        expect(loader).toBeNull();
        expect(error).toBeInTheDocument();

        fireEvent.mouseDown(document);

        expect(handleOnClickOutsideOptions).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const requestStates = {
            isFetching: false,
            isFetchFulfilled: true,
            isFetchRejected: false,
            fetchError: '',
            isPayloadValid: true,
        };

        const { getByTestId, queryByTestId, getByText } = render(
            <ComboOptionsContainer
                isOptionsHidden={false}
                currentOptionId=""
                options={[]}
                handleOnClickOption={handleOnClickOption}
                handleOnKeyPressOption={handleOnKeyPressOption}
                handleOnClickOutsideOptions={handleOnClickOutsideOptions}
                handleOnBlurOptions={handleOnBlurOptions}
                containerMaxHeight={containerMaxHeight}
                requestStates={requestStates}
            />,
        );

        const optionItems = getByTestId(componentId);
        const loader = queryByTestId('fel-loader-line');
        const message = getByText(str.noMatches);

        expect(optionItems).toBeTruthy();
        expect(loader).toBeNull();
        expect(message).toBeInTheDocument();

        fireEvent.mouseDown(document);

        expect(handleOnClickOutsideOptions).toHaveBeenCalled();
    });

    test(`${testMsg} with provided props`, () => {
        const requestStates = {
            isFetching: false,
            isFetchFulfilled: false,
            isFetchRejected: false,
            fetchError: '',
            isPayloadValid: true,
        };

        const { getByTestId } = render(
            <ComboOptionsContainer
                isOptionsHidden={false}
                currentOptionId=""
                options={[]}
                handleOnClickOption={handleOnClickOption}
                handleOnKeyPressOption={handleOnKeyPressOption}
                handleOnClickOutsideOptions={handleOnClickOutsideOptions}
                handleOnBlurOptions={handleOnBlurOptions}
                containerMaxHeight={containerMaxHeight}
                requestStates={requestStates}
            />,
        );

        const optionItems = getByTestId(componentId);

        expect(optionItems).toBeTruthy();
    });
});
