// @flow

import React, { useState, useEffect } from 'react';

import './index.scss';

// TODO Add props validation
// import utils from './utils';

type Props = {
    /** What switch id to use? */
    inputId: string,
    /** Handle the onClick event */
    handleOnClick: Function,
    /** What switch style to use? */
    mode?: 'primary' | 'secondary' | 'tertiary',
    /** Is the switch ON? */
    isOn?: boolean,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** Is the item mocked? */
    isMockedData?: boolean,
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
    /** Is the switch disabled? */
    isDisabled?: boolean,
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

const primary = 'primary';
const secondary = 'secondary';
const tertiary = 'tertiary';

/**
 * Component props: check Storybook
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-switches-switchbasic--default)
 */
function SwitchBasic({
    inputId,
    handleOnClick,
    mode,
    isOn,
    margin,
    isMockedData,
    dataTestid,
    isDisabled,
    arialabel,
    moreProps,
}: Props) {
    const [isChecked, setIsChecked] = useState(isOn);

    useEffect(() => {
        setIsChecked(isOn);
    }, [isOn]);

    // TODO Add propsvalidation
    // useEffect(() => {
    //     utils.propsValidation(inputId, handleOnClick, mode);
    // }, [inputId, handleOnClick, mode]);

    const conditionalClassName = () => {
        const defaultClass = 'fel__switch';

        return isDisabled ? `${defaultClass} disabled` : defaultClass;
    };

    const conditionalClass = () => {
        const defaultClass = 'fel__switch-track';

        if (isChecked) {
            if (mode === secondary) {
                return isMockedData
                    ? `${defaultClass} on ${secondary} mockup`
                    : `${defaultClass} on ${secondary}`;
            } else if (mode === tertiary) {
                return isMockedData
                    ? `${defaultClass} on ${tertiary} mockup`
                    : `${defaultClass} on ${tertiary}`;
            } else {
                return isMockedData
                    ? `${defaultClass} on ${primary} mockup`
                    : `${defaultClass} on ${primary}`;
            }
        }

        if (mode === secondary) {
            return isMockedData
                ? `${defaultClass} ${secondary} mockup`
                : `${defaultClass} ${secondary}`;
        } else if (mode === tertiary) {
            return isMockedData
                ? `${defaultClass} ${tertiary} mockup`
                : `${defaultClass} ${tertiary}`;
        } else {
            return isMockedData
                ? `${defaultClass} ${primary} mockup`
                : `${defaultClass} ${primary}`;
        }
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
        <div
            data-testid={dataTestid}
            className={conditionalClassName()}
            disabled={isDisabled}
            style={{ margin }}
            {...moreProps}
        >
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
            <div className={conditionalClass()} />
        </div>
    );
}

SwitchBasic.defaultProps = {
    mode: primary,
    isOn: false,
    margin: '0',
    isMockedData: false,
    dataTestid: 'fel-switch-basic',
    isDisabled: false,
    arialabel: 'Toggle Switch',
    moreProps: {},
};

export default SwitchBasic;
