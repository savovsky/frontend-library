import testUtils from '.';

const { addToExportsWhenTest } = testUtils;

describe('testUtils', () => {
    describe(`${addToExportsWhenTest.name}`, () => {
        const obj = { foo: 'bar' };

        test('Returns received object if ENV === "test"', () => {
            expect(addToExportsWhenTest(obj)).toEqual(obj);
        });

        test('Returns an empty object if ENV !== "test"', () => {
            process.env = Object.assign(process.env, { NODE_ENV: 'any' });
            expect(addToExportsWhenTest(obj)).toEqual({});
        });
    });
});
