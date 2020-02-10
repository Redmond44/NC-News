
exports.up = function (knex) {
  console.log('Creating "articles" table')

  return knex.schema.createTable('articles', (articlesTable) => {
    articlesTable.increments('article_id').primary();
    articlesTable.string('title').notNullable();
    articlesTable.string('body');
    articlesTable.integer('votes').defaultValue(0);
    articlesTable.integer('slug').references('topics.slug');
    articlesTable.integer('author').references('users.username');
    articlesTable.timestamp('created_at').defaultTo(knex.fn.now())
  })
};




//     wizardsTable.integer('house_id').references('houses.house_id');

exports.down = function (knex) {

};
