/* eslint-disable no-console */

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// Allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

global.console = {
    error: jest.fn(), // console.error are ignored in tests

    // Keep native behavior for other methods, use those to ptint out things in your own tests, not 'console.error'
    log: console.log,
    warn: console.warn,
    info: console.info,
    debug: console.debug,
};