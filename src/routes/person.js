/* eslint-disable indent */
'use strict';

const express = require('express');
const { PersonModel } = require('../../collections');

const router = express.Router();

router.post('/person', async (req, res, next) => {
    let person = req.body;
    console.log(req.body);
    let response = await PersonModel.create(person);
    res.status(200).send(response);
});

router.get('/', (req, res) => {
    res.status(200).send('Looks good.');
});

module.exports = router;
