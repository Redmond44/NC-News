
exports.up = function (knex) {
  console.log('Creating "topics" table')

  return knex.schema.createTable('topics', (topicsTable) => {
    topicsTable.increments('slug').primary();
    topicsTable.string('description').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("topics")
};
