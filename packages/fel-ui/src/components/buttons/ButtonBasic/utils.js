// @flow

import validationMessages from '../../../utils/validationMessages';

const message = validationMessages('ButtonBasic');
const modeOptions = ['primary', 'secondary', 'tertiary', 'quaternary'];

const propsValidation = (
    handleOnClick: Function,
    content: string | Object,
    mode?: string,
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
    if (mode && !modeOptions.includes(mode)) {
        throw Error(message.mustBeOneOf('mode', modeOptions));
    }
};

export default {
    propsValidation,
    modeOptions,
};
