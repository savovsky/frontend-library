// @flow

import str from '../../../utils/stringsUtils';

/**
 * Concatenating numbers to a string(message)
 * @param {number} formItem
 * @param {number} toItem
 * @param {number} totalItems
 * @returns string e.g. 'Viewinf 1-10 of 15'
 */
const displayedItemsRange = (
    formItem: number,
    toItem: number,
    totalItems: number,
) => {
    const from = formItem;
    const to = toItem > totalItems ? totalItems : toItem;
    const total = totalItems;

    return `${str.viewing} ${from}-${to} ${str.of} ${total}`;
};

export default {
    displayedItemsRange,
};
