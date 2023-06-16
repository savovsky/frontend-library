// @flow

import validationMessages from '../../../utils/validationMessages';

const message = validationMessages('ButtonIcon');
const iconOptions = ['edit', 'trash', 'times', 'copy', 'clone'];
const sizeOptions = ['xs', 'sm', 'lg', '1x', '2x', '3x'];
const placementOptions = ['top', 'right', 'bottom', 'left'];

const propsValidation = (
    handleOnClick: Function,
    icon: string,
    size?: string,
    labelPlacement?: string,
): void => {
    if (!handleOnClick) {
        throw Error(message.requiredProp('handleOnClick'));
    }
    if (handleOnClick && typeof handleOnClick !== 'function') {
        throw Error(message.mustBeFunction('handleOnClick'));
    }
    if (!icon && icon !== '') {
        throw Error(message.requiredProp('icon'));
    }
    if (icon && !iconOptions.includes(icon)) {
        throw Error(message.mustBeOneOf('icon', iconOptions));
    }
    if (size && !sizeOptions.includes(size)) {
        throw Error(message.mustBeOneOf('size', sizeOptions));
    }
    if (labelPlacement && !placementOptions.includes(labelPlacement)) {
        throw Error(message.mustBeOneOf('labelPlacement', placementOptions));
    }
};

export default {
    propsValidation,
    iconOptions,
    sizeOptions,
    placementOptions,
};
