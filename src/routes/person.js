/* eslint-disable indent */
'use strict';

const express = require('express');
const { PersonModel } = require('../models');

const router = express.Router();

// proof of life
router.get('/', (req, res) => {
    res.status(200).send('Looks good.');
});

// POST
router.post('/person', async (req, res, next) => {
    let person = req.body;
    console.log(req.body);
    let response = await PersonModel.create(person);
    res.status(200).send(response);
});

// GET
router.get('/person', async (req, res, next) => {
    let allPersons = await PersonModel.findAll();
    res.status(200).send(allPersons);
});

// GET one
router.get('/person/:id', async (req, res, next) => {
    let { id } = req.params;
    let onePerson = await PersonModel.findOne({where: { id } });
    res.status(200).send(onePerson);
});

// PUT
router.put('/person/:id', async (req, res, next) => {
    let { id } = req.params;
    await PersonModel.update(req.body, {where: { id }});
    let updatedPerson = await PersonModel.findOne({where: { id } });
    res.status(200).send(updatedPerson);
});

// DELETE
router.delete('/person/:id', async (req, res, next) => {
    let { id } = req.params;
    let deletedPerson = await PersonModel.findOne({where: { id } });
    await PersonModel.destroy({where: { id } });
    res.status(200).send(deletedPerson);
});

module.exports = router;
