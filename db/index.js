const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connection() {
  try {
    await mongoose.connect(""); // put your MongoURL and is working
  } catch (error) {
    console.log(error);
  }
}
console.log(process.env);

// For backend and express
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
});

connection();
app.listen(5000);
