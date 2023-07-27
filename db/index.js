// import Booking from "./model/Booking";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connection() {
  try {
    await mongoose.connect(
      "mongodb+srv://nicolemarforio:yMpXiOBwVt22ofT9@gio-traveapp.jw1r7me.mongodb.net/"
    ); // put your MongoURL and is working
  } catch (error) {
    console.log(error);
  }
}

// For backend and express
const express = require("express");
const app = express();
const cors = require("cors");
// const { default: Booking } = require("./model/Booking");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
});

app.post("/booking", async (req, resp) => {
  try {
    const bookingData = new Booking(req.body);
    let result = await bookingData.save();
    result = result.toObject();
    if (result) {
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("Booking Data saved");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});

const { Schema } = mongoose;
const bookingSchema = new Schema({
  arrival: Number,
  departure: Number,
  city: String,
  direction: String,
  zipCode: String,
  country: String,
});

const Booking =
  mongoose.models.Booking || mongoose.model("Booking ", bookingSchema);

connection();
app.listen(5000);
