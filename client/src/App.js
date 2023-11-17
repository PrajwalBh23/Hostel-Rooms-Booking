import React from "react";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import Rooms from "./components/Rooms";
import RoomsResult from "./components/Room_result";
import HostelsResult from "./components/Hostel_result";
import Hostel from "./components/Hostel";
import Adding from "./components/Adding";
import Form from "./components/Form";
import Detail from "./components/Detail";
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
        <Route path="/add" element={<Adding />} exact />
        <Route path="/form" element={<Form />} exact />
        <Route path="/detail" element={<Detail />} exact />
      </Routes>
    </>
  );
}

export default App;
