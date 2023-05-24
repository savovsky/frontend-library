// @flow

/**
 * Returns same object that receives if NODE_ENV === 'test', else returns empty object
 * @param {Object} obj
 * @returns `object`
 */
const addToExportsWhenTest = (obj: Object): Object => {
    return process.env.NODE_ENV === 'test' ? obj : {};
};

export default {
    addToExportsWhenTest,
};
