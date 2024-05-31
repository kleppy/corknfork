require("dotenv").config();
const mongoose = require("mongoose");
const Food = require("../models/Food");
const Wine = require("../models/Wine");
const User = require("../models/User");

// Sets object "corknforkDB" to a hidden value inside the .env in the server directory.
const corknforkDB = process.env.CORKNFORK_DB;

const seedData = async () => {
  await mongoose.connect(corknforkDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Clears existing data.
  await Food.deleteMany({});
  await Wine.deleteMany({});

  // Seeds Food and Wine data with 3 perfect-pair examples.
  const foods = [
    {
      name: "Steak",
      image: "steak.jpg",
      pairs: ["Bold", "Full-bodied"],
      flavors: ["Savory", "Juicy"],
    },
    {
      name: "Salmon",
      image: "salmon.jpg",
      pairs: ["Crisp", "Buttery"],
      flavors: ["Rich", "Buttery"],
    },
    {
      name: "Chocolate Cake",
      image: "chocolate_cake.jpg",
      pairs: ["Sweet", "Rich"],
      flavors: ["Sweet", "Rich"],
    },
  ];

  const wines = [
    {
      name: "Cabernet Sauvignon",
      image: "cabernet_sauvignon.jpg",
      pairs: ["Savory", "Juicy"],
      flavors: ["Bold", "Full-bodied"],
    },
    {
      name: "Chardonnay",
      image: "chardonnay.jpg",
      pairs: ["Rich", "Buttery"],
      flavors: ["Crisp", "Buttery"],
    },
    {
      name: "Port",
      image: "port.jpg",
      pairs: ["Sweet", "Rich"],
      flavors: ["Sweet", "Rich"],
    },
  ];

  const users = [
    {
      username: "John Smith",
      email: "john@gmail.com",
      password: "password",
    },
  ];

  await Food.insertMany(foods);
  await Wine.insertMany(wines);
  await User.insertMany(users);

  console.log("Data seeded successfully");
  mongoose.connection.close();
};

seedData().catch((err) => {
  console.error(err);
  mongoose.connection.close();
});
