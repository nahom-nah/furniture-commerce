const { gql } = require("apollo-server-express");
module.exports = gql`
  type Item {
    _id: ID!
    name: String!
    description: String!
    price: Int!
    quantity: Int!
    image: [File]
    status: String!
    is_deleted: Boolean!
    created_on: String!
    created_timestamp: String!

    updated_timestamp: String!
  }
  enum sortOrder {
    ASC
    DESC
  }
  enum sortableFields {
    name
    price
  }
  input Sort {
    field: sortableFields
    order: sortOrder = ASC
  }

  input stringFilter {
    equals: String
    contains: String
  }
  input intFilter {
    eq: Int
    gt: Int
    gte: Int
    lt: Int
    lte: Int
  }
  input filterField {
    name: stringFilter
    price: intFilter
  }
  input Filter {
    field: filterField
  }
  input fsOperations {
    sort: [Sort]
    filter: Filter
  }
  type Query {
    hello: String
    getItem(id: ID!): Item
    getItems(input: fsOperations = {}): [Item]!
  }
  scalar Upload
  type File {
    url: String!
  }
  input itemInput {
    name: String!
    description: String!
    price: Int!
    Image: Upload!
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

  type User {
    username: String!
    email: String!
    first_name: String
    last_name: String
    token: String!

    id: ID!
  }
  input loginInput {
    email: String!
    password: String!
  }
  input registerInput {
    email: String!
    username: String!
    password: String!
    first_name: String
    last_name: String
  }
  type Mutation {
    createItem(input: itemInput): Item!
    updateItem(id: ID!, body: itemUpdate): Item!
    deleteItem(id: ID!): Boolean!
    login(input: loginInput): User!
    register(input: registerInput): String!
  }
`;
