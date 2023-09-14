// @flow

import * as React from 'react';

import './index.scss';

import commonUtils from '../../../../../fel-js-utils/src/commonUtils';
import TheadSort from '../TheadSort';
import Tbody from '../Tbody';

import type { TableColumn } from '../../../flowTypes';

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
        isDateOrNumber?: boolean,
    }>,

    /**
     * An array of objects. Each object corresponds to a table row.
     * A good idea is to use for object keys the API payload keys.
     */
    rows: Array<{
        [key: string]: string | React.Node,
        isAccent?: boolean,
        href?: { [key: string]: string },
        isDateOrNumber?: { [key: string]: string | number | boolean | null },
    }>,

    /** Which column is initialy sorted. Provide column 'propKey' value. */
    initialSortedColumnId: string,

    /** What is the initial sorted order? */
    isInitialSortingAscending: boolean,

    /** What is the initial sorted order? */
    handleOnColumnSort?: Function,

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

const { sortArrayOfObjectsBy } = commonUtils;

/**
 * Component props: check Storybook
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-tables-tableclientsort--default)
 */
function TableClientSort({
    columns,
    rows,
    initialSortedColumnId,
    isInitialSortingAscending,
    handleOnColumnSort,
    tfoot,
    width,
    dataTestid,
    moreProps,
}: Props) {
    const [sortedColumnId, setSortedColumnId] = React.useState(
        initialSortedColumnId,
    );
    const [isSortAscending, setIsSortAscending] = React.useState(
        isInitialSortingAscending,
    );

    const sortedArr = sortArrayOfObjectsBy(rows, {
        isAscending: isSortAscending,
        propKey: sortedColumnId,
        columnProps: columns.find(
            (item: TableColumn) => item.propKey === sortedColumnId,
        ),
    });

    const [reorderedRows, serRowsOrder] = React.useState(sortedArr);

    React.useEffect(() => {
        serRowsOrder(sortedArr);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, rows);

    const handleOnClickSort = (columnId: string) => {
        let isAscending = false;

        if (sortedColumnId === columnId) {
            isAscending = !isSortAscending;
        }

        setIsSortAscending(isAscending);
        setSortedColumnId(columnId);
        serRowsOrder(
            sortArrayOfObjectsBy(rows, {
                isAscending,
                propKey: columnId,
                columnProps: columns.find(
                    (item: TableColumn) => item.propKey === columnId,
                ),
            }),
        );

        if (handleOnColumnSort) {
            handleOnColumnSort(columnId, !isSortAscending);
        }
    };

    return (
        <div
            className="fel__table-wrapper fel__card"
            style={{ width }}
            data-testid={dataTestid}
            {...moreProps}
        >
            <table>
                <TheadSort
                    columns={columns}
                    rowsCount={rows.length}
                    sortedColumnId={sortedColumnId}
                    handleOnClickSort={handleOnClickSort}
                />
                <Tbody columns={columns} rows={reorderedRows} />
                {tfoot}
            </table>
        </div>
    );
}

TableClientSort.defaultProps = {
    // eslint-disable-next-line no-unused-vars
    handleOnColumnSort: (columnId: string, isAscending: boolean) => {},
    tfoot: null,
    width: 'initial',
    dataTestid: 'fel-table-client-sort',
    moreProps: {},
};

export default TableClientSort;
