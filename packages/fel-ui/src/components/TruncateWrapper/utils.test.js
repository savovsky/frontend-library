import utils from './utils';
import validationMessages from '../../utils/validationMessages';
import str from '../../utils/stringsUtils';

const componentName = 'TruncateWrapper';
const message = validationMessages(componentName);
const { propsValidation, placementOptions } = utils;

describe(`${componentName} propsValidation utils`, () => {
    test(`${str.throwsCorrectError}`, () => {
        expect(() => {
            propsValidation();
        }).toThrow(message.requiredProp('text'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const text = 12345;

        expect(() => {
            propsValidation(text);
        }).toThrow(message.mustBeString('text'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const text = '12345';

        expect(() => {
            propsValidation(text);
        }).toThrow(message.requiredProp('limit'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const text = '12345';
        const limit = '4';

        expect(() => {
            propsValidation(text, limit);
        }).toThrow(message.mustBeNumber('limit'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const text = '12345';
        const limit = 4;
        const tooltipPlacement = 'bar';

        expect(() => {
            propsValidation(text, limit, tooltipPlacement);
        }).toThrow(message.mustBeOneOf('tooltipPlacement', placementOptions));
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const text = '12345';
        const limit = 4;
        const tooltipPlacement = 'bottom';

        expect(() => {
            propsValidation(text, limit, tooltipPlacement);
        }).not.toThrow();
    });
});
