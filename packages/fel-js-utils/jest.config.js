module.exports = {
    verbose: true,
    setupFiles: ['../src/setupTests.js'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
};
