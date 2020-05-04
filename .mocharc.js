/**
 * Mocha configuration file.
 */
const { timeout } = require('./config');

module.exports = {
    // mocha test timeout
    timeout: timeout || 10000,

    // test folder where mocha will look for test files.
    spec: ['test/**/*.js'],

    // look inside the spec folder recursively for test files.
    recursive: true,

    // mocha test reporter
    reporter: ['spec'],

    // stop at first test failure.
    bail: false,

    // watch for test files to trigger test run.
    watch: false
}