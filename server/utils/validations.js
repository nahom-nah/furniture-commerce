const User = require("./../models/User");
exports.loginValidation = ({ email, password }) => {
  const errors = {};
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.trim() === "") {
    errors.email = "Email must not be empty";
  } else if (!email.match(regEx)) {
    errors.email = "Email must be a valid email address";
  }

  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  } else if (password.length < 8) {
    errors.password = "password length is to short";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

exports.validateRegisterInput = async (username, email, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "username can't be empty";
  } else {
    const user = await User.findOne({ username });
    if (user) {
      errors.username = "username is taken";
    }
  }

  if (email.trim() === "") {
    errors.email = "email can't be empty";
  } else if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    erros.email = "invalid email";
  }

  if (password.length < 8) {
    errors.password = "password length is too short ";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
