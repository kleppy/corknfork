const { User, Food, Wine, Cellar } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    cellarById: async (parent, { cellarId }) => {
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
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addFood: async (parent, { name, image, pairs, flavors }) => {
      const food = await Food.create({ name, image, pairs, flavors });
      return food;
    },
  },
};

module.exports = resolvers;
