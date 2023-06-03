import utils from './utils';
import validationMessages from '../../../utils/validationMessages';
import str from '../../../utils/stringsUtils';

const componentName = 'ButtonBack';
const message = validationMessages(componentName);
const { propsValidation } = utils;

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

    test(`${str.doesNotThrowAnError}`, () => {
        const handleOnClick = jest.fn();

        expect(() => {
            propsValidation(handleOnClick);
        }).not.toThrow();
    });
});
