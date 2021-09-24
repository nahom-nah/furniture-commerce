const { getOne, getAll, create, update, deleteV } = require("./Factory");
const Item = require("./../../models/Items");

module.exports = {
  Query: {
    getItem: getOne(Item),

    getItems: getAll(Item),
  },
  Mutation: {
    createItem: create(Item),
    updateItem: update(Item),
    deleteItem: deleteV(Item),
  },
};
