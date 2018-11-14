exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(tbl) {
    tbl.increments();
    tbl.string('name');

    tbl
      .integer('cohort_id')
      .unsigned()
      .references('id')
      .inTable('students');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students');
};