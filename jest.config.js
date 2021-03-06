module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageDirectory: './coverage/',

  testMatch: [
    // Match any typescript file ending with ComponentName.test.(ts|tsx).
    '**/?(*.)test.(ts|tsx)',
  ],

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/.enzyme.ts'],
};
