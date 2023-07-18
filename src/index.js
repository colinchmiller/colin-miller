import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Splash } from "./pages/Splash/Splash";
import { About } from "./pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Experience } from "./pages/Experience/Experience";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Splash />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
