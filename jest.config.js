module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['jest-extended'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        output: 'reports/jest/results.xml',
      },
    ],
  ],
}
