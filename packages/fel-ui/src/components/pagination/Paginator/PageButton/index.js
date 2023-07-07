// @flow

import React from 'react';

import utils from './utils';

type Props = {
    buttonIndex: number,
    currentPage: number,
    totalPagesCount: number,
    handleOnClickPage: Function,
};

function PageButton({
    buttonIndex,
    currentPage,
    totalPagesCount,
    handleOnClickPage,
}: Props) {
    const pageNumber = utils.pageNumber(
        buttonIndex,
        currentPage,
        totalPagesCount,
    );
    const isDisabled = utils.isDisabled(
        buttonIndex,
        currentPage,
        totalPagesCount,
    );
    const isActive = utils.isActive(buttonIndex, currentPage, totalPagesCount);

    const conditionalClassName = () => {
        const defaultClass = 'fel__paginator_button';

        if (isDisabled) {
            return `${defaultClass} disabled`;
        } else if (isActive) {
            return `${defaultClass} active`;
        }

        return defaultClass;
    };

    return (
        <li>
            <button
                type="button"
                aria-label="Pagination Page Button"
                className={conditionalClassName()}
                onClick={() => handleOnClickPage(pageNumber)}
                disabled={isDisabled}
                data-testid="fel-paginator-page-btn"
            >
                {pageNumber}
            </button>
        </li>
    );
}

export default PageButton;
