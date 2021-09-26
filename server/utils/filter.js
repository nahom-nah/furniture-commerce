const filter = (obj) => {
  let fans = {};
  if (obj.name.equals) {
    fans["name"] = obj.name.equals;
  } else if (obj.name.contains) {
    fans["name"] = {
      $regex: obj.name.contains,
      $options: "i",
    };
  }
  if (obj.price.lt) {
    fans["price"] = {
      $lt: obj.price.lt,
    };
  } else if (obj.price.gt) {
    fans["price"] = {
      $gt: obj.price.gt,
    };
  } else if (obj.price.lte) {
    fans["price"] = {
      $lte: obj.price.lte,
    };
  } else if (obj.price.gte) {
    fans["price"] = {
      $gte: obj.price.gte,
    };
  } else if (obj.price.eq) {
    fans["price"] = {
      $eq: obj.price.eq,
    };
  }

  return fans;
};
module.exports = filter;
