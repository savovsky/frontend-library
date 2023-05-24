import auditUtils from '.';

const { reportEvent, reportEventWithOrder } = auditUtils;

describe('auditUtils', () => {
    const eventName = 'foo';
    const args = { bar: 'baz' };

    describe(`${reportEvent.name}`, () => {
        test('Returns undefined', () => {
            expect(reportEvent(eventName, args)).toBeUndefined();
        });

        test('Returns undefined', () => {
            const hostname = 'xyz.internal.abc.com';

            global.window = Object.create(window);
            Object.defineProperty(window, 'location', {
                value: { hostname },
                writable: true,
            });

            expect(reportEvent(eventName, args)).toBeUndefined();
        });
    });

    describe(`${reportEventWithOrder.name}`, () => {
        test('Returns undefined', () => {
            expect(reportEventWithOrder(eventName, args)).toBeUndefined();
        });
    });
});
