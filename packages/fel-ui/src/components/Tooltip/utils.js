// @flow

import validationMessages from '../../utils/validationMessages';

const message = validationMessages('Tooltip');
const placementOptions = ['top', 'right', 'bottom', 'left'];

const propsValidation = (
    content: string | Object,
    children: string | Object,
    placement?: string,
): void => {
    if (!content && content !== '') {
        throw Error(message.requiredProp('content'));
    }
    if (!children) {
        throw Error(message.requiredProp('children'));
    }
    if (placement && !placementOptions.includes(placement)) {
        throw Error(message.mustBeOneOf('placement', placementOptions));
    }
};

export default {
    propsValidation,
    placementOptions,
};
