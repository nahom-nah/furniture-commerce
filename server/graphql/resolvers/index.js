const helloResolver = require("./hello");
const ItemResolver = require("./items");
const userResolver = require("./user");
module.exports = {
  Query: { ...helloResolver.Query, ...ItemResolver.Query },
  Mutation: {
    ...ItemResolver.Mutation,
    ...userResolver.Mutation,
  },
};
