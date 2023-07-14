// @flow

import React, { useState, useEffect, useRef } from 'react';

import './index.scss';

import DisplayedOption from './DisplayedOption';
import Options from './Options';

import type { Option } from '../../../../flowTypes';

type Props = {
    /** What SelectBasic id to use? */
    selectId: string,
    /** What SelectBasic label to use? */
    label: string,
    /** What collection of items to use for the options?
     *
     * `type Option = { id: string, value: string }`
     * */
    optionItems: Array<Option>,
    /** What is the SelectBasic current option id? */
    currentOptionId: string,
    /** Handle the selected option - onSelect event */
    handleSelectedOption: Function,
    /** Is the SelectBasic disabled? */
    isDisabled?: boolean,
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
    /** What CSS 'width' value to use? *(Provide units, e.g. px)* */
    width?: string,
    /** What CSS 'max-height' value to use? *(Provide units, e.g. px)* */
    optionsContainerMaxHeight?: string,
    /** What CSS 'text-transform' value to use for the options? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    optionsTextTransform?: string,
    /** Are the options mock? */
    isMockedData?: boolean,
    /** What placeholder to use, when no initial selected item? */
    placeholder?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-selects-select-selectbasic--default)
 */
function SelectBasic({
    selectId,
    label,
    optionItems,
    currentOptionId,
    handleSelectedOption,
    isDisabled,
    dataTestid,
    width,
    optionsContainerMaxHeight,
    optionsTextTransform,
    isMockedData,
    placeholder,
    moreProps,
}: Props) {
    const optionsRef = useRef();
    const [isOptionsHidden, setIsOptionsHidden] = useState(true);
    const [selectedOptionId, setSelectedOptionId] = useState(currentOptionId);

    useEffect(() => {
        setSelectedOptionId(currentOptionId);
    }, [currentOptionId]);

    const handleOnClickOption = (optionId: string) => {
        if (!isDisabled) {
            setIsOptionsHidden(!isOptionsHidden);
            setSelectedOptionId(optionId);
            handleSelectedOption(selectId, optionId);
        }
    };

    const handleOnKeyPressOption = (
        e: SyntheticKeyboardEvent<>,
        optionId: string,
    ) => {
        setIsOptionsHidden(!isOptionsHidden);

        /* istanbul ignore else */
        if (e.key === 'Enter') {
            setSelectedOptionId(optionId);
            handleSelectedOption(selectId, optionId);
        }
    };

    const handleOnClickSelect = () => {
        /* istanbul ignore else */
        if (optionItems.length > 0) {
            setIsOptionsHidden(!isOptionsHidden);
        }
    };

    const handleOnKeyPressSelect = (e: SyntheticKeyboardEvent<>) => {
        /* istanbul ignore else */
        if (e.key === 'Enter') {
            setIsOptionsHidden(!isOptionsHidden);
        }
    };

    const handleOnClickOutside = (e: SyntheticMouseEvent<HTMLDivElement>) => {
        /* istanbul ignore else */
        if (optionsRef.current && !optionsRef.current.contains(e.target)) {
            setIsOptionsHidden(!isOptionsHidden);
        }
    };

    const handleOnBlur = (isLastOption: boolean) => {
        /* istanbul ignore else */
        if (isLastOption) {
            setIsOptionsHidden(!isOptionsHidden);
        }
    };

    const conditionalClassName = () => {
        const defaultClass = 'fel__select-wrapper';

        return isMockedData ? `${defaultClass} mockup` : defaultClass;
    };

    return (
        <div
            data-testid={dataTestid}
            className={conditionalClassName()}
            style={{ width }}
            {...moreProps}
        >
            <DisplayedOption
                isOptionsHidden={isOptionsHidden}
                label={label}
                currentOptionId={selectedOptionId}
                optionItems={optionItems}
                isDisabled={!!isDisabled}
                handleOnClickSelect={handleOnClickSelect}
                handleOnKeyPressSelect={handleOnKeyPressSelect}
                placeholder={placeholder || ''}
            />
            {isOptionsHidden || (
                <Options
                    optionsRef={optionsRef}
                    currentOptionId={selectedOptionId}
                    optionItems={optionItems}
                    handleOnClickOption={handleOnClickOption}
                    handleOnKeyPressOption={handleOnKeyPressOption}
                    handleOnClickOutside={handleOnClickOutside}
                    handleOnBlur={handleOnBlur}
                    optionsContainerMaxHeight={optionsContainerMaxHeight}
                    textTransform={optionsTextTransform}
                />
            )}
        </div>
    );
}

SelectBasic.defaultProps = {
    isDisabled: false,
    dataTestid: 'fel-select-basic',
    width: 'initial',
    optionsContainerMaxHeight: 'initial',
    optionsTextTransform: 'none',
    isMockedData: false,
    placeholder: '',
    moreProps: {},
};

export default SelectBasic;
