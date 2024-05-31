const { User, Food, Wine, Cellar } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    cellar: async (parent, { cellarId }) => {
      return Cellar.findOne({ _id: cellarId });
    },
    wines: async () => {
      return Wine.find();
    },
    foods: async () => {
      return Food.find();
    },
    wine: async (parent, { wineId }) => {
      return Wine.findOne({ _id: wineId });
    },
    food: async (parent, { foodId }) => {
      return Food.findOne({ _id: foodId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("cellar")
          .populate("wine")
          .populate("food");
      }
      throw new AuthenticationError("Not authenticated");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          console.error(`Login error: No user found with email: ${email}`);
          throw new AuthenticationError(
            "No user found with this email address"
          );
        }

        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          console.error(`Login error: Incorrect password for email: ${email}`);
          throw new AuthenticationError("Incorrect password");
        }

        const token = signToken(user);
        console.log("Login successful:", { token, user });
        return { token, user };
      } catch (error) {
        console.error("Login mutation error:", error);
        throw new Error("Internal server error");
      }
    },
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error("AddUser mutation error:", error);
        throw new Error("Internal server error");
      }
    },
    // Add other mutations here
  },
};

module.exports = resolvers;
