/* eslint-disable indent */
'use strict';

const express = require('express');
const error404Handler = require('./error-handlers/404.js');
const error500Handler = require('./error-handlers/500.js');
const routerForPerson = require('./routes/person.js');
const routerForAnimal = require('./routes/animal.js');

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use(routerForPerson);
app.use(routerForAnimal);

app.get('/', (req, res) => {
  res.status(200).send('Looks good!');
});

app.use('*', error404Handler);

app.use(error500Handler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, () => console.log('listening on port', PORT)),
};
