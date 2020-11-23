module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  modulePaths: ['src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(test).(js|ts)?(x)'],
  setupFilesAfterEnv: [
    '<rootDir>/setup-test.ts',
  ],
  preset: 'jest-puppeteer',
  snapshotSerializers: [
    './node_modules/enzyme-to-json/serializer',
  ],
  "transform": {
    "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': './__mocks__/fileMock.ts',
    '\\.(css|scss)$': 'identity-obj-proxy',
  }
};

