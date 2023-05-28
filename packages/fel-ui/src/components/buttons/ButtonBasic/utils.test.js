import utils from './utils';
import validationMessages from '../../../utils/validationMessages';
import str from '../../../utils/stringsUtils';

const componentName = 'ButtonBasic';
const message = validationMessages(componentName);
const { propsValidation, modeOptions } = utils;

describe(`${componentName} propsValidation utils`, () => {
    test(`${str.throwsCorrectError}`, () => {
        expect(() => {
            propsValidation();
        }).toThrow(message.requiredProp('handleOnClick'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const handleOnClick = {};

        expect(() => {
            propsValidation(handleOnClick);
        }).toThrow(message.mustBeFunction('handleOnClick'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const handleOnClick = jest.fn();

        expect(() => {
            propsValidation(handleOnClick);
        }).toThrow(message.requiredProp('content'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const handleOnClick = jest.fn();
        const content = 'foo';
        const mode = 'bar';

        expect(() => {
            propsValidation(handleOnClick, content, mode);
        }).toThrow(message.mustBeOneOf('mode', modeOptions));
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const handleOnClick = jest.fn();
        const content = 'foo';

        expect(() => {
            propsValidation(handleOnClick, content);
        }).not.toThrow();
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const handleOnClick = jest.fn();
        const content = 'foo';
        const mode = 'secondary';

        expect(() => {
            propsValidation(handleOnClick, content, mode);
        }).not.toThrow();
    });
});
