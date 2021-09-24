const catchAsync = require("./../../utils/catchAsync");

exports.getAll = function (Model) {
  return catchAsync(async () => {
    const items = await Model.find().select("-__v");

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
    const { name, description, price, status, quantity } = args.input;
    console.log(name);
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
