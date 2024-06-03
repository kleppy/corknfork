require("dotenv").config();
const mongoose = require("mongoose");
const Food = require("../models/Food");
const Wine = require("../models/Wine");

const corknforkDB = process.env.CORKNFORK_DB;

const seedData = async () => {
  try {
    await mongoose.connect(corknforkDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Food.deleteMany({});
    await Wine.deleteMany({});

    const foods = [
      {
        name: "Steak",
        image: "./imgs/steak.jpeg",
        pairs: ["Bold", "Full-bodied"],
        flavors: ["Savory", "Juicy"],
      },
      {
        name: "Salmon",
        image: "./imgs/salmon.jpeg",
        pairs: ["Crisp", "Buttery"],
        flavors: ["Rich", "Buttery"],
      },
      {
        name: "Chocolate Cake",
        image: "./imgs/cake.jpeg",
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

    await Food.insertMany(foods);
    await Wine.insertMany(wines);

    console.log("Data seeded successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data", error);
    mongoose.connection.close();
  }
};

seedData();
