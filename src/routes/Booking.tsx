import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function Booking() {
  const [selectedArrival, setSelectedArrival] = useState<Date | null>(null);
  const [selectedDeparture, setSelectedDeparture] = useState<Date | null>(null);
  const [city, setCity] = useState <string> ("")
  const [direction, setDirection] = useState <string> ("")
  const [zipCode, setZipCode] = useState <string> ("")
  const [country,setCountry] = useState <string> ("")

    console.log(city,direction, zipCode,country, selectedArrival,selectedDeparture)

  function handleBookingSubmit(e: React.FormEvent){
    e.preventDefault()
    const cityInput = document.getElementById("city") as HTMLInputElement
    setCity(cityInput?.value)
    const directionInput = document.getElementById("direction") as HTMLInputElement
    setDirection(directionInput?.value)
    const zipCodeInput = document.getElementById("zipcode") as HTMLInputElement
    setZipCode(zipCodeInput?.value)
    const countryInput = document.getElementById("country") as HTMLInputElement
    setCountry(countryInput?.value)
  }
  
  return (
    <div className="booking">
      <h1>Booking</h1>
      <form className="bookingForm" onSubmit={handleBookingSubmit}>
        <label>Where is your Stay:</label>
        <input required placeholder="City" type="text" id="city"></input>
        <label>Direction:</label>
        <input required type="text" placeholder="Riegerstrasse 4" id="direction"></input>
        <label>ZIP code:</label>
        <input required type="number" placeholder="6616" id="zipcode"></input>
        <label>Country</label>
        <input required type="text" placeholder="Switzerland" id="country"></input>

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
    </div>
  );
}

export default Booking;
