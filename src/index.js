import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";

// Importing React Bootstrap for better styling
import "bootstrap/dist/css/bootstrap.min.css";

// Importing React Toastify styles
import "react-toastify/dist/ReactToastify.css";

// Creating a root to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the app inside BrowserRouter and StrictMode
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
