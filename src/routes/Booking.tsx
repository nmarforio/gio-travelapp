import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function Booking() {
  const [selectedArrival, setSelectedArrival] = useState<Date | null>(null);
  const [selectedDeparture, setSelectedDeparture] = useState<Date | null>(null);
  const [city, setCity] = useState<string>("");
  const [direction, setDirection] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  // const arrivalMonth = selectedArrival!.getUTCMonth() + 1; //months from 1-12
  // const arrivalDay = selectedArrival!.getUTCDate();
  // const arrivalYear = selectedArrival!.getUTCFullYear();
  // const newDateArrival = arrivalDay + "/" + arrivalMonth + "/" + arrivalYear;
  // console.log("New arrival date", newDateArrival);

  async function handleBookingSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cityInput = document.getElementById("city") as HTMLInputElement;
    setCity(cityInput?.value);
    const directionInput = document.getElementById(
      "direction"
    ) as HTMLInputElement;
    setDirection(directionInput?.value);
    const zipCodeInput = document.getElementById("zipcode") as HTMLInputElement;
    setZipCode(zipCodeInput?.value);
    const countryInput = document.getElementById("country") as HTMLInputElement;
    setCountry(countryInput?.value);

    const bookingObject: object = {
      arrival: selectedArrival,
      departure: selectedDeparture,
      city: city,
      direction: direction,
      zipCode: zipCode,
      country: country,
    };
    

    let result = await fetch("http://localhost:5000/booking", {
      method: "post",
      body: JSON.stringify(bookingObject!),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      console.log(result);
    }
  }

  const linkBooking: Array<string> = [
    "https://www.booking.com",
    "https://www.hostelworld.com",
    "https://www.airbnb.com",
  ];

  return (
    <>
      <div className="menu">
        <a className="homeLink" href="/">
          Home
        </a>
        <a href="/budget">Budget</a>
        <a href="/buketlist">BuketList</a>
      </div>
      <div className="booking">
        <h1>Booking</h1>
        <form className="bookingForm" onSubmit={(e) => handleBookingSubmit(e)}>
          <label>Where is your Stay:</label>
          <input required placeholder="City" type="text" id="city"></input>
          <label>Direction:</label>
          <input
            required
            type="text"
            placeholder="Riegerstrasse 4"
            id="direction"
          ></input>
          <label>ZIP code:</label>
          <input required type="number" placeholder="6616" id="zipcode"></input>
          <label>Country</label>
          <input
            required
            type="text"
            placeholder="Switzerland"
            id="country"
          ></input>

          <div className="calendarBooking">
            <p>from</p>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              showMonthDropdown
              showYearDropdown
              selected={selectedArrival}
              onChange={(date) => setSelectedArrival(date)}
              required
            />
            <p>to</p>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              showMonthDropdown
              showYearDropdown
              selected={selectedDeparture}
              onChange={(dateDeparture) => setSelectedDeparture(dateDeparture)}
              required
            />
          </div>
          <button className="bookingButton" type="submit">
            Save your Stay
          </button>
        </form>
        <div className="bookingLinks">
          {linkBooking.map((link) => {
            return (
              <a key={link} href={link}>
                {link}
              </a>
            );
          })}
          <button>Add new link</button>
          <button>Delete link</button>
        </div>
      </div>
    </>
  );
}

export default Booking;
