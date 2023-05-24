// @flow

import { v4 as uuidv4 } from 'uuid';

import serviceUtils from '../serviceUtils';

const { getEnv, getUserNameFromJwt, getOrderNumber, getUserId } = serviceUtils;

/**
 * Sending a POST request behind the scenes for tracking the user interactions.
 * @param {*} eventName e.g. 'MyTool-ButtonClicked' (`<ToolName>-<EventName>`)
 * @param {*} args some additional data e.g. { product: 'foo', type: 'bar' }
 */
const reportEvent = (eventName: string, args: Object) => {
    const env = getEnv();
    const appName = 'MyApp';
    const transactionId = uuidv4();
    const userName = getUserNameFromJwt();

    const protocol = 'https://';
    const subDomain = env === 'internal' ? '' : `${env}.`;
    const hostname = `beacon.${subDomain}abc.com`;

    const beaconApiUrl = `${protocol}${hostname}/log`;

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${protocol}${hostname}`,
    };

    const data = [
        {
            appName,
            eventName,
            transactionId,
            appContext: {
                userName,
                ...args,
            },
        },
    ];

    fetch(beaconApiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });
};

/**
 * Executing `reportEvent` with additional props in `args` object.
 * @param {*} eventName e.g. 'MyTool-ButtonClicked' (`<ToolName>-<EventName>`)
 * @param {*} args some additional data e.g. { product: 'foo', type: 'bar' }
 */
const reportEventWithOrder = (eventName: string, args: Object) => {
    const orderNumber = getOrderNumber();
    const userId = getUserId();
    const startDate = new Date().toISOString();

    reportEvent(eventName, {
        ...args,
        orderNumber,
        userId,
        startDate,
        endDate: startDate,
    });
};

export default {
    reportEvent,
    reportEventWithOrder,
};
