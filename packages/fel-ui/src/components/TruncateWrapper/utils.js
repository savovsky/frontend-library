// @flow

import validationMessages from '../../utils/validationMessages';

const message = validationMessages('TruncateWrapper');
const placementOptions = ['top', 'right', 'bottom', 'left'];

const propsValidation = (
    text: string,
    limit: number,
    tooltipPlacement?: string,
): void => {
    if (!text && text !== '') {
        throw Error(message.requiredProp('text'));
    }
    if (text && typeof text !== 'string') {
        throw Error(message.mustBeString('text'));
    }
    if (!limit) {
        throw Error(message.requiredProp('limit'));
    }
    if (limit && typeof limit !== 'number') {
        throw Error(message.mustBeNumber('limit'));
    }
    if (tooltipPlacement && !placementOptions.includes(tooltipPlacement)) {
        throw Error(message.mustBeOneOf('tooltipPlacement', placementOptions));
    }
};

export default {
    propsValidation,
    placementOptions,
};
