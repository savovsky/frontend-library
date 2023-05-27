// @flow

import * as React from 'react';

import './index.scss';

import utils from './utils';
import ItemLink from '../ItemLink';

type Props = {
    /** What label value to use? */
    label: string,
    /** What item value (node) to use? */
    value: string | React.Node,
    /** Is the item value accent? */
    isAccent?: boolean,
    /** What URL to use if the item value is a link? */
    href?: string,
    /** Where to open the linked document? */
    hrefTarget?: 'self' | 'blank' | 'parent' | 'top',
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** Is the item value mock? */
    isMockedData?: boolean, // TODO Rename 'isMockedData' to 'isMockData'
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-itemlabeled--default)
 */
function ItemLabeled({
    label,
    value,
    isAccent,
    href,
    hrefTarget,
    margin,
    isMockedData,
    dataTestid,
    moreProps,
}: Props) {
    React.useEffect(() => {
        utils.propsValidation(label, value);
    }, [label, value]);

    const conditionalClassName = () => {
        const defaultClass = 'fel__item-labeled_value';

        if (isAccent) {
            return `${defaultClass} accent`;
        } else if (isMockedData) {
            return `${defaultClass} mockup`;
        } else {
            return defaultClass;
        }
    };

    const conditionalContent = () => {
        if (href) {
            return (
                <ItemLink href={href} target={hrefTarget}>
                    {value}
                </ItemLink>
            );
        }

        return <>{value}</>;
    };

    return (
        <div
            data-testid={dataTestid}
            className="fel__item-labeled_wrapper"
            style={{ margin }}
            {...moreProps}
        >
            <div className="fel__item-labeled_label">{`${label}:`}</div>
            <div className={conditionalClassName()}>{conditionalContent()}</div>
        </div>
    );
}

ItemLabeled.defaultProps = {
    isAccent: false,
    href: '',
    hrefTarget: 'blank',
    margin: '0',
    isMockedData: false,
    dataTestid: 'fel-item-labeled',
    moreProps: {},
};

export default ItemLabeled;
