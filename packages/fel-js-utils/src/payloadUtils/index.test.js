/* eslint-disable no-console */

import str from '../stringsUtils';
import payloadUtils from '.';

const {
    doesPayloadObjectHaveProps,
    isArray,
    isObject,
    isPayloadValid,
    httpErrorMessage,
} = payloadUtils;

describe('payloadUtils', () => {
    const testMsg = 'Returns correct boolean';

    describe(`${doesPayloadObjectHaveProps.name}`, () => {
        // saves original console.error function
        const log = console.error;

        // creates a new mock function for each test
        beforeEach(() => {
            console.error = jest.fn();
        });

        // restores original console.error after all tests
        afterAll(() => {
            console.error = log;
        });

        const apiName = 'foo';
        const nodeName = 'bar';
        const props = ['a', 'b', 'c'];

        test(testMsg, () => {
            const obj = {
                a: 'foo',
                c: 1,
            };

            expect(
                doesPayloadObjectHaveProps(props, obj, apiName, nodeName),
            ).toEqual(false);
            expect(console.error).toHaveBeenCalledWith(
                `${nodeName}[b] property is missing in the "${apiName}" API response payload`,
            );
        });

        test(testMsg, () => {
            const obj = {
                a: 'foo',
                b: null,
                c: 1,
            };

            expect(
                doesPayloadObjectHaveProps(props, obj, apiName, nodeName),
            ).toEqual(true);
            expect(console.error).not.toHaveBeenCalled();
        });
    });

    describe(`${isArray.name}`, () => {
        test(testMsg, () => {
            const value = 'foo';

            expect(isArray(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = 123;

            expect(isArray(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = null;

            expect(isArray(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = {};

            expect(isArray(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = [];

            expect(isArray(value)).toEqual(true);
        });

        test(testMsg, () => {
            const value = [{}];

            expect(isArray(value)).toEqual(true);
        });
    });

    describe(`${isObject.name}`, () => {
        test(testMsg, () => {
            const value = 'foo';

            expect(isObject(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = 123;

            expect(isObject(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = null;

            expect(isObject(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = [];

            expect(isObject(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = [{}];

            expect(isObject(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = {};

            expect(isObject(value)).toEqual(true);
        });

        test(testMsg, () => {
            const value = { a: [] };

            expect(isObject(value)).toEqual(true);
        });
    });

    describe(`${isPayloadValid.name}`, () => {
        // saves original console.error function
        const log = console.error;

        // creates a new mock function for each test
        beforeEach(() => {
            console.error = jest.fn();
        });

        // restores original console.error after all tests
        afterAll(() => {
            console.error = log;
        });

        const testMessage =
            'Returns correct boolean with/without console.error message';
        const apiName = 'foo';
        const obj = {
            a: 'str',
            b: 123,
            c: null,
            d: {},
            e: [],
            f: {
                fa: 'str',
                fb: 123,
                fc: null,
                fd: {},
                fe: [],
            },
            g: ['ga', 'gb'],
            j: [
                {
                    ja: 'str',
                    jb: 123,
                    jc: null,
                    jd: {},
                    je: [],
                },
            ],
        };

        describe('Scenario - payload is object', () => {
            const model = obj;

            test(testMessage, () => {
                const payload = [];

                expect(isPayloadValid(model, payload, apiName)).toEqual(false);
                expect(console.error).toHaveBeenCalledWith(
                    `An 'object' is expected for the 'payload' from the "${apiName}" API response`,
                );
            });

            test(testMessage, () => {
                const payload = {
                    a: 'str',
                    b: 123,
                    c: null,
                    d: {},
                    e: [],
                    g: ['ga', 'gb'],
                };

                expect(isPayloadValid(model, payload, apiName)).toEqual(false);
                expect(console.error).toHaveBeenCalledTimes(1);
                expect(console.error).toHaveBeenCalledWith(
                    `payload[f] property is missing in the "${apiName}" API response payload`,
                );
            });

            test(testMessage, () => {
                const payload = obj;

                expect(isPayloadValid(model, payload, apiName)).toEqual(true);
                expect(console.error).not.toHaveBeenCalled();
            });

            test(testMessage, () => {
                const payload = {
                    ...obj,
                    foo: 'foo',
                    bar: [1, 2, 3],
                    baz: { a: 'b' },
                };

                expect(isPayloadValid(model, payload, apiName)).toEqual(true);
                expect(console.error).not.toHaveBeenCalled();
            });
        });

        describe('Scenario - payload is array', () => {
            const model = [obj];

            test(testMessage, () => {
                const payload = {};

                expect(isPayloadValid(model, payload, apiName)).toEqual(false);
                expect(console.error).toHaveBeenCalledWith(
                    `An 'array' is expected for the 'payload' from the "${apiName}" API response`,
                );
            });

            test(testMessage, () => {
                const payload = ['foo', obj];

                expect(isPayloadValid(model, payload, apiName)).toEqual(false);
                expect(console.error).toHaveBeenCalledWith(
                    `Array as a collection of objects is expected for the 'payload' from the "${apiName}" API response`,
                );
            });

            test(testMessage, () => {
                const payload = [];

                expect(isPayloadValid(model, payload, apiName)).toEqual(true);
                expect(console.error).not.toHaveBeenCalled();
            });

            test(testMessage, () => {
                const model1 = ['a', 'b', 'c'];
                const payload = [1, null, 'a', {}];

                expect(isPayloadValid(model1, payload, apiName)).toEqual(true);
                expect(console.error).not.toHaveBeenCalled();
            });

            test(testMessage, () => {
                const payload = [
                    {
                        a: 'str',
                        b: 123,
                        c: null,
                        d: {},
                        e: [],
                        g: ['ga', 'gb'],
                    },
                ];

                expect(isPayloadValid(model, payload, apiName)).toEqual(false);
                expect(console.error).toHaveBeenCalledTimes(1);
                expect(console.error).toHaveBeenCalledWith(
                    `payload[0][f] property is missing in the "${apiName}" API response payload`,
                );
            });

            test(testMessage, () => {
                const payload = [obj];

                expect(isPayloadValid(model, payload, apiName)).toEqual(true);
                expect(console.error).not.toHaveBeenCalled();
            });

            test(testMessage, () => {
                const payload = [
                    {
                        ...obj,
                        foo: 'foo',
                        bar: [1, 2, 3],
                        baz: { a: 'b' },
                    },
                ];

                expect(isPayloadValid(model, payload, apiName)).toEqual(true);
                expect(console.error).not.toHaveBeenCalled();
            });
        });

        describe('Scenario - payload is a number or a string', () => {
            test(testMessage, () => {
                const model = 123;
                const payload = 'foo';

                expect(isPayloadValid(model, payload, apiName)).toEqual(false);
                expect(console.error).toHaveBeenCalledTimes(1);
                expect(console.error).toHaveBeenCalledWith(
                    `A 'number' is expected for the 'payload' from the "${apiName}" API response`,
                );
            });

            test(testMessage, () => {
                const model = 'foo';
                const payload = 123;

                expect(isPayloadValid(model, payload, apiName)).toEqual(false);
                expect(console.error).toHaveBeenCalledTimes(1);
                expect(console.error).toHaveBeenCalledWith(
                    `A 'string' is expected for the 'payload' from the "${apiName}" API response`,
                );
            });

            test(testMessage, () => {
                const model = 456;
                const payload = 123;

                expect(isPayloadValid(model, payload, apiName)).toEqual(true);
                expect(console.error).not.toHaveBeenCalled();
            });

            test(testMessage, () => {
                const model = 'foo';
                const payload = 'bar';

                expect(isPayloadValid(model, payload, apiName)).toEqual(true);
                expect(console.error).not.toHaveBeenCalled();
            });
        });

        describe('Scenario - payload is a null or undefined', () => {
            test(testMessage, () => {
                const payload = null;
                const model = obj;

                expect(isPayloadValid(model, payload, apiName)).toEqual(false);
                expect(console.error).toHaveBeenCalled();
            });

            test(testMessage, () => {
                const payload = undefined;
                const model = obj;

                expect(isPayloadValid(model, payload, apiName)).toEqual(false);
                expect(console.error).toHaveBeenCalled();
            });
        });

        describe('Scenario - model is a null or undefined', () => {
            test(testMessage, () => {
                const payload = obj;
                const model = null;

                expect(isPayloadValid(model, payload, apiName)).toEqual(true);
                expect(console.error).not.toHaveBeenCalled();
            });

            test(testMessage, () => {
                const payload = obj;
                const model = undefined;

                expect(isPayloadValid(model, payload, apiName)).toEqual(true);
                expect(console.error).not.toHaveBeenCalled();
            });
        });
    });

    describe(`${httpErrorMessage.name}`, () => {
        test(testMsg, () => {
            const error = 'foo';

            expect(httpErrorMessage(error)).toEqual(str.somethingHasGoneWrong);
        });

        test(testMsg, () => {
            const error = {};

            expect(httpErrorMessage(error)).toEqual(str.somethingHasGoneWrong);
        });

        test(testMsg, () => {
            const error = { foo: 'bar' };

            expect(httpErrorMessage(error)).toEqual(str.somethingHasGoneWrong);
        });

        test(testMsg, () => {
            const error = [];

            expect(httpErrorMessage(error)).toEqual(str.somethingHasGoneWrong);
        });

        test(testMsg, () => {
            const error = null;

            expect(httpErrorMessage(error)).toEqual(str.somethingHasGoneWrong);
        });

        test(testMsg, () => {
            const error = {
                response: {
                    data: {
                        message: 'foo',
                    },
                },
            };

            expect(httpErrorMessage(error)).toEqual(
                error.response.data.message,
            );
        });

        test(testMsg, () => {
            const error = {
                response: {
                    data: {},
                    status: 'foo',
                },
            };

            expect(httpErrorMessage(error)).toEqual(
                `${str.requestFailedWithStatus} ${error.response.status}.`,
            );
        });

        test(testMsg, () => {
            const error = {
                message: 'foo',
            };

            expect(httpErrorMessage(error)).toEqual(error.message);
        });

        test(testMsg, () => {
            const error = {
                data: {
                    message: 'foo',
                },
            };

            expect(httpErrorMessage(error)).toEqual(error.data.message);
        });

        test(testMsg, () => {
            const error = {
                data: {
                    status: 'foo',
                },
            };

            expect(httpErrorMessage(error)).toEqual(
                `${str.requestFailedWithStatus} ${error.data.status}.`,
            );
        });

        test(testMsg, () => {
            const error150chars =
                // eslint-disable-next-line max-len
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryas standard dummy text ever since the 1500';

            const errorExt = 'ABCDEFGJIJKLMNOPQ';
            const error = {
                message: error150chars + errorExt,
            };

            const output = `${error150chars}...`;

            expect(httpErrorMessage(error)).toEqual(output);
        });
    });
});
