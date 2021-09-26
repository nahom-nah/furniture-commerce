const catchAsync = require(". /../../utils/catchAsync");
const fs = require("fs");
const path = require("path");
const filter = require("./../../utils/filter");

exports.getAll = function (Model) {
  return catchAsync(async (_, args, context, info) => {
    let ans = {};
    let fans = {};
    if (args.input.sort) {
      args.input.sort.map((el) => {
        ans[el.field] = el.order;
      });
    }

    if (args.input.field) {
      fans = filter(args.input.filter.field);
    }

    const items = await Model.find(fans).where().select("-__v").sort(ans);

    return items;
  });
};
exports.getOne = (Model) => {
  return catchAsync(async (_, args, context, info) => {
    const item = await Model.findById(args.id);

    return item;
  });
};

exports.create = (Model) => {
  return catchAsync(async (_, args, context, info) => {
    const { name, description, price, status, quantity, file } = args.input;
    console.log(args.input);
    const item = await Model.create({
      name,
      description,
      price,
      status,
      quantity,
    });

    return item;
  });
};

exports.update = (Model) => {
  return catchAsync(async (_, args, context, info) => {
    const item = await Model.findByIdAndUpdate(args.id, args.body, {
      new: true,
      runValidation: true,
    });
    return item;
  });
};

exports.deleteV = (Model) => {
  return catchAsync(async (_, args, context, info) => {
    const item = await Model.findById(args.id);
    await item.delete();
    return true;
  });
};
