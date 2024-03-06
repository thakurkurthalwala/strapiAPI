// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'dpg-cfgub1o2i3mp5rttn9v0-a.singapore-postgres.render.com'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'db_rohit'),
//       user: env('DATABASE_USERNAME', 'admin'),
//       password: env('DATABASE_PASSWORD', 'T69PeHqT2oUoggM04RygOQiliWq8pG4D'),
//       ssl: env.bool('DATABASE_SSL', false), 
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      //schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});