import React from "react";
import "../App.css";

function Home() {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newDate = day + "/" + month + "/" + year;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gio! is your travel App</h1>
      </header>
      <div>
        <h2>{newDate}</h2>
      </div>
      <div>
        <h2>Booking</h2>
      </div>
      <div>
        <a href={"/budget"}>
          <h2>Budget</h2>
        </a>
      </div>
      <div>
        <h2>To do List</h2>
      </div>
      <div>
        <h2>Map</h2>
      </div>
    </div>
  );
}

export default Home;
