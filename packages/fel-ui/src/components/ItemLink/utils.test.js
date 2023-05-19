import utils from './utils';
import validationMessages from '../../utils/validationMessages';
import str from '../../utils/stringsUtils';

const componentName = 'ItemLink';
const message = validationMessages(componentName);
const { propsValidation, targetOptions } = utils;

describe(`${componentName} propsValidation utils`, () => {
    test(`${str.throwsCorrectError}`, () => {
        expect(() => {
            propsValidation();
        }).toThrow(message.requiredProp('href'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const href = { foo: 'bar' };

        expect(() => {
            propsValidation(href);
        }).toThrow(message.mustBeString('href'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const href = 'foo';

        expect(() => {
            propsValidation(href);
        }).toThrow(message.requiredProp('children'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const href = 'foo';
        const children = 'bar';
        const target = 'baz';

        expect(() => {
            propsValidation(href, children, target);
        }).toThrow(message.mustBeOneOf('target', targetOptions));
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const href = 'foo';
        const children = 'bar';
        const target = 'self';

        expect(() => {
            propsValidation(href, children, target);
        }).not.toThrow();
    });
});
