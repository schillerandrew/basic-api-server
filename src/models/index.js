/* eslint-disable indent */
'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const personSchema = require('./person.schema.js');
const animalSchema = require('./animal.schema.js');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/basic-api-server';

// const sequelize = new Sequelize(DATABASE_URL);

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const PersonModel = personSchema(sequelize, DataTypes);
const AnimalModel = animalSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  PersonModel,
  AnimalModel,
};
