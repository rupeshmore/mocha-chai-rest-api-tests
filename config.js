/**
 * Test environment configuration file.
 * add database or any environment related configuration here.
 */

module.exports = {
    dev: {
        url: 'https://httpbin.org',
        // add db or any config here
    },
    test: {

    },
    // test timeout if required or define this in .mocharc.js file.
    timeout: 30000
}