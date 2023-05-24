import pageUrlUtils from '.';
import keys from '../keysUtils';

const { somePageUrl } = pageUrlUtils;

const { userId, orderId } = keys;

describe('pageUrlUtils', () => {
    const userID = 'foo';
    const orderID = '123';
    const pathname = `/users/${userID}/orders`;
    const uid = userID;

    describe(`${somePageUrl.name}`, () => {
        test('Returns corect URL without additionalQueryParams', () => {
            const protocol = 'https:';
            const hostname = 'xyz.dev.abc.com';
            const search = `?${userId}=${userID}&${orderId}=${orderID}`;

            const url = `${protocol}//${hostname}${pathname}${search}`;

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { protocol, hostname, search },
                writable: true,
            });

            expect(somePageUrl()).toEqual(url);
        });

        test('Returns corect URL with additionalQueryParams', () => {
            const protocol = 'https:';
            const hostname = 'xyz.dev.abc.com';
            const search = `?${userId}=${userID}&${orderId}=${orderID}`;
            const additionalQueryParams = 'origin=bar&foo=baz';

            const url = `${protocol}//${hostname}${pathname}${search}&${additionalQueryParams}`;

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { protocol, hostname, search },
                writable: true,
            });

            expect(somePageUrl(additionalQueryParams)).toEqual(url);
        });

        test('Returns corect URL with additionalQueryParams', () => {
            const protocol = 'https:';
            const hostname = 'xyz.dev.abc.com';
            const additionalQueryParams = 'origin=bar&foo=baz';

            const url = `${protocol}//${hostname}${pathname}?${additionalQueryParams}`;

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { protocol, hostname },
                writable: true,
            });

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => uid),
                },
                writable: true,
            });

            expect(somePageUrl(additionalQueryParams)).toEqual(url);
        });

        test('Returns corect URL when localhost', () => {
            const protocol = 'http:';
            const hostname = 'localhost';
            const port = '';

            const url = `${protocol}//${hostname}${pathname}`;

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { protocol, hostname, port },
                writable: true,
            });

            global.window = Object.create(window);
            Object.defineProperty(window, 'sessionStorage', {
                value: {
                    getItem: jest.fn(() => uid),
                },
                writable: true,
            });

            expect(somePageUrl()).toEqual(url);
        });
    });
});
