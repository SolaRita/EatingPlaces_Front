import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Category from "./views/Category";
import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
