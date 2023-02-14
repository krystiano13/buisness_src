import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./molecules/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/buisness/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { App };
