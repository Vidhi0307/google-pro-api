/* const { Book } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find({});
    }
  }
};

module.exports = resolvers; */

const { Class } = require('../models');

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
