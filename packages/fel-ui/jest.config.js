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
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
    coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
};
