# Test Rest API's using Mocha Chai and Chai-http (supertest)

This demo project is to showcase how one can use Mocha Chai and Chai-http to test Rest Api's.
It also has chai-json-schema to validate json schema's this includes Swagger and open-api3 specifications.

## Prerequisite
Nodejs 10 or later.


## Getting Started

- Clone or Download the repo
```
  git clone https://github.com/rupeshmore/mocha-chai-rest-api-tests
```
Download [mocha-chai-rest-api-tests](https://github.com/rupeshmore/mocha-chai-rest-api-tests/archive/master.zip)

## Install dependencies
Once the project is cloned or downloaded, go to the project folder and run 

`npm install`


## To run sample tests
`npm test`


## Adding new tests
Start writing the test inside the `test` folder and change the configuration in `config.js` as per your project needs.


## Environment variable
Define environment variable `env` to test against your desired test environment. The default environment is `dev`.


## Validate Swagger / OpenAPI3 specifications in the test files.
To validate the API's response against schema validations, use the `json-schema` library.
The test files demonstrate how to use them.


## Mocha configuration
To change mocha configuration, edit the `.mocharc.js` file.