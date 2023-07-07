import utils from './utils';
import str from '../../../utils/stringsUtils';

const componentName = 'ItemsDisplayed';
const { displayedItemsRange } = utils;

describe(`${componentName} utils`, () => {
    describe('displayedItemsRange', () => {
        test('returns correct string', () => {
            const fromItem = 1;
            const toItem = 5;
            const totalItems = 10;
            const result = `${str.viewing} ${fromItem}-${toItem} ${str.of} ${totalItems}`;

            expect(displayedItemsRange(fromItem, toItem, totalItems)).toEqual(
                result,
            );
        });

        test('returns correct string', () => {
            const fromItem = 1;
            const toItem = 50;
            const totalItems = 10;
            const result = `${str.viewing} ${fromItem}-${totalItems} ${str.of} ${totalItems}`;

            expect(displayedItemsRange(fromItem, toItem, totalItems)).toEqual(
                result,
            );
        });
    });
});
