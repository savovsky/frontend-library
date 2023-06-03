import utils from './utils';
import validationMessages from '../../../utils/validationMessages';
import str from '../../../utils/stringsUtils';

const componentName = 'TitleContainer';
const message = validationMessages(componentName);
const { propsValidation, modeOptions } = utils;

describe(`${componentName} propsValidation utils`, () => {
    test(`${str.throwsCorrectError}`, () => {
        expect(() => {
            propsValidation();
        }).toThrow(message.requiredProp('content'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const content = 'foo';
        const mode = 'bar';

        expect(() => {
            propsValidation(content, mode);
        }).toThrow(message.mustBeOneOf('mode', modeOptions));
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

    test(`${str.doesNotThrowAnError}`, () => {
        const content = 'foo';
        const mode = 'secondary';

        expect(() => {
            propsValidation(content, mode);
        }).not.toThrow();
    });
});
