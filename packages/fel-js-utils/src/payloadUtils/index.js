// @flow
/* eslint-disable no-console */
/* eslint-disable max-len */

import str from '../stringsUtils';
import commonUtils from '../commonUtils';

const { truncateString } = commonUtils;

/**
 * Validates does the provided object has the provided keys.
 * @param {string[]} props
 * @param {Object} obj
 * @param {string} apiName
 * @param {string} nodeName
 * @returns `boolean`
 */
const doesPayloadObjectHaveProps = (
    props: Array<string>,
    obj: Object,
    apiName: string,
    nodeName: string,
) => {
    const objKeys = Object.keys(obj);

    return props.every((prop: string): boolean => {
        const hasProp = !!objKeys.find((key: string) => prop === key);

        if (!hasProp) {
            console.error(
                `${nodeName}[${prop}] property is missing in the "${apiName}" API response payload`,
            );
        }

        return hasProp;
    });
};

/**
 * Is provided value an Array?
 * @param {*} value
 * @returns `boolean`
 */
const isArray = (value: any): boolean => {
    return Array.isArray(value);
};

/**
 * Is provided value an Object?
 * @param {*} value
 * @returns `boolean`
 */
const isObject = (value: any): boolean => {
    if (typeof value === 'object' && !isArray(value) && value !== null) {
        return true;
    }

    return false;
};

function isPayloadValid(
    model: any,
    payload: any,
    apiName: string,
    nodeName: string = 'payload',
): boolean {
    if (isObject(model)) {
        if (isObject(payload)) {
            const modelKeys = Object.keys(model);

            if (
                doesPayloadObjectHaveProps(
                    modelKeys,
                    payload,
                    apiName,
                    nodeName,
                )
            ) {
                return modelKeys.every((key: string) => {
                    if (isObject(model[key]) || isArray(model[key])) {
                        return isPayloadValid(
                            model[key],
                            payload[key],
                            apiName,
                            `${nodeName}.${key}`,
                        );
                    }

                    // Returns true, because does not care for the value if it is not an object or array.
                    return true;
                });
            }

            // The object does not have the model props
            return false;
        }

        console.error(
            `An 'object' is expected for the '${nodeName}' from the "${apiName}" API response`,
        );

        // Model is 'object' but the payload is not
        return false;
    }

    if (isArray(model)) {
        if (isArray(payload)) {
            if (payload.length > 0) {
                if (isObject(model[0])) {
                    if (isObject(payload[0])) {
                        const modelKeys = Object.keys(model[0]);

                        if (
                            doesPayloadObjectHaveProps(
                                modelKeys,
                                payload[0],
                                apiName,
                                `${nodeName}[0]`,
                            )
                        ) {
                            return modelKeys.every((key: string) => {
                                if (
                                    isObject(model[0][key]) ||
                                    isArray(model[0][key])
                                ) {
                                    return isPayloadValid(
                                        model[0][key],
                                        payload[0][key],
                                        apiName,
                                        `${nodeName}[0].${key}`,
                                    );
                                }

                                // Returns true, because does not care for the value if it is not an object or array
                                return true;
                            });
                        }

                        // The object does not have the model props
                        return false;
                    }

                    console.error(
                        `Array as a collection of objects is expected for the '${nodeName}' from the "${apiName}" API response`,
                    );

                    // Model is 'array' as collection of objects and the payload is array but the first item is not an 'object'
                    return false;
                }

                // Model is 'array' but it is not collection of 'objects'
                return true;
            }

            // Model is 'array' and the payload is an empty 'array'
            return true;
        }

        console.error(
            `An 'array' is expected for the '${nodeName}' from the "${apiName}" API response`,
        );

        // Model is 'array' but the payload is not
        return false;
    }

    // Only for the payload itself
    if (typeof model === 'string') {
        if (typeof payload === 'string') {
            return true;
        }

        console.error(
            `A 'string' is expected for the '${nodeName}' from the "${apiName}" API response`,
        );

        return false;
    }

    // Only for the payload itself
    if (typeof model === 'number') {
        if (typeof payload === 'number') {
            return true;
        }

        console.error(
            `A 'number' is expected for the '${nodeName}' from the "${apiName}" API response`,
        );

        return false;
    }

    // Not handling whe the payload is 'null' or 'undefined'.
    return true;
}

/**
 * Retrieves an error message from API response when an HTTP error.
 * If message is longer than 150 chars => truncateString.
 * @param {*} error
 * @returns `string`
 */
const httpErrorMessage = (error: any): string => {
    let errorMsg = str.somethingHasGoneWrong;

    if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
    ) {
        errorMsg = error.response.data.message;
    } else if (error && error.message) {
        errorMsg = error.message;
    } else if (error && error.response && error.response.status) {
        errorMsg = `${str.requestFailedWithStatus} ${error.response.status}.`;
    } else if (error && error.data && error.data.message) {
        errorMsg = error.data.message;
    } else if (error && error.data && error.data.status) {
        errorMsg = `${str.requestFailedWithStatus} ${error.data.status}.`;
    }

    return truncateString(errorMsg, 150);
};

export default {
    doesPayloadObjectHaveProps,
    isArray,
    isObject,
    isPayloadValid,
    httpErrorMessage,
};
