const { gql } = require("apollo-server-express");
module.exports = gql`
  type Item {
    _id: ID!
    name: String!
    description: String!
    price: Int!
    quantity: Int!
    image: [String]
    status: String!
    is_deleted: Boolean!
    created_on: String!
    created_timestamp: String!

    updated_timestamp: String!
  }
  type Query {
    hello: String
    getItem(id: ID!): Item
    getItems: [Item]!
  }
  input itemInput {
    name: String!
    description: String!
    price: Int!
    quantity: Int!
    status: String
  }
  input itemUpdate {
    name: String
    description: String
    price: Int
    quantity: Int
    status: String
  }

  type Mutation {
    createItem(input: itemInput): Item!
    updateItem(id: ID!, body: itemUpdate): Item!
    deleteItem(id: ID!): Boolean!
  }
`;
