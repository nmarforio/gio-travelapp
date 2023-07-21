import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function Booking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="booking">
      <h1>Booking</h1>
      <form className="bookingForm">
        <label>Where is your Stay:</label>
        <input placeholder="City" type="text"></input>
        <label>ZIP code:</label>
        <input type="number" placeholder="6616"></input>
        <label>Country</label>
        <input type="text" placeholder="Switzerland"></input>
      </form>
      <label>How many Days?</label>
      <DatePicker
        dateFormat={"dd/MM/yyyy"}
        showMonthDropdown
        showYearDropdown
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
}

export default Booking;
