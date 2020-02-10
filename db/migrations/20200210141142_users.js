
exports.up = function (knex) {
  console.log('Creating "users" table')

  return knex.schema.createTable('users', (usersTable) => {
    usersTable.increments('username').primary();
    usersTable.string('avatar_url').notNullable();
    usersTable.string('name').notNullable()
  })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("users")
};
