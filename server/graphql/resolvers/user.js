const { UserInputError } = require("apollo-server-errors");
const User = require("../../models/User");
const catchAsync = require("../../utils/catchAsync");
const crypto = require("crypto");
const {
  loginValidation,
  validateRegisterInput,
} = require("../../utils/validations");
const jwt = require("jsonwebtoken");
const signToken = async (user_id) => {
  const token = await jwt.sign({ id: user_id }, process.env.SECRET, {
    expiresIn: "1d",
  });
  return token;
};
module.exports = {
  Mutation: {
    login: catchAsync(async (_, args, context, info) => {
      const { req, res } = context;
      const { errors, valid } = loginValidation(args.input);
      if (!valid) {
        throw new UserInputError("Errors", {
          errors,
        });
      }
      const user = await User.findOne({ email: args.input.email });
      if (!user) {
        throw new UserInputError("User Not Found", {
          errors: {
            userNotFound: "no user found",
          },
        });
      }

      const passcomp =
        user.password ===
        crypto
          .pbkdf2Sync(args.input.password, user.salt, 10000, 64, "sha512")
          .toString("hex");
      if (!passcomp) {
        throw new UserInputError("Wrong Crendetials", {
          errors: {
            wrongCrendetails: "incorrect password",
          },
        });
      }

      const token = await signToken(user._id);
      req.session.token = token;
      return {
        id: user._id,
        username: user.username,
        email: user.email,
        token: token,
        first_name: user.first_name,
        last_name: user.last_name,
      };
    }),
    register: catchAsync(
      async (_, { input: { username, email, password } }, context) => {
        console.log("are we in");
        const { res, req } = context;
        console.log(context, "9");
        const { errors, valid } = await validateRegisterInput(
          username,
          email,
          password
        );

        if (!valid) {
          throw new UserInputError("Errors", {
            errors,
          });
        }
        const user = await User.findOne({ email });
        if (user) {
          throw new UserInputError("User already exist", {
            errors: {
              email: "there is a user with this email address, sign in!",
            },
          });
        }
        const salt = crypto.randomBytes(16).toString("hex");
        const hashPass = crypto
          .pbkdf2Sync(password, salt, 10000, 64, "sha512")
          .toString("hex");

        const newUser = await User.create({
          username,
          email,
          salt,
          password: hashPass,
        });
        const token = await signToken(newUser._id);
        req.session.token = token;
        return {
          id: user._id,
          username: user.username,
          email: user.email,
          token: token,
          first_name: user.first_name,
          last_name: user.last_name,
        };
      }
    ),
  },
};
