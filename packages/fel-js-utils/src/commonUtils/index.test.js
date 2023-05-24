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
            const output = '$5.00';

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

            expect(stringToId(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = null;
            const defaultValue = '';
            const output = defaultValue;

            expect(stringToId(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = null;
            const defaultValue = 'foo';
            const output = defaultValue;

            expect(stringToId(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '';
            const output = str.notAvailable;

            expect(stringToId(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '';
            const defaultValue = 'foo';
            const output = defaultValue;

            expect(stringToId(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '  ';
            const output = str.notAvailable;

            expect(stringToId(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '  ';
            const defaultValue = 'foo';
            const output = defaultValue;

            expect(stringToId(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = ' ab c  ';
            const output = 'ab c';

            expect(stringToId(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = 0;
            const output = '0';

            expect(stringToId(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = 10;
            const output = '10';

            expect(stringToId(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = 'abc';
            const output = 'abc';

            expect(stringToId(value)).toEqual(output);
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
        test('Returns correct string', () => {
            expect(sortArrayOfObjectsBy(5.67)).toEqual('$5.67');
        });
    });

    describe(`${getValueFromObjByKeyAndReturnString.name}`, () => {
        test('Returns correct string', () => {
            expect(getValueFromObjByKeyAndReturnString(5.67)).toEqual('$5.67');
        });
    });

    describe(`${concatCityStateZip.name}`, () => {
        test('Returns correct string', () => {
            expect(concatCityStateZip(5.67)).toEqual('$5.67');
        });
    });

    describe(`${concatFullName.name}`, () => {
        test('Returns correct string', () => {
            expect(concatFullName(5.67)).toEqual('$5.67');
        });
    });
});
