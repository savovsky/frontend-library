// @flow

import * as React from 'react';

import './index.scss';

type Props = {
    /**
     * An array of strings or React components. Each item corresponds to a stepper item.
     * The list order is the stepper order: index=0 => step 1
     */
    stepperItems: Array<string | React.Node>,
    /** The count of the completed steps, e.g. 0, 1, 2, ... */
    completedSteps: number,
    /** What CSS 'width' value to use for the step items? *(Provide units, e.g. px)* */
    stepItemWidth?: string,
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-stepper--default)
 */
function Stepper({
    stepperItems,
    completedSteps,
    stepItemWidth,
    margin,
    dataTestid,
    moreProps,
}: Props) {
    const conditionalClassName = (defaultClass: string, index: number) => {
        if (completedSteps >= index + 1) {
            return `${defaultClass} completed`;
        }

        return defaultClass;
    };

    const conditionalContent = (index: number) => {
        if (index > 0) {
            return (
                <div className="fel__stepper-connector">
                    <span
                        className={conditionalClassName(
                            'fel__stepper-connector-line',
                            index,
                        )}
                    />
                </div>
            );
        }

        return null;
    };

    return (
        <div
            className="fel__stepper-wrapper"
            style={{ margin }}
            data-testid={dataTestid}
            {...moreProps}
        >
            {stepperItems.map((item: string | React.Node, index: number) => {
                return (
                    <div
                        key={index.toString()}
                        className="fel__stepper-item-wrapper"
                        style={{ width: stepItemWidth }}
                    >
                        {conditionalContent(index)}
                        <div className="fel__stepper-item">
                            <div
                                className={conditionalClassName(
                                    'fel__stepper-item-mark',
                                    index,
                                )}
                            >
                                {index + 1}
                            </div>
                            <div
                                className={conditionalClassName(
                                    'fel__stepper-item-content',
                                    index,
                                )}
                            >
                                {item}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

Stepper.defaultProps = {
    stepItemWidth: '150px',
    margin: '0',
    dataTestid: 'fel-stepper',
    moreProps: {},
};

export default Stepper;
