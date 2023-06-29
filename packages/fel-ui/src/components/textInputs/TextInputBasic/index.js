// @flow

import React from 'react';

import './index.scss';

type Props = {
    /** What text-input  id to use? */
    inputId: string,
    /** What text-input label to use? */
    label: string,
    /** What text-input value to use? *(initial value)* */
    value: string,
    /** What text-input validation error to use? */
    validationError?: string,
    /** Is the text-input disabled? */
    isDisabled?: boolean,
    /** Is the text-input initially on focus? */
    hasAutoFocus?: boolean,
    /** What CSS 'width' value to use? *(Provide units, e.g. px)* */
    width?: string,
    /** What text-input chars max-length to use? */
    maxLength?: string,
    /** What text-input placeholder to use? */
    placeholder?: string,
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
    /** Handle the text-input onBlur event */
    handleTextInputOnBlur?: Function,
    /** Handle the text-input onChange event */
    handleTextInputOnChange?: Function,
    /** An object with KVPs that will be spread as props (applied) to the 'parent' node.
     * Use this object for `'area-*'`, `'ref'`, etc.
     * This is the Component "backdoor".
     *
     * Note: If you use this prop for providing inline styling via `'style'`,
     * be aware that all exposed component's properties related to CSS will be overwritten (reset).
     * */
    moreProps?: Object,
};

/**
 * Component props: check Storybook
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-textinputs-textinputbasic--default)
 */
function TextInputBasic({
    inputId,
    label,
    value,
    validationError,
    isDisabled,
    hasAutoFocus,
    width,
    maxLength,
    placeholder,
    dataTestid,
    handleTextInputOnBlur,
    handleTextInputOnChange,
    moreProps,
}: Props) {
    const handleOnBlur = () => {
        /* istanbul ignore else */
        if (handleTextInputOnChange && value.trim().length === 0) {
            handleTextInputOnChange(inputId, '');
        } else if (handleTextInputOnBlur) {
            handleTextInputOnBlur(inputId);
        }
    };

    const handleOnChange = (e: SyntheticInputEvent<>) => {
        e.preventDefault();
        /* istanbul ignore else */
        if (handleTextInputOnChange) {
            handleTextInputOnChange(inputId, e.target.value);
        }
    };

    const conditionalClassNameError = (defaultClass: string) => {
        return validationError && !isDisabled
            ? `${defaultClass} error`
            : defaultClass;
    };

    const conditionalClassNameDisabled = (defaultClass: string) => {
        return isDisabled ? `${defaultClass} disabled` : defaultClass;
    };

    return (
        <div
            data-testid={dataTestid}
            className="fel__text-input_container"
            style={{ width }}
            {...moreProps}
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
                    name={label}
                    value={value}
                    className={conditionalClassNameError('fel__text-input')}
                    autoComplete="off"
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus={hasAutoFocus}
                />
            </div>
            <div className="fel__text-input_error-msg">
                {!isDisabled ? validationError : null}
            </div>
        </div>
    );
}

TextInputBasic.defaultProps = {
    validationError: '',
    isDisabled: false,
    hasAutoFocus: false,
    width: 'initial',
    maxLength: 26,
    placeholder: '',
    dataTestid: 'fel-text-input-basic',
    // eslint-disable-next-line no-unused-vars
    handleTextInputOnBlur: (inputId: string) => {},
    // eslint-disable-next-line no-unused-vars
    handleTextInputOnChange: (inputId: string, inputValue: string) => {},
    moreProps: {},
};

export default TextInputBasic;
