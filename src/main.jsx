import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./About";
import Portfolio from "./Portfolio";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      {/* App component should always render to display the NavBar */}
      <Route path="/" element={<App />}>
        {/* Define child routes that will be rendered inside App */}
        <Route index element={<Portfolio />} />  {/* Portfolio as home page */}
        <Route path="about" element={<About />} />  {/* About page */}
      </Route>
    </Routes>
  </Router>
);
