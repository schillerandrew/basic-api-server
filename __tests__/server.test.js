/* eslint-disable indent */
'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server);

describe('Server Testing', () => {
    describe('Error Handler Testing', () => {
        test('404 on a bad route', async() => {
            let response = await request.get('/fake');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
        test('404 on a bad method', async() => {
            let response = await request.patch('/person');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
    });
});
