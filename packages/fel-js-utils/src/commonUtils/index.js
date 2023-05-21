// @flow

import str from '../stringsUtils';

/**
 * Add a dolar sign "$" to the provided value(number).
 * e.g. -5.67 => "-$5.67"
 * e.g. 5.67 => "$5.67"
 * e.g. 3.0 => "$3.00"
 * e.g. 0 => "$0.00"
 *
 * If the provided value is not a number returns an empty string.
 * e.g. "abc" => ""
 * e.g. "5.00" => ""
 * e.g. "$.00" => ""
 *
 * If the provided value is null returns string 'N/A'.
 *
 * @param {(number|null)} value
 * @returns `string`
 */
const addDolarSign = (value: number | null): string => {
    if (typeof value === 'number') {
        if (value < 0) {
            return value.toFixed(2).replace('-', '-$');
        } else if (value > 0) {
            return `$${value.toFixed(2)}`;
        }

        return '$0.00';
    }

    if (value === null) {
        return str.notAvailable;
    }

    return '';
};

/**
 * Replaces string empty spaces with '-' and sets all letters to lower case.
 * e.g. "Hello  BIG world  " => "hello-big-world"
 * @param {string} value
 * @returns `string`
 */
const stringToId = (value: string): string => {
    if (value && value.trim()) {
        return value
            .trim()
            .replace(/\s+/g, '-')
            .toLowerCase();
    }

    return 'string-to-id';
};

/**
 * Returns 'N/A', when recieves an empty string or null AND 'defaultValue' IS NOT provided.
 * Returns the 'defaultValue', when recieves an empty string or null AND 'defaultValue' IS provided.
 * Else returns the value converted to a string.
 * @param {(number|string|null)} value
 * @param {string} defaultValue
 * @returns `string`
 */
const valueToString = (
    value: number | string | null,
    defaultValue?: string,
): string => {
    const defaultVal =
        defaultValue || defaultValue === '' ? defaultValue : str.notAvailable;

    if (typeof value === 'string') {
        return value.trim() ? value.trim() : defaultVal;
    }

    return value || value === 0 ? value.toString() : defaultVal;
};

/**
 * Convert a number to positive two decimals string,
 * e.g. input: 150 (number) => output: '150.00' (string)
 * e.g. input: -5 (number) => output: '5.00' (string)
 * @param {number} value
 * @returns `string`
 */
const numberToTwoDecimalsString = (value: number): string => {
    return value || value === 0 ? Math.abs(value).toFixed(2) : '-';
};

/**
 * Returns number rounded to two decimal places
 * e.g. 1977.08; 5.01; 42.42; 0.01; 15.6; 0.0;
 * @param {(number|string|null)} value
 * @returns `number`
 */
const toTwoDecNum = (value: number | string | null): number => {
    return +(+value).toFixed(2);
};

/**
 * Returns 'Ab cd...' when text: 'Ab cdef' and limit = 5.
 * @param {string} text
 * @param {number} limit
 * @returns `string`
 */
const truncateString = (text: string, limit: number): string => {
    if (text.length > limit) {
        return `${text.slice(0, limit)}...`;
    }

    return text;
};

/**
 * Scrolls page to the top.
 */
function scrollToTop(): void {
    /* istanbul ignore else */
    if (document.body) {
        document.body.scrollTop = 0; // For Safari
    }

    /* istanbul ignore else */
    if (document.documentElement) {
        document.documentElement.scrollTop = 0; // For Chrome, Firefox
    }
}

export default {
    addDolarSign,
    stringToId,
    valueToString,
    numberToTwoDecimalsString,
    toTwoDecNum,
    truncateString,
    scrollToTop,
};
