// @flow

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import './index.scss';

// TODO Add props validation
// import utils from './utils';

type Props = {
    /** What checkbox id to use? */
    inputId: string,
    /** Handle the onClick event */
    handleOnClick: Function,
    /** Is the checkbox selected? */
    isSelected?: boolean,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
    /** Is the checkbox disabled? */
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-checkboxes-checkboxbasic--default)
 */
function CheckBoxBasic({
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
    const [isChecked, setIsChecked] = useState(isSelected);

    useEffect(() => {
        setIsChecked(isSelected);
    }, [isSelected]);

    // TODO Add propsvalidation
    // useEffect(() => {
    //     utils.propsValidation(inputId, handleOnClick, size);
    // }, [inputId, handleOnClick, size]);

    const conditionalClassName = () => {
        const defaultClass = 'fel__checkbox-radio';

        if (isChecked) {
            return isDisabled
                ? `${defaultClass} active disabled`
                : `${defaultClass} active`;
        }

        return isDisabled ? `${defaultClass} disabled` : defaultClass;
    };

    const conditionalContent = () => {
        if (isChecked) {
            return <FontAwesomeIcon icon={faCheckSquare} size={size} />;
        }

        return <FontAwesomeIcon icon={faSquare} size={size} />;
    };

    const handleOnSelect = () => {
        handleOnClick(inputId, !isChecked);
        setIsChecked(!isChecked);
    };

    const handleOnKeyPress = (e: SyntheticKeyboardEvent<>) => {
        /* istanbul ignore else */
        if (e.key === 'Enter') {
            handleOnClick(inputId, !isChecked);
            setIsChecked(!isChecked);
        }
    };

    return (
        <span
            data-testid={dataTestid}
            className={conditionalClassName()}
            disabled={isDisabled}
            style={{ margin }}
            {...moreProps}
        >
            {conditionalContent()}
            <input
                id={inputId}
                type="checkbox"
                aria-checked={isChecked}
                checked={isChecked}
                onChange={handleOnSelect}
                onKeyPress={handleOnKeyPress}
                disabled={isDisabled}
                aria-label={arialabel}
            />
        </span>
    );
}

CheckBoxBasic.defaultProps = {
    isSelected: false,
    margin: '0',
    isDisabled: false,
    size: '1x',
    arialabel: 'Checkbox',
    dataTestid: 'fel-check-box-basic',
    moreProps: {},
};

export default CheckBoxBasic;
