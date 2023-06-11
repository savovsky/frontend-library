// @flow

import React from 'react';

import './index.scss';

// TODO Add props validation
// import utils from './utils';
import CheckBoxBasic from '../CheckBoxBasic';

type Props = {
    /** What checkbox label to use? */
    label: string,
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
    iconSize?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x',
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-checkboxes-checkboxlabeled--default)
 */
function CheckBoxLabeled({
    label,
    inputId,
    handleOnClick,
    isSelected,
    margin,
    dataTestid,
    isDisabled,
    iconSize,
    labelPlacement,
    moreProps,
}: Props) {
    // TODO Add propsvalidation
    // useEffect(() => {
    //     utils.propsValidation(label, inputId, handleOnClick, iconSize, labelPlacement);
    // }, [label, inputId, handleOnClick, iconSize, labelPlacement]);

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
                <CheckBoxBasic
                    inputId={inputId}
                    handleOnClick={handleOnClick}
                    isSelected={isSelected}
                    isDisabled={isDisabled}
                    size={iconSize}
                />
                <span className="fel__input-labeled_label">{label}</span>
            </label>
        </div>
    );
}

CheckBoxLabeled.defaultProps = {
    isSelected: false,
    margin: '0',
    isDisabled: false,
    iconSize: '1x',
    labelPlacement: 'right',
    dataTestid: 'fel-check-box-labeled',
    moreProps: {},
};

export default CheckBoxLabeled;
