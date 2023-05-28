// @flow

import validationMessages from '../../../utils/validationMessages';

const message = validationMessages('ButtonLink');

const propsValidation = (
    handleOnClick: Function,
    content: string | Object,
): void => {
    if (!handleOnClick) {
        throw Error(message.requiredProp('handleOnClick'));
    }
    if (handleOnClick && typeof handleOnClick !== 'function') {
        throw Error(message.mustBeFunction('handleOnClick'));
    }
    if (!content && content !== '') {
        throw Error(message.requiredProp('content'));
    }
};

export default {
    propsValidation,
};
