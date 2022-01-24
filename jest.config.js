module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverage: true,
  testRegex: '\\.test\\.ts$',
  collectCoverageFrom: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'lib/**/*.ts',
    'plugins/**/*.ts',
    'store/**/*.ts',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', '.'],
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
}
