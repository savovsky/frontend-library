// @flow

import React, { useEffect } from 'react';

import str from '../../../../../utils/stringsUtils';
import LoaderLine from '../../../../loaders/LoaderLine';
import HttpError from '../../../../errors/HttpError';
import Options from '../../Options';

import type { Option } from '../../../../../flowTypes';

type Props = {
    isOptionsHidden: boolean,
    optionsRef: { current: any },
    currentOptionId: string,
    options: Array<Option>,
    optionsTextTransform: string,
    handleOnClickOption: Function,
    handleOnKeyPressOption: Function,
    handleOnClickOutsideOptions: Function,
    handleOnBlurOptions: Function,
    containerMaxHeight: string,
    requestStates: {
        isFetching: boolean,
        isFetchFulfilled: boolean,
        isFetchRejected: boolean,
        fetchError: string,
        isPayloadValid: boolean,
    },
};

function ComboOptionsContainer({
    isOptionsHidden,
    optionsRef,
    currentOptionId,
    options,
    optionsTextTransform,
    handleOnClickOption,
    handleOnKeyPressOption,
    handleOnClickOutsideOptions,
    handleOnBlurOptions,
    containerMaxHeight,
    requestStates,
}: Props) {
    useEffect(() => {
        document.addEventListener('mousedown', handleOnClickOutsideOptions);

        return () =>
            document.removeEventListener(
                'mousedown',
                handleOnClickOutsideOptions,
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        isFetching,
        isFetchFulfilled,
        isFetchRejected,
        fetchError,
        isPayloadValid,
    } = requestStates;

    const conditionalContent = () => {
        if (isFetching) {
            return (
                <div style={{ margin: '15px 0' }}>
                    <LoaderLine />
                </div>
            );
        } else if (isFetchRejected) {
            return (
                <HttpError
                    error={fetchError}
                    moreProps={{
                        style: {
                            margin: '15px 20px',
                            fontSize: '13px',
                            lineHeight: 1.4,
                        },
                    }}
                />
            );
        } else if (isFetchFulfilled && !isPayloadValid) {
            return <HttpError error={str.invalidPayload} margin="15px 20px" />;
        } else if (isFetchFulfilled && isPayloadValid) {
            if (options.length === 0) {
                return (
                    <div className="fel__combo-options-no-matches">
                        {str.noMatches}
                    </div>
                );
            }

            return (
                <Options
                    currentOptionId={currentOptionId}
                    options={options}
                    optionsTextTransform={optionsTextTransform}
                    handleOnClickOption={handleOnClickOption}
                    handleOnKeyPressOption={handleOnKeyPressOption}
                    handleOnBlurOptions={handleOnBlurOptions}
                    containerMaxHeight={containerMaxHeight}
                />
            );
        }

        return null;
    };

    return (
        <>
            {!isOptionsHidden && (
                <div
                    ref={optionsRef}
                    data-testid="fel-combo-options-container"
                    className="fel__combo-options-container fel__card"
                >
                    {conditionalContent()}
                </div>
            )}
        </>
    );
}

export default ComboOptionsContainer;
