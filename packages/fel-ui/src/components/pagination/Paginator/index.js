// @flow

import React, { useState, useEffect } from 'react';

import './index.scss';

import PreviousButton from './PreviousButton';
import PageButton from './PageButton';
import NextButton from './NextButton';

type Props = {
    /** What is the total pages count? */
    totalPagesCount: number,
    /** What is the current page index? */
    pageIndex: number,
    /** Handle the onClick button event */
    handleOnSelect: Function,
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
 * [**Docs**](https://www.savovsky.com/fel/?path=/docs/ui-pagination-paginator--default)
 */
function Paginator({
    totalPagesCount,
    pageIndex,
    handleOnSelect,
    dataTestid,
    moreProps,
}: Props) {
    const [currentPage, setCurrentPage] = useState(pageIndex + 1);

    useEffect(() => {
        setCurrentPage(pageIndex + 1);
    }, [pageIndex]);

    const pageButtonsCount = totalPagesCount < 8 ? totalPagesCount : 7;
    const pageButtonsPositions = [];

    for (let i = 1; i <= pageButtonsCount; i++) {
        pageButtonsPositions.push(i);
    }

    const handleOnClickPreviousBtn = () => {
        setCurrentPage(currentPage - 1);
        handleOnSelect(currentPage - 2);
    };

    const handleOnClickNextBtn = () => {
        setCurrentPage(currentPage + 1);
        handleOnSelect(currentPage);
    };

    const handleOnClickPageBtn = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        handleOnSelect(pageNumber - 1);
    };

    return (
        <nav
            aria-label="Pagination Navigation"
            className="fel__paginator-wrapper"
            data-testid={dataTestid}
            {...moreProps}
        >
            <ul>
                <PreviousButton
                    handleOnClickPrevious={handleOnClickPreviousBtn}
                    isDisabled={currentPage === 1 || totalPagesCount === 1}
                />
                {pageButtonsPositions.map((el: number, index: number) => {
                    return (
                        <PageButton
                            key={el}
                            buttonIndex={index}
                            currentPage={currentPage}
                            totalPagesCount={totalPagesCount}
                            handleOnClickPage={handleOnClickPageBtn}
                        />
                    );
                })}
                <NextButton
                    handleOnClickNext={handleOnClickNextBtn}
                    isDisabled={
                        currentPage === totalPagesCount || totalPagesCount === 1
                    }
                />
            </ul>
        </nav>
    );
}

Paginator.defaultProps = {
    dataTestid: 'fel-paginator',
    moreProps: {},
};

export default Paginator;
