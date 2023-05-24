// @flow

import moment from 'moment-timezone';

import str from '../stringsUtils';

// PST - Pacific Standart Time
// UTC - Coordinated Universal Time
// PST - UTC - 8 (offset: -8)

/**
 * Returns as default value timeZone = 'US/Pacific' if arg is not proveded
 * @param {string} timeZone
 * @returns `string`
 */
const tz = (timeZone?: string): string => {
    return timeZone || 'US/Pacific';
};

/**
 * Formats a provided date to a human-readable date format
 * @param {(string|number)} date
 * @param {string} dateformat e.g. 'ddd MM/DD'; 'ddd MM/DD/YYYY'
 * - default: 'MMM DD, YYYY'
 * @param {string} timeZone e.g. 'US/Mountain'; 'US/Central'; 'US/Eastern'; 'UTC'; ...
 * - default: 'US/Pacific' (PST)
 * @returns `string` `'human-readable date'` | `''` | `'N/A'`
 */
const formatDate = (
    date: string | number,
    dateformat?: string,
    timeZone?: string,
): string => {
    const format = dateformat || 'MMM DD, YYYY';

    if (typeof date === 'string') {
        return moment(date, 'YYYY-MM-DD').isValid()
            ? moment.tz(date, tz(timeZone)).format(format)
            : '';
    }

    if (typeof date === 'number') {
        return moment.unix(date, 'YYYY-MM-DD').isValid()
            ? moment.tz(date, tz(timeZone)).format(format)
            : '';
    }

    return str.notAvailable;
};

/**
 * Formats a provided date to a human-readable time format
 * @param {(string|number)} date
 * @param {string} dateformat e.g. 'ddd MM/DD'; 'ddd MM/DD/YYYY'
 * - default: 'hh:mm A'
 * @param {string} timeZone e.g. 'US/Mountain'; 'US/Central'; 'US/Eastern'; 'UTC'; ...
 * - default: 'US/Pacific' (PST)
 * @returns `string` `'human-readable time'` | `''`
 */
const formatTime = (
    date: string | number,
    timeformat?: string,
    timeZone?: string,
): string => {
    const format = timeformat || 'hh:mm A';

    if (typeof date === 'string') {
        return moment(date, 'hh:mm A').isValid()
            ? moment.tz(date, tz(timeZone)).format(format)
            : '';
    }

    if (typeof date === 'number') {
        return moment.unix(date, 'hh:mm A').isValid()
            ? moment.tz(date, tz(timeZone)).format(format)
            : '';
    }

    return '';
};

/**
 * Checks if the provided date is older than the provided period in hours
 * @param {string | number} date
 * @param {string} hours
 * @param {string} timeZone e.g. 'US/Mountain'; 'US/Central'; 'US/Eastern'; 'UTC'; ...
 * - default: 'US/Pacific' (PST)
 * @returns `boolean`
 */
const isOlderThan = (
    date: string | number,
    hours: number,
    timeZone?: string,
): boolean => {
    const now = moment.tz(moment(), tz(timeZone));

    const providedDate = () => {
        if (typeof date === 'string') {
            return moment(date, 'hh:mm A').isValid()
                ? moment.tz(date, tz(timeZone))
                : null;
        }

        if (typeof date === 'number') {
            return moment.unix(date, 'hh:mm A').isValid()
                ? moment.tz(date, tz(timeZone))
                : null;
        }

        return null;
    };

    const duration = moment.duration(now.diff(providedDate())).as('hours');

    return duration > hours;
};

export default {
    formatDate,
    formatTime,
    isOlderThan,
    // export for testing
    tz,
};
