// @flow

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import type { Option } from '../../../../../flowTypes';

type Props = {
    currentOptionId: string,
    options: Array<Option>,
    optionsTextTransform: string,
    handleOnClickOption: Function,
    handleOnKeyPressOption: Function,
    handleOnBlurOptions: Function,
    containerMaxHeight: string,
};

function Options({
    currentOptionId,
    options,
    optionsTextTransform,
    handleOnClickOption,
    handleOnKeyPressOption,
    handleOnBlurOptions,
    containerMaxHeight,
}: Props) {
    const [height, setHeight] = useState('0');

    useEffect(() => {
        setHeight(`${options.length * 36}px`);
    }, [options]);

    const conditionalContent = (optionId: string) => {
        if (optionId === currentOptionId) {
            return <FontAwesomeIcon icon={faCheck} className="fa-check" />;
        }

        return null;
    };

    return (
        <ul
            role="listbox"
            data-testid="fel-combo-box-options-list"
            className="fel__combo-box-options-list"
            style={{ height, maxHeight: containerMaxHeight }}
        >
            {options.map((option: Option, index: number) => {
                const isLastOption = index === options.length - 1;

                return (
                    <li
                        role="option"
                        aria-selected={option.id === currentOptionId}
                        tabIndex="0"
                        key={option.id}
                        style={{ textTransform: optionsTextTransform }}
                        className={
                            option.id === currentOptionId
                                ? 'current-option'
                                : null
                        }
                        onClick={() => handleOnClickOption(option.id)}
                        onKeyPress={(e: SyntheticKeyboardEvent<>) =>
                            handleOnKeyPressOption(e, option.id)
                        }
                        onBlur={() => handleOnBlurOptions(isLastOption)}
                    >
                        <span className="fel__current-option-icon">
                            {conditionalContent(option.id)}
                        </span>
                        <span>{option.value}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default Options;
