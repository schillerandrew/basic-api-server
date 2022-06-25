/* eslint-disable indent */
'use strict';

const express = require('express');
const { AnimalModel } = require('../models');

const router = express.Router();

// proof of life
// router.get('/', (req, res) => {
//     res.status(200).send('Looks good!');
// });

// POST
router.post('/animal', async (req, res, next) => {
    let animal = req.body;
    console.log(req.body);
    let response = await AnimalModel.create(animal);
    res.status(200).send(response);
});

// GET
router.get('/animal', async (req, res, next) => {
    let allAnimals = await AnimalModel.findAll();
    res.status(200).send(allAnimals);
});

// GET one
router.get('/animal/:id', async (req, res, next) => {
    let { id } = req.params;
    let oneAnimal = await AnimalModel.findOne({where: { id } });
    res.status(200).send(oneAnimal);
});

// PUT
router.put('/animal/:id', async (req, res, next) => {
    let { id } = req.params;
    await AnimalModel.update(req.body, {where: { id } });
    let updatedAnimal = await AnimalModel.findOne({where: { id } });
    res.status(200).send(updatedAnimal);
});

// DELETE
router.delete('/animal:id', async (req, res, next) => {
    let { id } = req.params;
    let deletedAnimal = await AnimalModel.findOne({where: { id }});
    await AnimalModel.destroy({where: { id }});
    res.status(200).send(deletedAnimal);
});

module.exports = router;
