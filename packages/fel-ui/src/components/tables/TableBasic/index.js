// @flow

import * as React from 'react';

import './index.scss';

import Thead from '../Thead';
import Tbody from '../Tbody';

type Props = {
    /**
     * An array of objects. Each object corresponds to a table column.
     * The 'propKey' of 'column' object must be equal to a key from 'row' onject.
     * A good idea is to use for propKeys the API payload keys.
     */
    columns: Array<{
        columnTitle: string | React.Node,
        propKey: string,
        aligned: string,
        isMockedData?: boolean,
        isSortable?: boolean,
    }>,

    /**
     * An array of objects. Each object corresponds to a table row.
     * A good idea is to use for object keys the API payload keys.
     */
    rows: Array<{
        [key: string]: string | React.Node,
        isAccent?: boolean,
        href?: { [key: string]: string },
    }>,

    /**
     * What table tfoot to use for the component?
     * Provide component with structure: `<tfoot><tr><td><div>...</div></td></tr></tfoot>`
     */
    tfoot?: null | React.Node,

    /**
     * What CSS 'width' value to use for the container? *(Provide units, e.g. px)*
     * It is a better idea to wap the Component and to control the wrapper wdth.
     */
    width?: string,

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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-tables-tablebasic--default)
 */
function TableBasic({
    columns,
    rows,
    tfoot,
    width,
    dataTestid,
    moreProps,
}: Props) {
    return (
        <div
            className="fel__table-wrapper fel__card"
            style={{ width }}
            data-testid={dataTestid}
            {...moreProps}
        >
            <table>
                <Thead columns={columns} />
                <Tbody columns={columns} rows={rows} />
                {tfoot}
            </table>
        </div>
    );
}

TableBasic.defaultProps = {
    tfoot: null,
    width: 'initial',
    dataTestid: 'fel-table-basic',
    moreProps: {},
};

export default TableBasic;
