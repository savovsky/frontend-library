// @flow

import validationMessages from '../../../utils/validationMessages';

const message = validationMessages('TitlePage');

const propsValidation = (content: string | Object): void => {
    if (!content && content !== '') {
        throw Error(message.requiredProp('content'));
    }
};

export default {
    propsValidation,
};
