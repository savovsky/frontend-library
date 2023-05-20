/* eslint-disable max-len */

import keys from '../keysUtils';
import serviceUtils from '.';

const { orderNumber, userId, orderId } = keys;
const {
    responseFrom,
    getProtocolFromUrl,
    isLocalHost,
    isPort80,
    isPort443,
    isPortEmptyString,
    isServerLocalDevelopment,
    isLocalDevelopment,
    getEnvFromUrlHostname,
    getUrlQueryParamValue,
    getUrlQueryParams,
    getEnv,
    getOrderNumber,
    getUserId,
    getOrderId,
    getPermissionsFromJwt,
    getUserNameFromJwt,
    hasPermission,
} = serviceUtils;

const jwtWithPermissions =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwZXJtaXNzaW9ucyI6W3sicGVybWlzc2lvbk5hbWUiOiJmb28ifSx7InBlcm1pc3Npb25OYW1lIjoiYmFyIn0seyJwZXJtaXNzaW9uTmFtZSI6ImJheiJ9XX0.iJeyYLaALWEesn6in_lTDFFEpzav-iCXRnX6yRAoydU';

const jwtMockWithoutUserNameWithEmail =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJlbWFpbCI6Im1pcm9zbGF2LnNhdm92c2tpQGdtYWlsLmNvbSJ9.YSqo1DAuJgk2ACxQ9f5QTPHeaHR6LNucelByWkDwR1g';

const jwtMockWithUserName =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyTmFtZSI6Im1pcm9zbGF2LnNhdm92c2tpIn0.lqmaYyYE3WMYPpQLBR8CGkdpl2Ow8czSz8yFvJKN_pw';

const jwtFake =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

describe('serviceUtils', () => {
    describe(`${responseFrom.name}`, () => {
        test('Returns correct array when Promise resolved', () => {
            const response = 'foo';
            const promise = new Promise(resolve => {
                resolve(response);
            });

            expect(responseFrom(promise)).resolves.toEqual([response, null]);
        });

        test('Returns correct array when Promise rejected', async () => {
            const error = new Error();
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => reject(error), 0);
            });

            await expect(responseFrom(promise.catch())).resolves.toEqual([
                null,
                error,
            ]);
        });
    });

    describe(`${getProtocolFromUrl.name}`, () => {
        test('Returns correct string', () => {
            const protocol = 'foo';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { protocol },
                writable: true,
            });

            expect(getProtocolFromUrl()).toEqual(protocol);
        });
    });

    describe(`${isLocalHost.name}`, () => {
        test('Returns correct boolean', () => {
            const hostname = 'localhost';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname },
                writable: true,
            });

            expect(isLocalHost()).toEqual(true);
        });

        test('Returns correct boolean', () => {
            const hostname = 'xyz.dev.abc.com';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname },
                writable: true,
            });

            expect(isLocalHost()).toEqual(false);
        });
    });

    describe(`${isPort80.name}`, () => {
        test('Returns correct boolean', () => {
            const port = '80';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { port },
                writable: true,
            });

            expect(isPort80()).toEqual(true);
        });

        test('Returns correct boolean', () => {
            const port = '';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { port },
                writable: true,
            });

            expect(isPort80()).toEqual(false);
        });
    });

    describe(`${isPort443.name}`, () => {
        test('Returns correct boolean', () => {
            const port = '443';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { port },
                writable: true,
            });

            expect(isPort443()).toEqual(true);
        });

        test('Returns correct boolean', () => {
            const port = '';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { port },
                writable: true,
            });

            expect(isPort443()).toEqual(false);
        });
    });

    describe(`${isPortEmptyString.name}`, () => {
        test('Returns correct boolean', () => {
            const port = '100';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { port },
                writable: true,
            });

            expect(isPortEmptyString()).toEqual(false);
        });

        test('Returns correct boolean', () => {
            const port = '';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { port },
                writable: true,
            });

            expect(isPortEmptyString()).toEqual(true);
        });
    });

    describe(`${isServerLocalDevelopment.name}`, () => {
        test('Returns correct boolean', () => {
            const hostname = 'localhost';
            const port = '80';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname, port },
                writable: true,
            });

            expect(isServerLocalDevelopment()).toEqual(true);
        });

        test('Returns correct boolean', () => {
            const hostname = 'localhost';
            const port = '443';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname, port },
                writable: true,
            });

            expect(isServerLocalDevelopment()).toEqual(true);
        });

        test('Returns correct boolean', () => {
            const hostname = 'localhost';
            const port = '';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname, port },
                writable: true,
            });

            expect(isServerLocalDevelopment()).toEqual(true);
        });

        test('Returns correct boolean', () => {
            const hostname = 'xyz.dev.abc.com';
            const port = '';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname, port },
                writable: true,
            });

            expect(isServerLocalDevelopment()).toEqual(false);
        });
    });

    describe(`${isLocalDevelopment.name}`, () => {
        test('Returns correct boolean', () => {
            const hostname = 'localhost';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname },
                writable: true,
            });

            expect(isLocalDevelopment()).toEqual(true);
        });

        test('Returns correct boolean', () => {
            const hostname = 'any';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname },
                writable: true,
            });

            expect(isLocalDevelopment()).toEqual(false);
        });
    });

    describe(`${getEnvFromUrlHostname.name}`, () => {
        test('Returns correct string', () => {
            const hostname = 'localhost';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname },
                writable: true,
            });

            expect(getEnvFromUrlHostname()).toEqual('');
        });

        test('Returns correct string', () => {
            const hostname = 'xyz.dev.abc.com';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname },
                writable: true,
            });

            expect(getEnvFromUrlHostname()).toEqual('dev');
        });
    });

    describe(`${getEnv.name}`, () => {
        test('Returns correct string', () => {
            const hostname = 'localhost';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname },
                writable: true,
            });

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => null),
                    setItem: jest.fn(() => null),
                },
                writable: true,
            });

            expect(getEnv()).toEqual('');
        });

        test('Returns correct string', () => {
            const hostname = 'xyz.dev.abc.com';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname },
                writable: true,
            });

            expect(getEnv()).toEqual('dev');
        });
    });

    describe(`${getOrderNumber.name}`, () => {
        test('Returns correct string', () => {
            const search = `?${orderNumber}=123&${userId}=456&${orderId}=789`;

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { search },
                writable: true,
            });

            expect(getOrderNumber()).toEqual('123');
        });
    });

    describe(`${getUserId.name}`, () => {
        test('Returns correct string', () => {
            const search = `?${orderNumber}=123&${userId}=456&${orderId}=789`;

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { search },
                writable: true,
            });

            expect(getUserId()).toEqual('456');
        });
    });

    describe(`${getOrderId.name}`, () => {
        test('Returns correct string', () => {
            const search = `?${orderNumber}=123&${userId}=456&${orderId}=789`;

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { search },
                writable: true,
            });

            expect(getOrderId()).toEqual('789');
        });
    });

    describe(`${getUrlQueryParamValue.name}`, () => {
        test('Returns correct string', () => {
            const search = `?${userId}=1234&${orderId}=5678`;

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { search },
                writable: true,
            });

            expect(getUrlQueryParamValue(userId)).toEqual('1234');
        });

        test('Returns correct string', () => {
            const search = `?${userId}=1234&${orderId}=5678`;

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { search },
                writable: true,
            });

            expect(getUrlQueryParamValue(orderId)).toEqual('5678');
        });

        test('Returns correct string', () => {
            const search = `?${userId}=1234&${orderId}=5678`;

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { search },
                writable: true,
            });

            expect(getUrlQueryParamValue('name')).toEqual('');
        });

        test('Returns correct string', () => {
            const search = '';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { search },
                writable: true,
            });

            expect(getUrlQueryParamValue('name')).toEqual('');
        });
    });

    describe(`${getUrlQueryParams.name}`, () => {
        test('Returns correct string', () => {
            const search = `?${userId}=1234&${orderId}=5678`;

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { search },
                writable: true,
            });

            expect(getUrlQueryParams()).toEqual(
                `${userId}=1234&${orderId}=5678`,
            );
        });

        test('Returns correct string', () => {
            const search = '';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { search },
                writable: true,
            });

            expect(getUrlQueryParams()).toEqual('');
        });
    });

    describe(`${getPermissionsFromJwt.name}`, () => {
        test('Returns correct "permissions" array', () => {
            const jwt = jwtWithPermissions;

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => jwt),
                },
                writable: true,
            });

            expect(getPermissionsFromJwt()).toBeTruthy();
            expect(Array.isArray(getPermissionsFromJwt())).toBe(true);
        });

        test('Returns null if payload has no "permissions" prop', () => {
            const jwt = jwtFake;

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => jwt),
                },
                writable: true,
            });

            expect(getPermissionsFromJwt()).toEqual(null);
        });

        test('Returns null if JWT missing', () => {
            const jwt = null;

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => jwt),
                },
                writable: true,
            });

            expect(getPermissionsFromJwt()).toEqual(null);
        });
    });

    describe(`${getUserNameFromJwt.name}`, () => {
        test('Returns correct string', () => {
            const jwt = jwtMockWithUserName;

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => jwt),
                },
                writable: true,
            });

            expect(getUserNameFromJwt()).toEqual('miroslav.savovski');
        });

        test('Returns correct string', () => {
            const jwt = jwtMockWithoutUserNameWithEmail;

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => jwt),
                },
                writable: true,
            });

            expect(getUserNameFromJwt()).toEqual('miroslav.savovski');
        });

        test('Returns an empty string if payload has no "userName" or "email" props', () => {
            const jwt = jwtFake;

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => jwt),
                },
                writable: true,
            });

            expect(getUserNameFromJwt()).toEqual('');
        });

        test('Returns an empty string if JWT missing', () => {
            const jwt = null;

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => jwt),
                },
                writable: true,
            });

            expect(getUserNameFromJwt()).toEqual('');
        });
    });

    describe(`${hasPermission.name}`, () => {
        test('Returns correct boolean', () => {
            const jwt = jwtWithPermissions;
            const requiredPermissions = ['foo', 'bar'];

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => jwt),
                },
                writable: true,
            });

            expect(hasPermission(requiredPermissions)).toBeTruthy();
        });

        test('Returns correct boolean', () => {
            const jwt = jwtWithPermissions;
            const requiredPermissions = ['abc', 'xyz'];

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => jwt),
                },
                writable: true,
            });

            expect(hasPermission(requiredPermissions)).toBeFalsy();
        });

        test('Returns correct boolean', () => {
            const jwt = jwtFake;
            const requiredPermissions = ['foo', 'bar'];

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => jwt),
                },
                writable: true,
            });

            expect(hasPermission(requiredPermissions)).toBeFalsy();
        });
    });
});
