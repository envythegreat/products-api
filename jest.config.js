module.exports = {
  globalSetup: './setup',
  globalTeardown: './teardown.js',
  testEnvironment: './mongo-environment.js',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest'
  },
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  preset: 'ts-jest'
};