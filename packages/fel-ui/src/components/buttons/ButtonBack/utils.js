// @flow

import validationMessages from '../../../utils/validationMessages';

const message = validationMessages('ButtonBack');

const propsValidation = (handleOnClick: Function): void => {
    if (!handleOnClick) {
        throw Error(message.requiredProp('handleOnClick'));
    }
    if (handleOnClick && typeof handleOnClick !== 'function') {
        throw Error(message.mustBeFunction('handleOnClick'));
    }
};

export default {
    propsValidation,
};
