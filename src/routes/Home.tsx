import React from "react";
import "../App.css";

function Home() {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newDate = day + "/" + month + "/" + year;

  return (
    <div className="Home">
      <header className="App-header">
        <h1>Gio! your travel App</h1>
      </header>
      <div>
        <h2>{newDate}</h2>
      </div>
      <div>
        <a href="/booking">
          <h2>Booking</h2>
        </a>
      </div>
      <div>
        <a href={"/budget"}>
          <h2>Budget</h2>
        </a>
      </div>
      <div>
        <a href="/buketlist">
          <h2>Buket List</h2>
        </a>
      </div>
      <div>
        <a href="/map">
          <h2>Map</h2>
        </a>
      </div>
    </div>
  );
}

export default Home;
