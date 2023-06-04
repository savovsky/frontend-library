import React from 'react';

import utils from './utils';
import validationMessages from '../../utils/validationMessages';
import str from '../../utils/stringsUtils';

const componentName = 'Tooltip';
const message = validationMessages(componentName);
const { propsValidation, placementOptions } = utils;

describe(`${componentName} propsValidation utils`, () => {
    test(`${str.throwsCorrectError}`, () => {
        expect(() => {
            propsValidation();
        }).toThrow(message.requiredProp('content'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const content = 'foo';

        expect(() => {
            propsValidation(content);
        }).toThrow(message.requiredProp('children'));
    });

    test(`${str.throwsCorrectError}`, () => {
        const content = 'foo';
        const children = <div>Hover me</div>;
        const placement = 'bar';

        expect(() => {
            propsValidation(content, children, placement);
        }).toThrow(message.mustBeOneOf('placement', placementOptions));
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const content = 'foo';
        const children = <div>Hover me</div>;

        expect(() => {
            propsValidation(content, children);
        }).not.toThrow();
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const content = {};
        const children = {};

        expect(() => {
            propsValidation(content, children);
        }).not.toThrow();
    });

    test(`${str.doesNotThrowAnError}`, () => {
        const content = 'foo';
        const children = <div>Hover me</div>;
        const placement = 'left';

        expect(() => {
            propsValidation(content, children, placement);
        }).not.toThrow();
    });
});
