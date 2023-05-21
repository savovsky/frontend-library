// @flow

import keys from '../keysUtils';

const { jwt, env, orderNumber, userId, orderId } = keys;

/**
 * Returns Promise chain (resolve, reject)
 * @param {Promise} promise
 * @returns if response [`response`, `null`]
 * @returns if error [`null`, `error`]
 */
const responseFrom = (promise: Promise<{}>): Promise<Array<string | null>> => {
    return promise
        .then((response: any) => [response, null])
        .catch((error: any) => [null, error]);
};

/**
 * Retrieves 'protocol' from the browser window.location
 * @returns `string` e.g. 'https:'
 */
const getProtocolFromUrl = (): string => {
    const { protocol } = window.location;

    return protocol;
};

/**
 * Retrieves 'hostname' from the browser window.location and
 * checks is it 'localhost'.
 * @returns `boolean`
 */
const isLocalHost = (): boolean => {
    const { hostname } = window.location;

    return hostname === 'localhost';
};

/**
 * Retrieves 'port' from the browser window.location and
 * checks is it '80' (HTTP).
 * @returns `boolean`
 */
const isPort80 = (): boolean => {
    // TODO Make the 'port' number prop and merge
    // these two function isPort80() and isPort443().
    const { port } = window.location;

    return port === '80';
};

/**
 * Retrieves 'port' from the browser window.location and
 * checks is it '80' (HTTPS).
 * @returns `boolean`
 */
const isPort443 = (): boolean => {
    const { port } = window.location;

    return port === '443';
};

/**
 * If the URL does not contain an expicit port number,
 * it will be set by the browser to '' (empty string).
 * This is the case for local Server development.
 * @returns `boolean`
 */
const isPortEmptyString = (): boolean => {
    const { port } = window.location;

    return port === '';
};

/**
 * If `localhost` AND port is `80`, OR `443`, OR `''`, returns `true`, else `false`.
 * The assumption is: If the port is `80` this is local Server development.
 * @returns `boolean`
 */
const isServerLocalDevelopment = (): boolean => {
    return isLocalHost() && (isPort80() || isPort443() || isPortEmptyString());
};

/**
 * Returns `true` if app is running on `localhost` or `ghPages`
 * else returns `false`.
 * @returns `boolean`
 */
const isLocalDevelopment = (): boolean => {
    return isLocalHost();
};

/**
 * Retrieves item value from browser session storage
 * @param {string} key
 * @returns `string`
 */
const getItemFromSessionStorage = (key: string): string => {
    return sessionStorage.getItem(key) || '';
};

/**
 * Retrieves and returns the current environment which is being extracted from the URL.
 * * Example: xyz.dev.abc.com/ => returns 'dev'.
 * @returns `string` environment name e.g. 'dev', 'stage', etc.
 */
const getEnvFromUrlHostname = (): string => {
    const { hostname } = window.location;

    return hostname.split('.')[1] || '';
};

/**
 * Retrieves and returns a value for provided key (paramKey) from the URL Query Params
 * * Example: xyz.dev.abc.com/?uid=1234&orderId=5678
 *  * for paramKey 'uid' retruns '1234'
 *  * for paramKey 'orderId' returns '5678'
 * @param {string} paramKey
 * @returns `string`
 */
const getUrlQueryParamValue = (paramKey: string): string => {
    const queryParams = window.location.search;

    if (queryParams) {
        // Removes "?" char
        const query = queryParams.substring(1);
        const pairs = query.split('&');
        const queryObj = {};

        pairs.forEach((pair: string) => {
            const index = pair.indexOf('=');
            const key = pair.substring(0, index);
            const value = pair.substring(index + 1);

            queryObj[decodeURIComponent(key)] = decodeURIComponent(value);
        });

        return queryObj[paramKey]
            ? queryObj[paramKey]
            : getItemFromSessionStorage(paramKey);
    }

    return getItemFromSessionStorage(paramKey);
};

/**
 * Returns URL query params if such,
 * else returns an empty string.
 * @returns `string`
 */
const getUrlQueryParams = (): string => {
    const queryParams = window.location.search;

    if (queryParams) {
        // Removes "?" char
        return queryParams.substring(1);
    }

    return '';
};

/**
 * Returns JWT if such,
 * else returns an empty string.
 * @returns `string`
 */
const getJwt = (): string => {
    return getItemFromSessionStorage(jwt);
};

/**
 * Returns env if such,
 * else returns an empty string.
 * @returns `string`
 */
const getEnv = (): string => {
    if (isLocalDevelopment()) {
        return getItemFromSessionStorage(env);
    }

    return getEnvFromUrlHostname();
};

/**
 * Returns Order Number if such,
 * else returns an empty string.
 * @returns `string`
 */
const getOrderNumber = (): string => {
    return getUrlQueryParamValue(orderNumber);
};

/**
 * Returns User ID if such,
 * else returns an empty string.
 * @returns `string`
 */
const getUserId = () => {
    return getUrlQueryParamValue(userId);
};

/**
 * Returns Order ID if such,
 * else returns an empty string.
 * @returns `string`
 */
const getOrderId = () => {
    return getUrlQueryParamValue(orderId);
};

/**
 * Retrieves 'permissions' form JWT payload, if such prop exists
 * @returns `permissions` array or null
 */
const getPermissionsFromJwt = () => {
    const jsonWebToken = getJwt();

    // TODO because permissions are array its better to return []

    if (jsonWebToken) {
        const decodedJwtPayload = window.atob(jsonWebToken.split('.')[1]);
        const payload = JSON.parse(decodedJwtPayload);

        return payload.permissions ? payload.permissions : null;
    }

    return null;
};

/**
 * Retrieves 'userName' form JWT payload, if such prop exists.
 * If 'userName' prop is missin, retrieves 'userName' from 'emai' prop,
 * else returns an empty string.
 * @returns `string`
 */
const getUserNameFromJwt = (): string => {
    const jsonWebToken = getJwt();

    if (jsonWebToken) {
        const decodedJwtPayload = window.atob(jsonWebToken.split('.')[1]);
        const payload = JSON.parse(decodedJwtPayload);

        if (payload.userName) {
            return payload.userName;
        }

        if (payload.email) {
            return payload.email.split('@')[0];
        }

        return '';
    }

    return '';
};

type PermissionItem = {
    permissionName: string,
};

/**
 * Retrieves 'permissions' form JWT payload.
 * Verifying that ALL provided permissions are available within the 'permissions' array.
 * @param {string[]} requiredPermissions // Array of permissions
 * @returns `boolean`
 */
const hasPermission = (requiredPermissions: Array<string>): boolean => {
    const ownedPermissions = getPermissionsFromJwt();

    if (ownedPermissions && Array.isArray(ownedPermissions)) {
        return requiredPermissions.every((permission: string) => {
            return ownedPermissions.some(
                (item: PermissionItem) => item.permissionName === permission,
            );
        });
    }

    return false;
};

export default {
    responseFrom,
    getProtocolFromUrl,
    isServerLocalDevelopment,
    getUrlQueryParams,
    getJwt,
    getEnv,
    getOrderNumber,
    getUserId,
    getOrderId,
    getPermissionsFromJwt,
    getUserNameFromJwt,
    hasPermission,
    // export for testing
    isLocalHost,
    isPort80,
    isPort443,
    isPortEmptyString,
    isLocalDevelopment,
    getItemFromSessionStorage,
    getEnvFromUrlHostname,
    getUrlQueryParamValue,
};
