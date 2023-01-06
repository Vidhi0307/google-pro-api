const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;


/* const typeDefs = gql`
  type Book {
    _id:ID
    title: String
    author: String
    description: String
    link:String
  }

  type Query {
    books:[Book]
  }
`; */
/* const typeDefs = gql`
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type Query {
    classes: [Class]
  }
`;

module.export = typeDefs; */