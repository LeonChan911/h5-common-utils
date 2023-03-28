module.exports = {
  testRegex: 'tests/(?!mock).+',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: './coverage/',
  preset: 'ts-jest/presets/js-with-babel',
  moduleFileExtensions: ['ts', 'js']
};
