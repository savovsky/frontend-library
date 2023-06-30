import utils from './utils';

const componentName = 'PageButton';
const { pageNumber, isActive, isDisabled } = utils;

describe(`${componentName} utils`, () => {
    const any = 123456789;

    describe('pageNumber', () => {
        test('returns correct value', () => {
            const buttonIndex = 0;
            const currentPage = any;
            const totalPagesCount = 8;
            const outcome = 1;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 1;
            const currentPage = 4;
            const totalPagesCount = 8;
            const outcome = 2;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 1;
            const currentPage = 5;
            const totalPagesCount = 8;
            const outcome = '...';

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 2;
            const currentPage = 4;
            const totalPagesCount = 8;
            const outcome = 3;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 2;
            const currentPage = 6;
            const totalPagesCount = 8;
            const outcome = 4;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 2;
            const currentPage = 5;
            const totalPagesCount = 8;
            const outcome = 4;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 3;
            const currentPage = 4;
            const totalPagesCount = 8;
            const outcome = 4;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 3;
            const currentPage = 6;
            const totalPagesCount = 8;
            const outcome = 5;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 3;
            const currentPage = 5;
            const totalPagesCount = 8;
            const outcome = 5;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 4;
            const currentPage = 4;
            const totalPagesCount = 8;
            const outcome = 5;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 4;
            const currentPage = 5;
            const totalPagesCount = 8;
            const outcome = 6;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 4;
            const currentPage = 6;
            const totalPagesCount = 8;
            const outcome = 6;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 4;
            const currentPage = 6;
            const totalPagesCount = 10;
            const outcome = 7;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 5;
            const currentPage = 5;
            const totalPagesCount = 8;
            const outcome = 7;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 5;
            const currentPage = 4;
            const totalPagesCount = 8;
            const outcome = '...';

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 6;
            const currentPage = any;
            const totalPagesCount = 8;
            const outcome = 8;

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct value', () => {
            const buttonIndex = 7;
            const currentPage = any;
            const totalPagesCount = any;
            const outcome = '';

            expect(
                pageNumber(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });
    });

    describe('isActive', () => {
        test('returns correct "boolean"', () => {
            const buttonIndex = 3;
            const currentPage = 4;
            const totalPagesCount = 8;
            const outcome = true;

            expect(isActive(buttonIndex, currentPage, totalPagesCount)).toEqual(
                outcome,
            );
        });

        test('returns correct "boolean"', () => {
            const buttonIndex = 3;
            const currentPage = 5;
            const totalPagesCount = 10;
            const outcome = true;

            expect(isActive(buttonIndex, currentPage, totalPagesCount)).toEqual(
                outcome,
            );
        });

        test('returns correct "boolean"', () => {
            const buttonIndex = 3;
            const currentPage = 5;
            const totalPagesCount = 9;
            const outcome = true;

            expect(isActive(buttonIndex, currentPage, totalPagesCount)).toEqual(
                outcome,
            );
        });

        test('returns correct "boolean"', () => {
            const buttonIndex = 3;
            const currentPage = 6;
            const totalPagesCount = 9;
            const outcome = true;

            expect(isActive(buttonIndex, currentPage, totalPagesCount)).toEqual(
                outcome,
            );
        });

        test('returns correct "boolean"', () => {
            const buttonIndex = 4;
            const currentPage = 7;
            const totalPagesCount = 9;
            const outcome = true;

            expect(isActive(buttonIndex, currentPage, totalPagesCount)).toEqual(
                outcome,
            );
        });

        test('returns correct "boolean"', () => {
            const buttonIndex = 5;
            const currentPage = 8;
            const totalPagesCount = 9;
            const outcome = true;

            expect(isActive(buttonIndex, currentPage, totalPagesCount)).toEqual(
                outcome,
            );
        });

        test('returns correct "boolean"', () => {
            const buttonIndex = 6;
            const currentPage = 9;
            const totalPagesCount = 9;
            const outcome = true;

            expect(isActive(buttonIndex, currentPage, totalPagesCount)).toEqual(
                outcome,
            );
        });

        test('returns correct "boolean"', () => {
            const buttonIndex = 5;
            const currentPage = 6;
            const totalPagesCount = 7;
            const outcome = true;

            expect(isActive(buttonIndex, currentPage, totalPagesCount)).toEqual(
                outcome,
            );
        });

        test('returns correct "boolean"', () => {
            const buttonIndex = 1;
            const currentPage = 3;
            const totalPagesCount = 7;
            const outcome = false;

            expect(isActive(buttonIndex, currentPage, totalPagesCount)).toEqual(
                outcome,
            );
        });
    });

    describe('isDisabled', () => {
        test('returns correct "boolean"', () => {
            const buttonIndex = any;
            const currentPage = any;
            const totalPagesCount = 1;
            const outcome = true;

            expect(
                isDisabled(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct "boolean"', () => {
            const buttonIndex = 1;
            const currentPage = 5;
            const totalPagesCount = 8;
            const outcome = true;

            expect(
                isDisabled(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct "boolean"', () => {
            const buttonIndex = 5;
            const currentPage = 3;
            const totalPagesCount = 8;
            const outcome = true;

            expect(
                isDisabled(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });

        test('returns correct "boolean"', () => {
            const buttonIndex = any;
            const currentPage = any;
            const totalPagesCount = 7;
            const outcome = false;

            expect(
                isDisabled(buttonIndex, currentPage, totalPagesCount),
            ).toEqual(outcome);
        });
    });
});
