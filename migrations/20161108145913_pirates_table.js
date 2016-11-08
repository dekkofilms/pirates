
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('pirates', function (table) {
    table.increments();
    table.string('name');
    table.string('poison');
    table.string('accessory');
    table.string('image_url');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pirates')
};
