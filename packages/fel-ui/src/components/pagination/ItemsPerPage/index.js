// @flow

import React from 'react';

import './index.scss';

import str from '../../../utils/stringsUtils';
import SelectBasic from '../../selects/select/SelectBasic';

import type { Option } from '../../../../flowTypes';

type Props = {
    /** What collection of items to use for the options?
     *
     * `type Option = { id: string, value: string }`
     * */
    pageSizeOptions: Array<Option>,
    /** What is the ItemsPerPage current option id? */
    currentPageSizeId: string,
    /** Handle the selected option - onSelect event */
    handleSelectedOption: Function,
    /** What CSS 'width' value to use? *(Provide units, e.g. px)* */
    selectWidth?: string,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-pagination-itemsperpage--default)
 */
function ItemsPerPage({
    pageSizeOptions,
    currentPageSizeId,
    handleSelectedOption,
    selectWidth,
    dataTestid,
    moreProps,
}: Props) {
    return (
        <div
            className="fel__pagination_items-per-page"
            data-testid={dataTestid}
            {...moreProps}
        >
            <div>{`${str.rows}`}</div>
            <SelectBasic
                handleSelectedOption={handleSelectedOption}
                selectId="items-per-page"
                label=""
                currentOptionId={currentPageSizeId}
                optionItems={pageSizeOptions}
                width={selectWidth}
            />
        </div>
    );
}

ItemsPerPage.defaultProps = {
    selectWidth: '65px',
    dataTestid: 'fel-items-per-page',
    moreProps: {},
};

export default ItemsPerPage;
