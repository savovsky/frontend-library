// @flow

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import type { Option } from '../../../../../flowTypes';

type Props = {
    optionsRef: { current: any },
    currentOptionId: string,
    optionItems: Array<Option>,
    handleOnClickOption: Function,
    handleOnKeyPressOption: Function,
    handleOnClickOutside: Function,
    handleOnBlur: Function,
    optionsContainerMaxHeight?: string,
    textTransform?: string,
};

function Options({
    optionsRef,
    currentOptionId,
    optionItems,
    handleOnClickOption,
    handleOnKeyPressOption,
    handleOnClickOutside,
    handleOnBlur,
    optionsContainerMaxHeight = 'initial',
    textTransform,
}: Props) {
    useEffect(() => {
        document.addEventListener('mousedown', handleOnClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleOnClickOutside);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sizeIndex = optionItems.findIndex(
        (option: Option) => option.id === currentOptionId,
    );

    const conditionalContent = (optionId: string) => {
        if (optionId === currentOptionId) {
            return <FontAwesomeIcon icon={faCheck} className="fa-check" />;
        }

        return null;
    };

    const optionsListStyle = () => {
        if (optionsContainerMaxHeight === 'initial') {
            return {
                bottom: `-${(optionItems.length - 1 - sizeIndex) * 36}px`,
            };
        }

        return {
            maxHeight: `${optionsContainerMaxHeight}`,
            overflowY: 'auto',
            marginTop: '2px',
        };
    };

    return (
        <ul
            role="listbox"
            data-testid="fel-select-options"
            ref={optionsRef}
            className="fel__select-options-list fel__card"
            style={optionsListStyle()}
        >
            {optionItems.map((option: Option, index: number) => {
                const isLastOption = index === optionItems.length - 1;

                return (
                    <li
                        role="option"
                        aria-selected={option.id === currentOptionId}
                        tabIndex="0"
                        key={option.id}
                        style={{ textTransform }}
                        className={
                            option.id === currentOptionId
                                ? 'current-option'
                                : null
                        }
                        onClick={() => handleOnClickOption(option.id)}
                        onKeyPress={(e: SyntheticKeyboardEvent<>) =>
                            handleOnKeyPressOption(e, option.id)
                        }
                        onBlur={() => handleOnBlur(isLastOption)}
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

Options.defaultProps = {
    optionsContainerMaxHeight: 'initial',
    textTransform: 'none',
};

export default Options;
