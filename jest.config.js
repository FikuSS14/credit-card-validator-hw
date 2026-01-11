/** @type {import('jest').Config} */
const config = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
};

module.exports = config;
