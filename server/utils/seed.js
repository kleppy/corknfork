//! require("dotenv").config();
const mongoose = require("mongoose");
const Food = require("../models/Food");
const Wine = require("../models/Wine");
const User = require("../models/User");
const Cellar = require("../models/Cellar");

const corknforkDB =
  "mongodb://127.0.0.1:27017/corknforkDB"; /* Replace with .env variable */

const seedData = async () => {
  try {
    await mongoose.connect(corknforkDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Food.deleteMany({});
    await Wine.deleteMany({});
    await User.deleteMany({});
    await Cellar.deleteMany({});

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
        flavors: ["Clean", "Buttery"],
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
        image: "./imgs/cabernet_sauvignon.jpeg",
        pairs: ["Savory", "Juicy"],
        flavors: ["Bold", "Full-bodied"],
      },
      {
        name: "Chardonnay",
        image: "./imgs/chardonnay.jpeg",
        pairs: ["Clean", "Buttery"],
        flavors: ["Crisp", "Buttery"],
      },
      {
        name: "Port",
        image: "./imgs/port.jpeg",
        pairs: ["Sweet", "Rich"],
        flavors: ["Sweet", "Rich"],
      },
    ];
    const users = [
      {
        username: "John",
        email: "john@gmail.com",
        password: "password",
      },
      {
        username: "Jane",
        email: "jane@gmail.com",
        password: "password",
      },
    ];

    await Food.insertMany(foods);
    await Wine.insertMany(wines);
    const insertedUsers = await User.insertMany(users);

    const steak = await Food.findOne({ name: "Steak" });
    const salmon = await Food.findOne({ name: "Salmon" });
    const cabernet = await Wine.findOne({ name: "Cabernet Sauvignon" });
    const chardonnay = await Wine.findOne({ name: "Chardonnay" });

    const john = insertedUsers.find((user) => user.username === "John");
    const jane = insertedUsers.find((user) => user.username === "Jane");

    const johnsCellar = new Cellar({
      User: john._id,
      Wine: cabernet._id,
      Food: steak._id,
    });

    const janesCellar = new Cellar({
      User: jane._id,
      Wine: chardonnay._id,
      Food: salmon._id,
    });

    await johnsCellar.save();
    await janesCellar.save();

    john.cellar.push(johnsCellar);
    jane.cellar.push(janesCellar);

    await john.save();
    await jane.save();

    console.log("Data seeded successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data", error);
    mongoose.connection.close();
  }
};

seedData();
