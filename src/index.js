import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { About } from "./pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Experience } from "./pages/Experience/Experience";
import { Home } from "./pages/Home/Home";
import { Skills } from "./pages/Skills/Skills";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);