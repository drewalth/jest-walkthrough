module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/**/index.js',
    '!src/**/create-wrapper.js'
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    '__mock-data__',
    'services',
    'src/utils',
    'src/locales'
  ],
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: 'coverage',
}
