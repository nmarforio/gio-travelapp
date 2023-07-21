import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function BuketList() {
  const [activityDay, setActivityDay] = useState<Date | null>(null);

  function handleBuketSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <>
      <div className="menu">
        <a className="homeLink" href="/">Home</a>
        <a href="/booking">Booking</a>
        <a href="/budget">Budget</a>
      </div>
      <div className="buketList">
        <h1>Have fun with these activities</h1>
        <form className="activitiesForm" onSubmit={handleBuketSubmit}>
          <label>Activity</label>
          <input required type="text"></input>
          <label>When</label>
          <DatePicker
            dateFormat={"dd/MM/yyyy"}
            showMonthDropdown
            showYearDropdown
            selected={activityDay}
            onChange={(date) => setActivityDay(date)}
            required
          />
          <label htmlFor="payment">Payment:</label>
          <select id="payment" name="payment">
            <option>for free</option>
            <option>on charge</option>
          </select>
          <button type="submit">Save the Activity</button>
        </form>
      </div>
    </>
  );
}

export default BuketList;
