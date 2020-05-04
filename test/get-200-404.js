const { http, expect } = require('../setup.js')
const schema = require('../schema.json');

const getSchema200 = schema['/get']['200'];
const getSchema404 = schema['/get']['404'];

describe('Sample httpBin test', () => {

    it('/get 200 test', async () => {
        const get = await http.get('/get');

        expect(get.status).eq(200);
        expect(get.header).to.be.not.null;
        expect(get.body).to.be.jsonSchema(getSchema200);
    });

    it('/get 404 test', async () => {
        /**
         * deliberately get/1 call for 404.
         */
        const get = await http.get('/get/1');

        expect(get.status).eq(404);
        expect(get.header).to.be.not.null;
        expect(get.body).to.be.jsonSchema(getSchema404);
    });
});