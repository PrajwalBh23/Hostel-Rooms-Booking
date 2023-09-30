import React from "react";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/result" element={<Header />} exact />
      </Routes>
    </>
  );
}

export default App;
