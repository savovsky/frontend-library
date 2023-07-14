// @flow

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

import str from '../../../../utils/stringsUtils';
import commonUtils from '../../../../../../fel-js-utils/src/commonUtils';

type Props = {
    isOptionsHidden: boolean,
    textInputRef: { current: any },
    textInputBtnRef: { current: any },
    label: string,
    value: string,
    handleTextInputOnClick: Function,
    handleTextInputOnChange: Function,
    handleOnClickTextInputButton: Function,
    isDisabled: boolean,
    error: string,
};

const { stringToId } = commonUtils;

function ComboTextInput({
    isOptionsHidden,
    textInputRef,
    textInputBtnRef,
    label,
    value,
    handleTextInputOnClick,
    handleTextInputOnChange,
    handleOnClickTextInputButton,
    isDisabled,
    error,
}: Props) {
    useEffect(() => {
        if (!isDisabled && !isOptionsHidden) {
            textInputRef.current.focus();
        }
    }, [isDisabled, textInputRef, isOptionsHidden]);

    const handleOnClick = (e: SyntheticInputEvent<>) => {
        handleTextInputOnClick();
        e.target.select();
    };

    const conditionalClassNameDisabled = (defaultClass: string) => {
        return isDisabled ? `${defaultClass} disabled` : defaultClass;
    };

    const conditionalClassNameError = (defaultClass: string) => {
        return error ? `${defaultClass} error` : defaultClass;
    };

    const inputId = stringToId(label);

    const conditionalContent = () => {
        if (isOptionsHidden) {
            return <FontAwesomeIcon icon={faSortDown} className="fa-down" />;
        }

        return <FontAwesomeIcon icon={faSortUp} className="fa-up" />;
    };

    return (
        <div
            data-testid="fel-combo-text-input-container"
            className="fel__text-input_container combo-box"
        >
            <div
                className={conditionalClassNameDisabled(
                    'fel__text-input_wrapper',
                )}
            >
                <label
                    htmlFor={inputId}
                    className={conditionalClassNameError(
                        'fel__text-input_label',
                    )}
                >
                    {label}
                </label>
                <input
                    data-testid="fel-text-input"
                    id={inputId}
                    type="text"
                    ref={textInputRef}
                    name={label}
                    value={value}
                    className={conditionalClassNameError('fel__text-input')}
                    autoComplete="off"
                    onClick={handleOnClick}
                    onChange={handleTextInputOnChange}
                    maxLength={15}
                    disabled={isDisabled}
                    placeholder={str.selectOption}
                />
                <button
                    aria-label="Icons button toggles open-close options container"
                    type="button"
                    data-testid="fel-display-options-btn"
                    ref={textInputBtnRef}
                    className={conditionalClassNameDisabled(
                        'fel__combo-text-input-button',
                    )}
                    onClick={handleOnClickTextInputButton}
                    disabled={isDisabled}
                >
                    {conditionalContent()}
                </button>
            </div>
            <div className="fel__text-input_error-msg">{error}</div>
        </div>
    );
}

export default ComboTextInput;
