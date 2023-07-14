// @flow

import React, { useState, useEffect, useRef } from 'react';

import './index.scss';

import str from '../../../../utils/stringsUtils';
import ComboTextInput from '../ComboTextInput';
import ComboOptionsContainer from './ComboOptionsContainer';

import type { Option } from '../../../../flowTypes';

type Props = {
    /** What Combo-Box id to use? */
    inputId: string,
    /** What Combo-Box label to use? */
    label: string,
    /** What collection of items to use for the options?
     *
     *  API response payload => 'optionItems'
     *
     * `type Option = { id: string, value: string }`
     * */
    optionItems: Array<Option>,
    /** Handle the Combo-Box option onSelect event */
    handleComboOnOptionSelect: Function,
    /** Handle the Combo-Box text-input onChange event */
    handleComboTextInputOnChange: Function,
    /** Fetch data action */
    fetchData: Function,
    /** Is fetching data? */
    isFetching: boolean,
    /** Is fetch data action fulfilled? */
    isFetchFulfilled: boolean,
    /** Is fetch data action rejected? */
    isFetchRejected: boolean,
    /** HTTP error message */
    fetchError: string,
    /** Does the received API payload match the model? */
    isPayloadValid: boolean,
    /** Is the Combo-Box disabled? */
    isDisabled?: boolean,
    /** What is the Combo-Box current option id? */
    currentOptionId?: string,
    /** What CSS 'max-width' value to use for the container? *(Provide units, e.g. px)* */
    maxWidth?: string,
    /** What CSS 'text-transform' value to use for the options? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    optionsTextTransform?: string,
    /** What CSS 'max-height' value to use for the options container? *(Provide units, e.g. px)* */
    optionsContainerMaxHeight?: string,
    /** Validation Error - when an option is not selected after filtering */
    validationErrorInternal?: string,
    /** Validation Error - when outside handling (global state store) */
    validationError?: string,
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
    /** Are the options mock? */
    isMockedData?: boolean,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-selects-combobox-comboboxfetch--default)
 */
function ComboBoxFetch({
    inputId,
    label,
    optionItems,
    handleComboOnOptionSelect,
    handleComboTextInputOnChange,
    fetchData,
    isFetching,
    isFetchFulfilled,
    isFetchRejected,
    fetchError,
    isPayloadValid,
    isDisabled,
    currentOptionId,
    maxWidth,
    optionsTextTransform,
    optionsContainerMaxHeight,
    validationErrorInternal,
    validationError,
    dataTestid,
    isMockedData,
    moreProps,
}: Props) {
    const optionsRef = useRef(null);
    const textInputRef = useRef(null);
    const textInputBtnRef = useRef(null);

    const [options, setOptions] = useState(optionItems);
    const [selectedOptionId, setSelectedOptionId] = useState(currentOptionId);
    const [value, setValue] = useState(optionValueByOptionId(selectedOptionId));
    const [isOptionsHidden, setIsOptionsHidden] = useState(true);
    const [error, setError] = useState(validationError);

    useEffect(() => {
        if (isDisabled) {
            setError('');
        } else {
            setError(validationError);
        }
    }, [validationError, isDisabled]);

    useEffect(() => {
        if (selectedOptionId === '' && isOptionsHidden && !isDisabled) {
            setOptions(optionItems);
            setError(validationError);
        }

        if (
            selectedOptionId === '' &&
            value !== '' &&
            isOptionsHidden &&
            !isDisabled
        ) {
            setOptions(optionItems);
            setError(validationErrorInternal);
        }
    }, [
        selectedOptionId,
        isOptionsHidden,
        optionItems,
        isDisabled,
        validationErrorInternal,
        validationError,
        value,
    ]);

    useEffect(() => {
        setOptions(optionItems);
    }, [optionItems]);

    useEffect(() => {
        setValue(optionValueByOptionId(currentOptionId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentOptionId]);

    const requestStates = {
        isFetching,
        isFetchFulfilled,
        isFetchRejected,
        fetchError,
        isPayloadValid,
    };

    // Hoisting
    function optionValueByOptionId(optionId: string) {
        const item = optionItems.find(
            (option: Option) => option.id === optionId,
        );

        return item ? item.value : '';
    }

    const filterOptions = (query: string) => {
        return optionItems.filter(
            (option: Option) =>
                option.value.toLowerCase().indexOf(query.toLowerCase()) > -1,
        );
    };

    const handleTextInputOnClick = () => {
        /* istanbul ignore else */
        if (isOptionsHidden && !isPayloadValid) {
            fetchData();
        }

        if (options.length === 0) {
            setOptions(optionItems);
        }

        setIsOptionsHidden(false);
        setError('');
    };

    const handleTextInputOnChange = (e: SyntheticInputEvent<>) => {
        const inputValue = e.target.value;

        handleComboTextInputOnChange(inputId);
        setValue(inputValue);
        setOptions(filterOptions(inputValue));
        setError('');
        setSelectedOptionId('');
    };

    const handleOnClickTextInputButton = () => {
        setIsOptionsHidden(!isOptionsHidden);

        if (textInputRef.current && isOptionsHidden) {
            textInputRef.current.focus();
        }
    };

    const handleSelectedOption = (optionId: string) => {
        const item = options.find((option: Option) => option.id === optionId);

        setValue(item ? item.value : '');
        setOptions(optionItems);
        handleComboOnOptionSelect(inputId, optionId);
        setError('');
        setSelectedOptionId(optionId);
    };

    const handleOnClickOption = (optionId: string) => {
        setIsOptionsHidden(true);
        handleSelectedOption(optionId);
    };

    const handleOnKeyPressOption = (
        e: SyntheticKeyboardEvent<>,
        optionId: string,
    ) => {
        setIsOptionsHidden(true);

        /* istanbul ignore else */
        if (e.key === 'Enter') {
            handleSelectedOption(optionId);
        }
    };

    const handleOnClickOutsideOptions = (
        e: SyntheticMouseEvent<HTMLDivElement>,
    ) => {
        /* istanbul ignore else */
        if (
            optionsRef.current &&
            textInputRef.current &&
            textInputBtnRef.current &&
            !optionsRef.current.contains(e.target) &&
            !textInputRef.current.contains(e.target) &&
            !textInputBtnRef.current.contains(e.target)
        ) {
            setIsOptionsHidden(true);
        }
    };

    const handleOnBlurOptions = (isLastOption: boolean) => {
        /* istanbul ignore else */
        if (isLastOption) {
            setIsOptionsHidden(true);
        }
    };

    const isTextInputDisabled = () => {
        if (
            isDisabled ||
            (!isOptionsHidden && isFetching) ||
            (!isOptionsHidden && isFetchRejected) ||
            (!isOptionsHidden && isFetchFulfilled && !isPayloadValid)
        ) {
            return true;
        }

        return false;
    };

    const conditionalClassName = () => {
        const defaultClass = 'fel__combo-box-wrapper';

        return isMockedData ? `${defaultClass} mockup` : defaultClass;
    };

    return (
        <div
            data-testid={dataTestid}
            className={conditionalClassName()}
            style={{ maxWidth }}
            {...moreProps}
        >
            <ComboTextInput
                isOptionsHidden={isOptionsHidden}
                textInputRef={textInputRef}
                textInputBtnRef={textInputBtnRef}
                label={label}
                value={value}
                handleTextInputOnClick={handleTextInputOnClick}
                handleTextInputOnChange={handleTextInputOnChange}
                handleOnClickTextInputButton={handleOnClickTextInputButton}
                isDisabled={isTextInputDisabled()}
                error={error || ''}
            />
            <ComboOptionsContainer
                isOptionsHidden={isOptionsHidden}
                optionsRef={optionsRef}
                currentOptionId={selectedOptionId}
                options={options}
                optionsTextTransform={optionsTextTransform || 'none'}
                handleOnClickOption={handleOnClickOption}
                handleOnKeyPressOption={handleOnKeyPressOption}
                handleOnClickOutsideOptions={handleOnClickOutsideOptions}
                handleOnBlurOptions={handleOnBlurOptions}
                containerMaxHeight={String(optionsContainerMaxHeight)}
                requestStates={requestStates}
            />
        </div>
    );
}

ComboBoxFetch.defaultProps = {
    isDisabled: false,
    currentOptionId: '',
    maxWidth: 'initial',
    optionsTextTransform: 'none',
    optionsContainerMaxHeight: '250px',
    validationErrorInternal: str.selectOptionOrClearInput,
    validationError: '',
    dataTestid: 'fel-combo-box-fetch',
    isMockedData: false,
    moreProps: {},
};

export default ComboBoxFetch;
