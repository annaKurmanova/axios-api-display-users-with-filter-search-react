import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Employee from "./components/Employee";
import { Routes, Route, Link } from "react-router-dom";
import Single from "./pages/Single";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
