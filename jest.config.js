module.exports = {
    preset: 'react-native',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsTransformer.js',
    },
    moduleDirectories: ['utils', 'node_modules'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
    transformIgnorePatterns: [
        'node_modules/?!(static-container)',
        'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|jail-monkey|react-navigation-shared-element|react-native-shared-element)',
    ],
    cacheDirectory: '.jest/cache',
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    clearMocks: true,
    setupFilesAfterEnv: ['./jest.setup.js'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
    coveragePathIgnorePatterns: []
};