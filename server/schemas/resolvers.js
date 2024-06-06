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
    donation: async (parent, args, context) => {
      const session = stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    }

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
    logout: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      return { success: true };
    },
  },
};

module.exports = resolvers;
