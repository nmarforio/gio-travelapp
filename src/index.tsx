import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./routes/Home";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Budget from "./routes/Budget";
import ErrorPage from "./error-page";
import Booking from "./routes/Booking";
import BuketList from "./routes/BuketList";
import MapPage from "./routes/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Budget",
    element: <Budget />,
  },
  {
    path: "Booking",
    element: <Booking />,
  },
  {
    path: "Buketlist",
    element: <BuketList />,
  },
  {
    path: "Map",
    element: <MapPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
