// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || 'localhost',
      database: "news360",
      username: "luciana",
      password: "lu1234"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }
};
