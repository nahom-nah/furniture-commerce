const catchAsync = require("../../utils/catchAsync");

module.exports = {
  Mutation: {
    login: catchAsync((_, args, context, info) => {
      console.log(args);
      return "hello auth";
    }),
  },
};
