import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export default App;

