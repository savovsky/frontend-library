// @flow

export default function validationMessages(componentName: string): Function {
    const origin = 'FEL React Component';

    return {
        requiredProp(propName: string) {
            return `${origin} - ${componentName}: "${propName}" prop must be provided`;
        },

        mustBeFunction(propName: string) {
            return `${origin} - ${componentName}: "${propName}" prop must be a function`;
        },

        mustBeString(propName: string) {
            return `${origin} - ${componentName}: "${propName}" prop must be a string`;
        },

        mustBeNumber(propName: string) {
            return `${origin} - ${componentName}: "${propName}" prop must be a number`;
        },

        mustBeBoolean(propName: string) {
            return `${origin} - ${componentName}: "${propName}" prop must be a boolean`;
        },

        mustBeArray(propName: string) {
            return `${origin} - ${componentName}: "${propName}" prop must be an array`;
        },

        emptyArray(propName: string) {
            return `${origin} - ${componentName}: "${propName}" array must have at least one item`;
        },

        mustBeOneOf(propName: string, items: Array<string>) {
            return `${origin} - ${componentName}: "${propName}" prop must beone of the following (${items.join(
                ', ',
            )})`;
        },
    };
}
