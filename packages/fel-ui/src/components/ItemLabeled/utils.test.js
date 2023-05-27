import utils from './utils';
import validationMessages from '../../utils/validationMessages';
import str from '../../utils/stringsUtils';

const componentName = 'ItemLabeled';
const message = validationMessages(componentName);
const { propsValidation } = utils;

describe(`${componentName} propsValidation utils`, () => {
    test(`${str.throwsCorrectError}`, () => {
        expect(() => {
            propsValidation();
        }).toThrow(message.requiredProp('label'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const label = 'foo';

        expect(() => {
            propsValidation(label);
        }).toThrow(message.requiredProp('value'));
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const label = 'foo';
        const value = 'bar';

        expect(() => {
            propsValidation(label, value);
        }).not.toThrow();
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const label = 'foo';
        const value = {};

        expect(() => {
            propsValidation(label, value);
        }).not.toThrow();
    });
});
