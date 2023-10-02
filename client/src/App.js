import React from "react";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import Rooms from "./components/Rooms";
import Hostel from "./components/Hostel";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/rooms" element={<Rooms />} exact />
        <Route path="/hostels" element={<Hostel />} exact />
      </Routes>
    </>
  );
}

export default App;
