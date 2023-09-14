// @flow

import React from 'react';

import ColumnTitleSort from './ColumnTitleSort';

type Props = {
    title: string,
    aligned: string,
    columnId: string,
    isSortable: boolean,
    sortedColumnId: string,
    isSortAscending: boolean,
    handleOnClickSort: Function,
};

function ThSort({
    title,
    aligned,
    columnId,
    isSortable,
    sortedColumnId,
    isSortAscending,
    handleOnClickSort,
}: Props) {
    const conditionalClassName = () => {
        return aligned ? `align-${aligned}` : 'align-left';
    };

    const conditionalContent = () => {
        if (isSortable) {
            return (
                <ColumnTitleSort
                    columnId={columnId}
                    title={title}
                    sortedColumnId={sortedColumnId}
                    isSortAscending={isSortAscending}
                    handleOnClickSort={handleOnClickSort}
                />
            );
        }

        return <span>{title}</span>;
    };

    return (
        <th>
            <div
                data-testid="fel-table-th-sort"
                className={conditionalClassName()}
            >
                {conditionalContent()}
            </div>
        </th>
    );
}

export default ThSort;
