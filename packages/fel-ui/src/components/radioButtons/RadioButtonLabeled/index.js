// @flow

import * as React from 'react';

import './index.scss';

import RadioButtonBasic from '../RadioButtonBasic';

type Props = {
    /** What radio button label (content) to use? */
    content: string | React.Node,
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
    iconSize?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x',
    /** Where is the label (content) placement? */
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-radiobuttons-radiobuttonlabeled--active)
 */
function RadioButtonLabeled({
    content,
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
    const conditionalClassName = () => {
        const defaultClass = `fel__input-labeled ${String(labelPlacement)}`;

        if (isSelected) {
            return isDisabled
                ? `${defaultClass} active-radio disabled`
                : `${defaultClass} active-radio`;
        }

        return isDisabled ? `${defaultClass} disabled` : defaultClass;
    };

    return (
        <div
            data-testid={dataTestid}
            style={{ margin, display: 'inline-block' }}
            {...moreProps}
        >
            <label className={conditionalClassName()} htmlFor={inputId}>
                <RadioButtonBasic
                    inputId={inputId}
                    handleOnClick={handleOnClick}
                    isSelected={isSelected}
                    isDisabled={isDisabled}
                    size={iconSize}
                />
                <span className="fel__input-labeled_label">{content}</span>
            </label>
        </div>
    );
}

RadioButtonLabeled.defaultProps = {
    margin: '0',
    isDisabled: false,
    iconSize: '1x',
    labelPlacement: 'right',
    dataTestid: 'fel-radio-button-labeled',
    moreProps: {},
};

export default RadioButtonLabeled;
