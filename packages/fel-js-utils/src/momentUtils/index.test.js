import momentUtils from '.';
import str from '../stringsUtils';

const { formatDate, formatTime, isOlderThan, tz } = momentUtils;

describe('momentUtils', () => {
    describe(`${tz.name}`, () => {
        test('Returns provided timeZone', () => {
            const timeZone = 'foo';

            expect(tz(timeZone)).toEqual('foo');
        });

        test('Returns default timeZone if such is not provided', () => {
            const timeZone = '';

            expect(tz(timeZone)).toEqual('US/Pacific');
        });

        test('Returns default timeZone if such is not provided', () => {
            expect(tz()).toEqual('US/Pacific');
        });
    });

    describe(`${formatDate.name}`, () => {
        test('Returns correct string as date format when the provided value is valid ISO format', () => {
            const date = '2021-01-13T16:43:59.000Z';

            expect(formatDate(date)).toEqual('Jan 13, 2021');
        });

        test('Returns an empty string when the provided value is not in valid date format', () => {
            const date = 'foo';

            expect(formatDate(date)).toEqual('');
        });

        test(`Returns a string ${str.notAvailable} when the provided value is not a date`, () => {
            const date = null;

            expect(formatDate(date)).toEqual(str.notAvailable);
        });

        test('Returns an empty string when the provided value is not a valid unix timestamp', () => {
            const date = 11111111111111111111111111;

            expect(formatDate(date)).toEqual('');
        });

        test('Returns correct string as date format when the provided value is valid unix timestamp', () => {
            const date = 1234;

            expect(formatDate(date)).toEqual('Dec 31, 1969');
        });
    });

    describe(`${formatTime.name}`, () => {
        test('Returns correct string as time format when the provided value is valid ISO format', () => {
            const date = '2021-01-13T16:43:59.000Z';

            expect(formatTime(date)).toEqual('08:43 AM');
        });

        test('Returns an empty string when the provided value is not in valid date format', () => {
            const date = 'foo';

            expect(formatTime(date)).toEqual('');
        });

        test(`Returns an empty string when the provided value is not a date`, () => {
            const date = null;

            expect(formatTime(date)).toEqual('');
        });

        test('Returns an empty string when the provided value is not a valid unix timestamp', () => {
            const date = 11111111111111111111111111;

            expect(formatTime(date)).toEqual('');
        });

        test('Returns correct string as date format when the provided value is valid unix timestamp', () => {
            const date = 1234;

            expect(formatTime(date)).toEqual('04:00 PM');
        });
    });

    describe(`${isOlderThan.name}`, () => {
        const hours = 24;

        test('Returns correct boolean when the provided value is valid ISO format', () => {
            const date = '2021-01-13T16:43:59.000Z';

            expect(isOlderThan(date, hours)).toEqual(true);
        });

        test('Returns correct boolean when the provided value is not in valid date format', () => {
            const date = 'foo';

            expect(isOlderThan(date, hours)).toEqual(false);
        });

        test(`Returns correct boolean when the provided value is not a date`, () => {
            const date = null;

            expect(isOlderThan(date, hours)).toEqual(false);
        });

        test('Returns correct boolean when the provided value is not a valid unix timestamp', () => {
            const date = 11111111111111111111111111;

            expect(isOlderThan(date, hours)).toEqual(false);
        });

        test('Returns correct boolean when the provided value is valid unix timestamp', () => {
            const date = 1675777545244;

            expect(isOlderThan(date, hours)).toEqual(true);
        });
    });
});
