// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

type Props = {
    columnId: string,
    title: string,
    sortedColumnId: string,
    isSortAscending: boolean,
    handleOnClickSort: Function,
};

function ColumnTitleSort({
    columnId,
    title,
    sortedColumnId,
    isSortAscending,
    handleOnClickSort,
}: Props) {
    const conditionalClassNameSortDown = () => {
        const defaultClass = 'fa-sort-down';

        return columnId === sortedColumnId && !isSortAscending
            ? `${defaultClass} active`
            : defaultClass;
    };

    const conditionalClassNameSortUp = () => {
        const defaultClass = 'fa-sort-up';

        return columnId === sortedColumnId && isSortAscending
            ? `${defaultClass} active`
            : defaultClass;
    };

    return (
        <button
            aria-label="Sort table column"
            data-testid="fel-sort-table-column-btn"
            type="button"
            className="fel__column-title-sort"
            onClick={() => handleOnClickSort(columnId)}
        >
            <span>{title}</span>
            <span className="fel__table-sort-arrows-wrapper">
                <FontAwesomeIcon
                    icon={faSortDown}
                    className={conditionalClassNameSortDown()}
                />
                <FontAwesomeIcon
                    icon={faSortUp}
                    className={conditionalClassNameSortUp()}
                />
            </span>
        </button>
    );
}

export default ColumnTitleSort;
