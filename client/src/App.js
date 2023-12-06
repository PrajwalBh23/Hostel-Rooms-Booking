import React from "react";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import Rooms from "./components/Rooms";
import RoomsResult from "./components/Room_result";
import HostelsResult from "./components/Hostel_result";
import Form from "./components/Form.js";
import Detail from "./components/Detail.js";
import Hostel from "./components/Hostel";
import Adding from "./components/Adding";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/roomsresult" element={<RoomsResult />} exact />
        <Route path="/hostelsresult" element={<HostelsResult />} exact />
        <Route path="/rooms" element={<Rooms />} exact />
        <Route path="/hostels" element={<Hostel />} exact />
        <Route path="/form" element={<Form />} exact />
        <Route path="/detail/:id" element={<Detail />} exact />
        <Route path="/add" element={<Adding />} exact />
      </Routes>
    </>
  );
}

export default App;