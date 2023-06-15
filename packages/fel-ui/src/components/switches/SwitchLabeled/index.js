// @flow

import React from 'react';

import './index.scss';
import SwitchBasic from '../SwitchBasic';

// TODO Add props validation
// import utils from './utils';

type Props = {
    /** What switch label to use? */
    label: string,
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
    /** Where is the label placement? */
    labelPlacement?: 'top' | 'right' | 'bottom' | 'left',
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-switches-switchlabeled--default)
 */
function SwitchLabeled({
    label,
    inputId,
    handleOnClick,
    mode,
    isOn,
    margin,
    isMockedData,
    dataTestid,
    isDisabled,
    labelPlacement,
    moreProps,
}: Props) {
    // TODO Add propsvalidation
    // useEffect(() => {
    //     utils.propsValidation(inputId, handleOnClick, mode);
    // }, [inputId, handleOnClick, mode]);

    const conditionalClassName = () => {
        const defaultClass = `fel__input-labeled ${String(labelPlacement)}`;

        return isDisabled ? `${defaultClass} disabled` : defaultClass;
    };

    return (
        <div
            data-testid={dataTestid}
            style={{ margin, display: 'inline-block' }}
            {...moreProps}
        >
            <label className={conditionalClassName()} htmlFor={inputId}>
                <SwitchBasic
                    inputId={inputId}
                    handleOnClick={handleOnClick}
                    isOn={isOn}
                    mode={mode}
                    isMockedData={isMockedData}
                    isDisabled={isDisabled}
                />
                <span className="fel__input-labeled_label">{label}</span>
            </label>
        </div>
    );
}

SwitchLabeled.defaultProps = {
    mode: 'primary',
    isOn: false,
    margin: '0',
    isMockedData: false,
    dataTestid: 'fel-switch-labeled',
    isDisabled: false,
    labelPlacement: 'right',
    moreProps: {},
};

export default SwitchLabeled;
