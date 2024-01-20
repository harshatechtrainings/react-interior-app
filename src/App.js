import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "./assets/css/style.css";
import Home from "./pages/Main/Home";
import Calculator from "./pages/Main/Caculator";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerReviews from "./pages/Main/CustomerReviews";
import Service from "./pages/Main/Service";
import Contact from "./pages/Main/Contact";
import Print from "./pages/Main/Print";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/reviews' element={<CustomerReviews />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/print' element={<Print />} />
      </Routes>
    </Router>
  );
}

export default App;
