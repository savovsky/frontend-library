// @flow

import React from 'react';

import ThSort from './ThSort';

import type { TableColumn } from '../../../flowTypes';

type Props = {
    columns: Array<{
        ...TableColumn,
        isoDateOrNumber?: boolean,
    }>,
    rowsCount: number,
    sortedColumnId: string,
    isSortAscending: boolean,
    handleOnClickSort: Function,
};

function TheadSort({
    columns,
    rowsCount,
    sortedColumnId,
    isSortAscending,
    handleOnClickSort,
}: Props) {
    return (
        <thead>
            <tr>
                {columns.map((el: TableColumn) => {
                    const isSortable =
                        el.isSortable === true || el.isSortable === false
                            ? el.isSortable
                            : true;
                    return (
                        <ThSort
                            key={el.propKey}
                            title={el.columnTitle}
                            aligned={el.aligned}
                            columnId={el.propKey}
                            isSortable={isSortable && rowsCount > 1}
                            sortedColumnId={sortedColumnId}
                            isSortAscending={isSortAscending}
                            handleOnClickSort={handleOnClickSort}
                        />
                    );
                })}
                <th />
            </tr>
        </thead>
    );
}

export default TheadSort;
