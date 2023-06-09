import utils from './utils';
import validationMessages from '../../../utils/validationMessages';
import str from '../../../utils/stringsUtils';

const componentName = 'TitlePage';
const message = validationMessages(componentName);
const { propsValidation } = utils;

describe(`${componentName} propsValidation utils`, () => {
    test(`${str.throwsCorrectError}`, () => {
        expect(() => {
            propsValidation();
        }).toThrow(message.requiredProp('content'));
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const content = 'foo';

        expect(() => {
            propsValidation(content);
        }).not.toThrow();
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const content = {};

        expect(() => {
            propsValidation(content);
        }).not.toThrow();
    });
});
