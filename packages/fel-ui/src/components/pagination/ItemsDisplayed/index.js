// @flow

import React from 'react';

import './index.scss';

import utils from './utils';

type Props = {
    /** What value to use for "**`X`**-y of z"? */
    fromItem: number,
    /** What value to use for "x-**`Y`** of z"? */
    toItem: number,
    /** What value to use for "x-y of **`Z`**"? */
    totalItems: Function,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-pagination-itemsdisplayed--default)
 */
function ItemsDisplayed({
    fromItem,
    toItem,
    totalItems,
    dataTestid,
    moreProps,
}: Props) {
    return (
        <div
            className="fel__pagination_items-displayed"
            data-testid={dataTestid}
            {...moreProps}
        >
            {utils.displayedItemsRange(fromItem, toItem, totalItems)}
        </div>
    );
}

ItemsDisplayed.defaultProps = {
    dataTestid: 'fel-items-displayed',
    moreProps: {},
};

export default ItemsDisplayed;
