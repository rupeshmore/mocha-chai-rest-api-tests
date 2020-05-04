/**
 * setup file for read configuration file and setup environment before test run.
 */

const chai = require('chai');
chai.use(require('chai-json-schema'));
chai.use(require('chai-http'));

const config = require('./config') || require('./config.json');
const env = process.env.ENV || 'dev';
const testEnv = config[env];

const urlToTest = testEnv.url;
const http = chai.request(urlToTest);

module.exports = {
    expect: chai.expect,
    http,
}