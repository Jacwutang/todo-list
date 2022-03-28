/* Init connection to postgres */
const knex = require('knex')({
    client: 'postgres',
    debug: true,
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'postgres',
      password : 'password',
      database : 'testdb'
    }
});

module.exports = knex;

