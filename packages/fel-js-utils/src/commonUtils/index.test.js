import commonUtils from '.';
import str from '../stringsUtils';

const {
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
} = commonUtils;

describe('commonUtils', () => {
    describe(`${addDolarSign.name}`, () => {
        test('Returns correct string', () => {
            const input = 5.67;
            const output = '$5.67';

            expect(addDolarSign(input)).toEqual(output);
        });

        test('Returns correct string', () => {
            const input = -5.67;
            const output = '-$5.67';

            expect(addDolarSign(input)).toEqual(output);
        });

        test('Returns correct string', () => {
            const input = 0;
            const output = '$0.00';

            expect(addDolarSign(input)).toEqual(output);
        });

        test('Returns correct string', () => {
            const input = '5';
            const output = '';

            expect(addDolarSign(input)).toEqual(output);
        });

        test('Returns correct string', () => {
            const input = null;
            const output = str.notAvailable;

            expect(addDolarSign(input)).toEqual(output);
        });
    });

    describe(`${stringToId.name}`, () => {
        test('Returns correct string', () => {
            const input = 'Hello  BIG world';
            const output = 'hello-big-world';

            expect(stringToId(input)).toEqual(output);
        });

        test('Returns correct string', () => {
            const input = null;
            const output = 'string-to-id';

            expect(stringToId(input)).toEqual(output);
        });

        test('Returns correct string', () => {
            const input = '   ';
            const output = 'string-to-id';

            expect(stringToId(input)).toEqual(output);
        });
    });

    describe(`${valueToString.name}`, () => {
        test('Returns correct string', () => {
            const value = null;
            const output = str.notAvailable;

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = null;
            const defaultValue = '';
            const output = defaultValue;

            expect(valueToString(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = null;
            const defaultValue = 'foo';
            const output = defaultValue;

            expect(valueToString(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '';
            const output = str.notAvailable;

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '';
            const defaultValue = 'foo';
            const output = defaultValue;

            expect(valueToString(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '  ';
            const output = str.notAvailable;

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '  ';
            const defaultValue = 'foo';
            const output = defaultValue;

            expect(valueToString(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = ' ab c  ';
            const output = 'ab c';

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = 0;
            const output = '0';

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = 10;
            const output = '10';

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = 'abc';
            const output = 'abc';

            expect(valueToString(value)).toEqual(output);
        });
    });

    describe(`${numberToTwoDecimalsString.name}`, () => {
        test('Returns correct string', () => {
            const value = 0;
            const output = '0.00';

            expect(numberToTwoDecimalsString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = 5.146;
            const output = '5.15';

            expect(numberToTwoDecimalsString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = 5.145;
            const output = '5.14';

            expect(numberToTwoDecimalsString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = -5;
            const output = '5.00';

            expect(numberToTwoDecimalsString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = -1.234;
            const output = '1.23';

            expect(numberToTwoDecimalsString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = undefined;
            const output = '-';

            expect(numberToTwoDecimalsString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = null;
            const output = '-';

            expect(numberToTwoDecimalsString(value)).toEqual(output);
        });
    });

    describe(`${toTwoDecNum.name}`, () => {
        test('Returns correct number', () => {
            const value = null;
            const output = 0.0;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = 0;
            const output = 0.0;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = 10.5300000000001;
            const output = 10.53;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = '10.5300000000001';
            const output = 10.53;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = 19.7699999999998;
            const output = 19.77;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = '19.7699999999998';
            const output = 19.77;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = 0.000000000000001;
            const output = 0.0;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = '0.000000000000001';
            const output = 0.0;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = 0.005;
            const output = 0.01;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = 0.004;
            const output = 0.0;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = 5.33 + 5.2;
            const output = 10.53;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = 5.14 + 8.92;
            const output = 14.06;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = 3 * 8.92;
            const output = 26.76;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = 3 * 5.2;
            const output = 15.6;

            expect(toTwoDecNum(value)).toEqual(output);
        });

        test('Returns correct number', () => {
            const value = 48813.84 + 3954.39;
            const output = 52768.23;

            expect(toTwoDecNum(value)).toEqual(output);
        });
    });

    describe(`${truncateString.name}`, () => {
        test('Returns correct string', () => {
            const text = 'Ab cdef';
            const limit = 5;
            const output = 'Ab cd...';

            expect(truncateString(text, limit)).toEqual(output);
        });

        test('Returns correct string', () => {
            const text = 'Abcd';
            const limit = 5;
            const output = 'Abcd';

            expect(truncateString(text, limit)).toEqual(output);
        });
    });

    describe(`${scrollToTop.name}`, () => {
        test('set "scrollTop" to 0', () => {
            global.window = Object.create(window);
            Object.defineProperty(window, 'body', {
                value: {
                    scrollTop: {
                        value: 100,
                        writable: true,
                    },
                },
                writable: true,
            });

            scrollToTop();

            expect(global.document.body.scrollTop).toEqual(0);
        });

        test('set "scrollTop" to 0', () => {
            global.window = Object.create(window);
            Object.defineProperty(window, 'documentElement', {
                value: {
                    scrollTop: {
                        value: 200,
                        writable: true,
                    },
                },
                writable: true,
            });

            scrollToTop();

            expect(global.document.documentElement.scrollTop).toEqual(0);
        });
    });

    describe(`${sortArrayOfObjectsBy.name}`, () => {
        test('Returns correct ordered array', () => {
            const arr = [
                { bar: 'a', foo: '1' },
                { bar: 'b', foo: '3' },
                { bar: 'c', foo: '2' },
            ];

            const sortBy = {
                isAscending: true,
                propKey: 'foo',
            };

            const output = [
                { bar: 'a', foo: '1' },
                { bar: 'c', foo: '2' },
                { bar: 'b', foo: '3' },
            ];

            expect(sortArrayOfObjectsBy(arr, sortBy)).toEqual(output);
        });

        test('Returns correct ordered array', () => {
            const arr = [
                { bar: 'a', foo: 1 },
                { bar: 'b', foo: 3 },
                { bar: 'c', foo: 2 },
            ];

            const sortBy = {
                isAscending: true,
                propKey: 'foo',
            };

            const output = [
                { bar: 'a', foo: 1 },
                { bar: 'c', foo: 2 },
                { bar: 'b', foo: 3 },
            ];

            expect(sortArrayOfObjectsBy(arr, sortBy)).toEqual(output);
        });

        test('Returns correct ordered array', () => {
            const arr = [
                { bar: 'a', foo: '1' },
                { bar: 'b', foo: '3' },
                { bar: 'c', foo: '2' },
            ];

            const sortBy = {
                isAscending: false,
                propKey: 'foo',
            };

            const output = [
                { bar: 'b', foo: '3' },
                { bar: 'c', foo: '2' },
                { bar: 'a', foo: '1' },
            ];

            expect(sortArrayOfObjectsBy(arr, sortBy)).toEqual(output);
        });

        test('Returns correct ordered array', () => {
            const arr = [
                { bar: 'a', foo: 1 },
                { bar: 'b', foo: 2 },
                { bar: 'c', foo: 3 },
            ];

            const sortBy = {
                isAscending: false,
                propKey: 'foo',
            };

            const output = [
                { bar: 'c', foo: 3 },
                { bar: 'b', foo: 2 },
                { bar: 'a', foo: 1 },
            ];

            expect(sortArrayOfObjectsBy(arr, sortBy)).toEqual(output);
        });

        test('Returns correct ordered array', () => {
            const arr = [
                { bar: 'a', foo: '$1.00', isoDateOrNumber: { foo: 1.0 } },
                { bar: 'b', foo: '$11.00', isoDateOrNumber: { foo: 11.0 } },
                { bar: 'c', foo: '$2.00', isoDateOrNumber: { foo: 2.0 } },
            ];

            const sortBy = {
                isAscending: false,
                propKey: 'foo',
                columnProps: { isoDateOrNumber: true },
            };

            const output = [
                { bar: 'b', foo: '$11.00', isoDateOrNumber: { foo: 11.0 } },
                { bar: 'c', foo: '$2.00', isoDateOrNumber: { foo: 2.0 } },
                { bar: 'a', foo: '$1.00', isoDateOrNumber: { foo: 1.0 } },
            ];

            expect(sortArrayOfObjectsBy(arr, sortBy)).toEqual(output);
        });

        test('Returns correct ordered array', () => {
            const arr = [
                { bar: 'a', foo: '$0.10', isoDateOrNumber: { foo: 0.1 } },
                { bar: 'b', foo: '$0.11', isoDateOrNumber: { foo: 0.11 } },
                { bar: 'c', foo: '$0.02', isoDateOrNumber: { foo: 0.02 } },
            ];

            const sortBy = {
                isAscending: true,
                propKey: 'foo',
                columnProps: { isoDateOrNumber: true },
            };

            const output = [
                { bar: 'c', foo: '$0.02', isoDateOrNumber: { foo: 0.02 } },
                { bar: 'a', foo: '$0.10', isoDateOrNumber: { foo: 0.1 } },
                { bar: 'b', foo: '$0.11', isoDateOrNumber: { foo: 0.11 } },
            ];

            expect(sortArrayOfObjectsBy(arr, sortBy)).toEqual(output);
        });

        test('Returns correct ordered array', () => {
            const arr = [
                // eslint-disable-next-line prettier/prettier
                { bar: 'a', foo: '05/07/2022', isoDateOrNumber: { foo: '2022-07-05T08:33:20.000Z' } },
                // eslint-disable-next-line prettier/prettier
                { bar: 'b', foo: '05/07/2019', isoDateOrNumber: { foo: '2019-07-05T08:33:20.000Z' } },
                // eslint-disable-next-line prettier/prettier
                { bar: 'c', foo: '05/05/2022', isoDateOrNumber: { foo: '2022-05-05T08:33:20.000Z' } },

            ];

            const sortBy = {
                isAscending: true,
                propKey: 'foo',
                columnProps: { isoDateOrNumber: true },
            };

            const output = [
                // eslint-disable-next-line prettier/prettier
                { bar: 'b', foo: '05/07/2019', isoDateOrNumber: { foo: '2019-07-05T08:33:20.000Z' } },
                // eslint-disable-next-line prettier/prettier
                { bar: 'c', foo: '05/05/2022', isoDateOrNumber: { foo: '2022-05-05T08:33:20.000Z' } },
                // eslint-disable-next-line prettier/prettier
                { bar: 'a', foo: '05/07/2022', isoDateOrNumber: { foo: '2022-07-05T08:33:20.000Z' } },
            ];

            expect(sortArrayOfObjectsBy(arr, sortBy)).toEqual(output);
        });

        test('Returns correct ordered array', () => {
            const arr = [
                // eslint-disable-next-line prettier/prettier
                { bar: 'a', foo: '05/07/2022', isoDateOrNumber: { foo: '2022-07-05T08:33:20.000Z' } },
                // eslint-disable-next-line prettier/prettier
                { bar: 'b', foo: '05/07/2019', isoDateOrNumber: { foo: '2019-07-05T08:33:20.000Z' } },
                // eslint-disable-next-line prettier/prettier
                { bar: 'c', foo: '05/05/2022', isoDateOrNumber: { foo: '2022-05-05T08:33:20.000Z' } },

            ];

            const sortBy = {
                isAscending: false,
                propKey: 'foo',
                columnProps: { isoDateOrNumber: true },
            };

            const output = [
                // eslint-disable-next-line prettier/prettier
                { bar: 'a', foo: '05/07/2022', isoDateOrNumber: { foo: '2022-07-05T08:33:20.000Z' } },
                // eslint-disable-next-line prettier/prettier
                { bar: 'c', foo: '05/05/2022', isoDateOrNumber: { foo: '2022-05-05T08:33:20.000Z' } },
                // eslint-disable-next-line prettier/prettier
                { bar: 'b', foo: '05/07/2019', isoDateOrNumber: { foo: '2019-07-05T08:33:20.000Z' } },
            ];

            expect(sortArrayOfObjectsBy(arr, sortBy)).toEqual(output);
        });
    });

    describe(`${getValueFromObjByKeyAndReturnString.name}`, () => {
        test('Returns correct string', () => {
            const obj = { foo: 'bar' };
            const key = 'foo';
            const output = 'bar';

            expect(getValueFromObjByKeyAndReturnString(obj, key)).toEqual(
                output,
            );
        });

        test('Returns correct string', () => {
            const obj = { foo: 1 };
            const key = 'foo';
            const output = '1';

            expect(getValueFromObjByKeyAndReturnString(obj, key)).toEqual(
                output,
            );
        });

        test('Returns correct string', () => {
            const obj = { foo: 0 };
            const key = 'foo';
            const output = '0';

            expect(getValueFromObjByKeyAndReturnString(obj, key)).toEqual(
                output,
            );
        });

        test('Returns correct string', () => {
            const obj = { foo: 'bar' };
            const key = 'name';
            const output = str.notAvailable;

            expect(getValueFromObjByKeyAndReturnString(obj, key)).toEqual(
                output,
            );
        });

        test('Returns correct string', () => {
            const obj = { foo: 'bar' };
            const key = 'name';
            const defaultValue = '';
            const output = defaultValue;

            expect(
                getValueFromObjByKeyAndReturnString(obj, key, defaultValue),
            ).toEqual(output);
        });

        test('Returns correct string', () => {
            const obj = { foo: 'bar' };
            const key = 'name';
            const defaultValue = '123';
            const output = defaultValue;

            expect(
                getValueFromObjByKeyAndReturnString(obj, key, defaultValue),
            ).toEqual(output);
        });
    });

    describe(`${concatCityStateZip.name}`, () => {
        test('Returns correct string', () => {
            const city = null;
            const state = null;
            const postcode = null;
            const output = str.notAvailable;

            expect(concatCityStateZip(city, state, postcode)).toEqual(output);
        });

        test('Returns correct string', () => {
            const city = 'foo';
            const state = null;
            const postcode = null;
            const output = 'foo';

            expect(concatCityStateZip(city, state, postcode)).toEqual(output);
        });

        test('Returns correct string', () => {
            const city = 'foo';
            const state = 'bar';
            const postcode = null;
            const output = 'foo, bar';

            expect(concatCityStateZip(city, state, postcode)).toEqual(output);
        });

        test('Returns correct string', () => {
            const city = 'foo';
            const state = 'bar';
            const postcode = 'baz';
            const output = 'foo, bar baz';

            expect(concatCityStateZip(city, state, postcode)).toEqual(output);
        });

        test('Returns correct string', () => {
            const city = null;
            const state = 'bar';
            const postcode = 'baz';
            const output = 'bar baz';

            expect(concatCityStateZip(city, state, postcode)).toEqual(output);
        });

        test('Returns correct string', () => {
            const city = null;
            const state = 'bar';
            const postcode = null;
            const output = 'bar';

            expect(concatCityStateZip(city, state, postcode)).toEqual(output);
        });

        test('Returns correct string', () => {
            const city = 'foo';
            const state = null;
            const postcode = 'baz';
            const output = 'foo, baz';

            expect(concatCityStateZip(city, state, postcode)).toEqual(output);
        });

        test('Returns correct string', () => {
            const city = null;
            const state = null;
            const postcode = 'baz';
            const output = 'baz';

            expect(concatCityStateZip(city, state, postcode)).toEqual(output);
        });
    });

    describe(`${concatFullName.name}`, () => {
        test('Returns correct string', () => {
            const firstName = null;
            const lastName = null;
            const output = str.notAvailable;

            expect(concatFullName(firstName, lastName)).toEqual(output);
        });

        test('Returns correct string', () => {
            const firstName = 'foo';
            const lastName = 'bar';
            const output = 'foo bar';

            expect(concatFullName(firstName, lastName)).toEqual(output);
        });

        test('Returns correct string', () => {
            const firstName = 'foo';
            const lastName = null;
            const output = 'foo';

            expect(concatFullName(firstName, lastName)).toEqual(output);
        });

        test('Returns correct string', () => {
            const firstName = null;
            const lastName = 'bar';
            const output = 'bar';

            expect(concatFullName(firstName, lastName)).toEqual(output);
        });
    });
});
