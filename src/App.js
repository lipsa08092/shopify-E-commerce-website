import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Home from "./Screens/User/Home";
import Footer from "./Components/Common/Footer";
import About from "./Screens/User/About";
import Contact from "./Screens/User/Contact";
import SignUp from "./Screens/Auth/SignUp";
import Login from "./Screens/Auth/Login";
import Account from "./Screens/NonAuth/Account";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
