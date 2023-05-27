// @flow

import * as React from 'react';

import './index.scss';

import utils from './utils';

type Props = {
    /** What label value to use? */
    label: string,
    /** What item value (node) to use? */
    value: string | React.Node,
    /** What CSS 'background-color' value to use for the indicator? */
    indicatorColor?: string,
    /** What CSS className value to use for the indicator? */
    indicatorClassName?: string,
    /** What value to use? */
    indicatorPercentage?: string,
    /** What CSS 'color' value to use for the label? */
    labelColor?: string,
    /** What CSS className value to use for the label? */
    labelClassName?: string,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** Is the item value mock? */
    isMockedData?: boolean, // TODO Rename 'isMockedData' to 'isMock'
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-itemlabeledcolored--default)
 */
function ItemLabeledColored({
    label,
    value,
    indicatorColor,
    indicatorClassName,
    indicatorPercentage,
    labelColor,
    labelClassName,
    margin,
    isMockedData,
    dataTestid,
    moreProps,
}: Props) {
    React.useEffect(() => {
        utils.propsValidation(label, value);
    }, [label, value]);

    const conditionalClassName = () => {
        const defaultClass = 'fel__item-labeled-colored_value';

        if (isMockedData) {
            return `${defaultClass} mockup`;
        }

        if (labelClassName) {
            return `${defaultClass} ${labelClassName}`;
        }

        return defaultClass;
    };

    const conditionalStyle = () => {
        if (isMockedData) {
            return {};
        }

        if (labelColor) {
            return { color: labelColor };
        }

        return {};
    };

    return (
        <div data-testid={dataTestid} style={{ margin }} {...moreProps}>
            <div className="fel__item-labeled_label">{`${label}:`}</div>
            <div className="fel__item-labeled_value-wrapper">
                <div
                    className={conditionalClassName()}
                    style={conditionalStyle()}
                >
                    {value}
                </div>
                <div
                    className={`fel__item-labeled_color-indicator ${indicatorClassName ||
                        ''}`}
                    style={{ backgroundColor: indicatorColor }}
                />
                {indicatorPercentage && (
                    <div
                        className={`fel__item-labeled_color-indicator_percentage ${indicatorClassName ||
                            ''}`}
                        style={{
                            color: indicatorColor,
                            backgroundColor: 'unset',
                        }}
                    >
                        {`${indicatorPercentage}%`}
                    </div>
                )}
            </div>
        </div>
    );
}

ItemLabeledColored.defaultProps = {
    indicatorColor: '',
    indicatorClassName: '',
    indicatorPercentage: '',
    labelColor: '',
    labelClassName: '',
    margin: '0',
    isMockedData: false,
    dataTestid: 'fel-item-labeled-colored',
    moreProps: {},
};

export default ItemLabeledColored;
