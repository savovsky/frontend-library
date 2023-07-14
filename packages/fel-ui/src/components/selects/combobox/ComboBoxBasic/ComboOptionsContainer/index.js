// @flow

import React, { useEffect } from 'react';

import str from '../../../../../utils/stringsUtils';
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

    const conditionalContent = () => {
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
