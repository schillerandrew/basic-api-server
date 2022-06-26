# basic-api-server

> Author: Andrew Schiller

> ## Problem Domain

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a SQL database, using the REST standard.

> ## Getting Started

> ### Standard dependencies

- express, dotenv, supertest, jest

> ### SQL-specific dependencies

- sequelize, sequelize-cli, pg, sqlite3

> ### Optional dependencies

- eslint (I suspect this is causing issues with my current linter setup)

> ### >>> **Important setup** <<<

- To enable a test environment, go into the `package.json` file and insert `NODE_ENV=test ` at the start of the `test` value (in front of `jest --verbose --coverage`), which is in `scripts`.

> ## Links

- [GitHub actions](https://github.com/schillerandrew/basic-api-server/actions)
- [GitHub pull request](https://github.com/schillerandrew/basic-api-server/pull/10)
- [Heroku app](https://schiller-lab2-basic-api-server.herokuapp.com/)

> ## Architecture

- **runtime:** Node
- **server:** Express
- **database:** SQL
- **deployment:** Heroku
