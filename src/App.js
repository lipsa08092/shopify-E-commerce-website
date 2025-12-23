import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayouts";
import AdminLayout from "./Layouts/AdminLayouts";

import Home from "./Screens/User/Home";
import About from "./Screens/User/About";
import Contact from "./Screens/User/Contact";
import SignUp from "./Screens/Auth/SignUp";
import Login from "./Screens/Auth/Login";
import Account from "./Screens/NonAuth/Account";
import Error from "./Screens/NonAuth/Error";
import Wishlist from "./Screens/User/Wishlist";
import Cart from "./Screens/User/Cart";
import Checkout from "./Screens/NonAuth/Checkout";
import ProductDetails from "./Screens/NonAuth/ProductDetails";
import AdminLogin from "./Screens/Auth/AdminLogin";
import AdminDashboard from "./Screens/Admin/AdminDashboard";
import { products } from "./Data/Products";
import { categoryData } from "./Data/CategoryData";
import { setDefaultAdmin } from "./Data/SetAdmin";
import AdminProfile from "./Screens/NonAuth/AdminProfile";
import Categories from "./Screens/Admin/Categories";
import Products from "./Screens/Admin/Products";
import Testimonials from "./Screens/Admin/Testimonials";
import ContactInfo from "./Screens/Admin/ContactInfo";
import JobOpenings from "./Screens/Admin/JobOpenings";
import Applications from "./Screens/Admin/Applications";
import ApplyJob from "./Screens/Admin/ApplyJob";

function App() {
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("categories", JSON.stringify(categoryData));
  }, []);

  useEffect(() => {
    setDefaultAdmin();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contactinfo" element={<ContactInfo />} />
          <Route path="jobOpenings" element={<JobOpenings />} />
          <Route path="applications" element={<Applications />} />
        </Route>
        <Route path="/career/apply/:id" element={<ApplyJob />} />

        <Route path="/404error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
