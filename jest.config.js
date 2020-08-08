module.exports = {
    clearMocks: true,
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    roots: ['<rootDir>/src'],
    testEnvironment: 'node',
    testRegex: ['\\.(spec|test)\\.(ts|js)x?$'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
