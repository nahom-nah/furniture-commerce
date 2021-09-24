module.exports = (fn) => {
  return (req, res, next) => {
    return fn(req, res, next).catch((err) => {
      console.log("error :", err);
    });
  };
};
