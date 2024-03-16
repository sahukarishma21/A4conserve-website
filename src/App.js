import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./component/Homepage/Homepage";

import About from "./component/About/About";
import Services from "./component/Services/Services";
import Blogs from "./component/Blogs/Blogs";
import Product from "./component/Product/Product";
import Contact from "./component/Contact/Contact";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;