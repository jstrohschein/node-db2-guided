
exports.up = function(knex) {
  return knex.schema.table('fruits', t => {
    t.string('color', 25)
  })
};

exports.down = function(knex) {
  return knex.schema.table('fruits', t => {
    t.dropColumn('color')
  })
};
