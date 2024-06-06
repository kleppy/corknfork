const { User, Food, Wine, Cellar } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const stripe = require('stripe')('process.env.STRIPE_SECRET_KEY');

const resolvers = {
  Query: {
    user: async (parent, {userId}, context) => {
      console.log(userId)
      return User.findOne({_id: userId}).populate("cellar");
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
    addPair: async (parent, { userId, wineId, foodId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { cellar: [userId, wineId, foodId] },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },
    logout: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      return { success: true };
    },
  },
};

module.exports = resolvers;
