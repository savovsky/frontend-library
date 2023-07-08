// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

import type { Option } from '../../../../../flowTypes';

type Props = {
    isOptionsHidden: boolean,
    label: string,
    currentOptionId: string,
    optionItems: Array<Option>,
    isDisabled: boolean,
    handleOnClickSelect: Function,
    handleOnKeyPressSelect: Function,
    placeholder: string,
};

function DisplayedOption({
    isOptionsHidden,
    label,
    currentOptionId,
    optionItems,
    isDisabled,
    handleOnClickSelect,
    handleOnKeyPressSelect,
    placeholder,
}: Props) {
    const handleOnClick = () => {
        if (!isDisabled) {
            handleOnClickSelect();
        }
    };

    const handleOnKeyPress = (e: SyntheticKeyboardEvent<>) => {
        if (!isDisabled) {
            handleOnKeyPressSelect(e);
        }
    };

    const getOptionValue = () => {
        const item = optionItems.find(
            (option: Option) => option.id === currentOptionId,
        );

        return item ? item.value : placeholder;
    };

    const conditionalClassNameDisabled = (defaultClass: string) => {
        return isDisabled ? `${defaultClass} disabled` : defaultClass;
    };

    const conditionalClassName = () => {
        if (getOptionValue() === placeholder) {
            return 'fel__select_placeholder';
        }

        return '';
    };

    const conditionalContent = () => {
        if (isOptionsHidden) {
            return (
                <FontAwesomeIcon
                    icon={faSortDown}
                    size="lg"
                    className="fa-select-down"
                />
            );
        }

        return (
            <FontAwesomeIcon
                icon={faSortUp}
                size="lg"
                className="fa-select-up"
            />
        );
    };

    return (
        <>
            <div
                className={conditionalClassNameDisabled('fel__select_label')}
                onClick={handleOnClick}
                onKeyPress={handleOnKeyPress}
            >
                {label}
            </div>
            <div
                role="button"
                aria-haspopup="listbox"
                aria-label="Select option"
                data-testid="fel-select-displayed-option"
                tabIndex={isDisabled ? '-1' : '0'}
                className={conditionalClassNameDisabled(
                    'fel__select_displayed-option-wrapper',
                )}
                onClick={handleOnClick}
                onKeyPress={handleOnKeyPress}
            >
                <div className={conditionalClassName()}>{getOptionValue()}</div>
                {conditionalContent()}
            </div>
        </>
    );
}

export default DisplayedOption;
