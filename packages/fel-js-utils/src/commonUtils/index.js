// @flow

import str from '../stringsUtils';

import type { TableColumn } from '../../../fel-ui/src/flowTypes';

type SortBy = {
    isAscending: boolean,
    propKey: string,
    columnProps?: {
        ...TableColumn,
        isoDateOrNumber?: boolean,
    },
};

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

/**
 * Sorting array of objects by nested value ascendingly
 * @param {Object[]} arr
 * @param {string} groupPropKey
 * @param {string} propKey
 * @returns `Array<Object>`
 */
const sortArrayOfObjectsByNestedValueAscendingly = (
    arr: Array<Object>,
    groupPropKey: string,
    propKey: string,
): Array<Object> => {
    return arr.sort((a: Object, b: Object) => {
        if (typeof a[groupPropKey][propKey] === 'string') {
            return a[groupPropKey][propKey].localeCompare(
                b[groupPropKey][propKey],
            );
        }

        return a[groupPropKey][propKey] - b[groupPropKey][propKey];
    });
};

/**
 * Sorting array of objects by nested value descendingly
 * @param {Object[]} arr
 * @param {string} groupPropKey
 * @param {string} propKey
 * @returns `Array<Object>`
 */
const sortArrayOfObjectsByNestedValueDescendingly = (
    arr: Array<Object>,
    groupPropKey: string,
    propKey: string,
): Array<Object> => {
    return arr.sort((a: Object, b: Object) => {
        if (typeof b[groupPropKey][propKey] === 'string') {
            return b[groupPropKey][propKey].localeCompare(
                a[groupPropKey][propKey],
            );
        }

        return b[groupPropKey][propKey] - a[groupPropKey][propKey];
    });
};

/**
 * Sorting array of objects by value ascendlingly
 * @param {Object[]} arr
 * @param {string} propKey
 * @returns `Array<Object>`
 */
const sortArrayOfObjectsByValueAscendingly = (
    arr: Array<Object>,
    propKey: string,
): Array<Object> => {
    return arr.sort((a: Object, b: Object) => {
        if (typeof a[propKey] === 'string') {
            return a[propKey].localeCompare(b[propKey]);
        }

        return a[propKey] - b[propKey];
    });
};

/**
 * Sorting array of objects by value descendlingly
 * @param {Object[]} arr
 * @param {string} propKey
 * @returns `Array<Object>`
 */
const sortArrayOfObjectsByValueDescendingly = (
    arr: Array<Object>,
    propKey: string,
): Array<Object> => {
    return arr.sort((a: Object, b: Object) => {
        if (typeof b[propKey] === 'string') {
            return b[propKey].localeCompare(a[propKey]);
        }

        return b[propKey] - a[propKey];
    });
};

/**
 * Sorting array of objects by provided specific config object which
 * ralates to TableClientSort Component in fel-ui package
 * @param {Object[]} arr
 * @param {Object} sortBy specific config object
 * @returns `Array<Object>`
 */
const sortArrayOfObjectsBy = (
    arr: Array<Object>,
    sortBy: SortBy,
): Array<Object> => {
    const { isAscending, propKey, columnProps } = sortBy;

    if (columnProps && columnProps.isoDateOrNumber) {
        if (isAscending) {
            sortArrayOfObjectsByNestedValueAscendingly(
                arr,
                'isoDateOrNumber',
                propKey,
            );
        } else {
            sortArrayOfObjectsByNestedValueDescendingly(
                arr,
                'isoDateOrNumber',
                propKey,
            );
        }
    } else if (isAscending) {
        sortArrayOfObjectsByValueAscendingly(arr, propKey);
    } else {
        sortArrayOfObjectsByValueDescendingly(arr, propKey);
    }

    return arr;
};

/**
 * Returns 'N/A' when obj[key] is an empty string or null AND defaultValue is not provided.
 * Returns the defaultValue, when obj[key] is an empty string or null AND defaultValue is provided.
 * Else returns the obj[key] value converted to string.
 * @param {Object} obj
 * @param {string} key
 * @param {string} defaultValue
 * @returns `string`
 */
const getValueFromObjByKeyAndReturnString = (
    obj: Object,
    key: string,
    defaultValue?: string,
): string => {
    const value = obj[key];

    return valueToString(value, defaultValue);
};

/**
 * Returns:
 * e.g. Sunnyvale, CA 94089 | Sunnyvale, CA | Sunnyvale, 94089 | Sunnyvale | CA 94089 | CA | 94089 | N/A
 * @param {(string|null)} city
 * @param {(string|null)} state
 * @param {(string|null)} postCode
 * @returns `string`
 */
const concatCityStateZip = (
    city: string | null,
    state: string | null,
    postCode: string | null,
): string => {
    const concatStateZip = () => {
        if (state && postCode) {
            return `${state} ${postCode}`;
        } else if (state && !postCode) {
            return state;
        } else if (!state && postCode) {
            return postCode;
        } else {
            return '';
        }
    };

    const stateZip = concatStateZip();

    if (city) {
        if (stateZip) {
            return `${city}, ${stateZip}`;
        }

        return city;
    } else {
        if (stateZip) {
            return stateZip;
        }

        return str.notAvailable;
    }
};

/**
 * Returns:
 * e.g. John Doe | John | Doe | N/A
 * @param {(string|null)} firstName
 * @param {(string|null)} lastName
 * @returns `string`
 */
const concatFullName = (
    firstName: string | null,
    lastName: string | null,
): string => {
    if (firstName && lastName) {
        return `${firstName} ${lastName}`;
    }

    if (firstName && !lastName) {
        return firstName;
    }

    if (!firstName && lastName) {
        return lastName;
    }

    return str.notAvailable;
};

export default {
    addDolarSign,
    stringToId,
    valueToString,
    numberToTwoDecimalsString,
    toTwoDecNum,
    truncateString,
    scrollToTop,
    sortArrayOfObjectsBy,
    getValueFromObjByKeyAndReturnString,
    concatCityStateZip,
    concatFullName,
};
