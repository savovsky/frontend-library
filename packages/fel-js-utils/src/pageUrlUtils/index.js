// @flow

import serviceUtils from '../serviceUtils';

const {
    getProtocolFromUrl,
    isServerLocalDevelopment,
    getUrlQueryParams,
    getEnv,
    getUserId,
} = serviceUtils;

const protocol = () => `${getProtocolFromUrl()}//`;
const hostname = () => {
    return isServerLocalDevelopment()
        ? 'localhost' // hostname for local Server development
        : `xyz.${getEnv()}.abc.com`; // hostname for local React development
};

const somePageUrl = (additionalQueryParams?: string) => {
    const pathname = `/users/${getUserId()}/orders`;
    const orignalQueryParams = getUrlQueryParams();
    const originParams = orignalQueryParams ? `?${orignalQueryParams}` : '';
    const additionalParams = additionalQueryParams || '';

    const queryOperator = () => {
        if (orignalQueryParams && additionalParams) {
            return '&';
        }

        if (!orignalQueryParams && additionalParams) {
            return '?';
        }

        return '';
    };

    const queryParams = `${originParams}${queryOperator()}${additionalParams}`;

    return `${protocol()}${hostname()}${pathname}${queryParams}`;
};

export default {
    somePageUrl,
};
