'use strict';

const { sequelize, PersonModel } = require('./collections');
const server = require('./src/server.js');

sequelize.sync()
  .then(() => console.log('>>> Connected! <<<'))
  .catch(err => console.error(err));

server.start();
