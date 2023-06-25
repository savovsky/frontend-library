// @flow

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import './index.scss';

type Props = {
    /** What radio button ID to use? */
    inputId: string,
    /** Handle the onClick event */
    handleOnClick: Function,
    /** Is the radio button selected? */
    isSelected: boolean,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
    /** Is the radio button disabled? */
    isDisabled?: boolean,
    /** What icon size to use? */
    size?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x',
    /** What 'aria-label' label to use? */
    arialabel?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-radiobuttons-radiobuttonbasic--default)
 */
function RadioButtonBasic({
    inputId,
    handleOnClick,
    isSelected,
    margin,
    dataTestid,
    isDisabled,
    size,
    arialabel,
    moreProps,
}: Props) {
    const [isActive, setIsActive] = useState(isSelected);

    useEffect(() => {
        setIsActive(isSelected);
    }, [isSelected]);

    const conditionalClassName = () => {
        const defaultClass = 'fel__checkbox-radio';

        if (isActive) {
            return isDisabled
                ? `${defaultClass} active-radio disabled`
                : `${defaultClass} active-radio`;
        }

        return isDisabled ? `${defaultClass} disabled` : defaultClass;
    };

    const conditionalContent = () => {
        if (isActive) {
            return <FontAwesomeIcon icon={faDotCircle} size={size} />;
        }

        return <FontAwesomeIcon icon={faCircle} size={size} />;
    };

    const handleOnSelect = () => {
        setIsActive(!isActive);
        handleOnClick(inputId);
    };

    const handleOnKeyPress = (e: SyntheticKeyboardEvent<>) => {
        /* istanbul ignore else */
        if (e.key === 'Enter') {
            setIsActive(!isActive);
            handleOnClick(inputId);
        }
    };

    return (
        <span
            data-testid={dataTestid}
            className={conditionalClassName()}
            disabled={isDisabled || isActive}
            style={{ margin }}
            {...moreProps}
        >
            {conditionalContent()}
            <input
                id={inputId}
                type="radio"
                aria-checked={isActive}
                checked={isActive}
                onChange={handleOnSelect}
                onKeyPress={handleOnKeyPress}
                disabled={isDisabled || isActive}
                aria-label={arialabel}
            />
        </span>
    );
}

RadioButtonBasic.defaultProps = {
    margin: '0',
    isDisabled: false,
    size: '1x',
    arialabel: 'Radio button',
    dataTestid: 'fel-radio-button-basic',
    moreProps: {},
};

export default RadioButtonBasic;
