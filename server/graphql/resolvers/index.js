const helloResolver = require("./hello");
const ItemResolver = require("./items");
module.exports = {
  Query: { ...helloResolver.Query, ...ItemResolver.Query },
  Mutation: {
    ...ItemResolver.Mutation,
  },
};
