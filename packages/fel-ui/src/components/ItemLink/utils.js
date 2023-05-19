// @flow

import validationMessages from '../../utils/validationMessages';

const message = validationMessages('ItemLink');
const targetOptions = ['self', 'blank', 'parent', 'top'];

const propsValidation = (
    href: string,
    children: any,
    target?: string,
): void => {
    if (!href && href !== '') {
        throw Error(message.requiredProp('href'));
    }
    if (typeof href !== 'string') {
        throw Error(message.mustBeString('href'));
    }
    if (!children) {
        throw Error(message.requiredProp('children'));
    }
    if (!targetOptions.includes(target)) {
        throw Error(message.mustBeOneOf('target', targetOptions));
    }
};

export default {
    propsValidation,
    targetOptions,
};
