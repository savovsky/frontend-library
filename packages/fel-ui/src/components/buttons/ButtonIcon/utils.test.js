import utils from './utils';
import validationMessages from '../../../utils/validationMessages';
import str from '../../../utils/stringsUtils';

const componentName = 'ButtonIcon';
const message = validationMessages(componentName);
const { propsValidation, iconOptions, sizeOptions, placementOptions } = utils;

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
        }).toThrow(message.requiredProp('icon'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const handleOnClick = jest.fn();
        const icon = 'foo';

        expect(() => {
            propsValidation(handleOnClick, icon);
        }).toThrow(message.mustBeOneOf('icon', iconOptions));
    });

    test(`${str.throwsCorrectError}`, () => {
        const handleOnClick = jest.fn();
        const icon = 'trash';
        const size = 'foo';

        expect(() => {
            propsValidation(handleOnClick, icon, size);
        }).toThrow(message.mustBeOneOf('size', sizeOptions));
    });

    test(`${str.throwsCorrectError}`, () => {
        const handleOnClick = jest.fn();
        const icon = 'trash';
        const size = '2x';
        const labelPlacement = 'foo';

        expect(() => {
            propsValidation(handleOnClick, icon, size, labelPlacement);
        }).toThrow(message.mustBeOneOf('labelPlacement', placementOptions));
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const handleOnClick = jest.fn();
        const icon = 'trash';
        const size = '2x';
        const labelPlacement = 'left';

        expect(() => {
            propsValidation(handleOnClick, icon, size, labelPlacement);
        }).not.toThrow();
    });
});
