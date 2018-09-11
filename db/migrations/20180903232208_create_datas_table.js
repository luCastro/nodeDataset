
exports.up = knex => {
    return knex.schema.createTable("datas", table => {
      table.increments("id");

      table.integer("date_time");

      table.bigInteger("visitor");

      table.integer("os");

      table.integer("device");

      table.timestamp("createdAt").default(knex.fn.now());

    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTable("datas");
  };


