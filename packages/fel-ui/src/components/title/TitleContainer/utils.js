// @flow

import validationMessages from '../../../utils/validationMessages';

const message = validationMessages('TitleContainer');
const modeOptions = ['primary', 'secondary', 'tertiary'];

const propsValidation = (content: string | Object, mode?: string): void => {
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
