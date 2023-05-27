// @flow

import validationMessages from '../../utils/validationMessages';

const message = validationMessages('ItemLabeled');

const propsValidation = (label: string, value: string | Object): void => {
    if (!label && label !== '') {
        throw Error(message.requiredProp('label'));
    }
    if (!value && value !== '') {
        throw Error(message.requiredProp('value'));
    }
};

export default {
    propsValidation,
};
