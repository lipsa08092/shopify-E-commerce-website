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
import ProtectedAdmin from "./Routes/ProtectedAdmin";
import { products } from "./Data/Products";
import { setDefaultAdmin } from "./Data/SetAdmin";
import AdminProfile from "./Screens/NonAuth/AdminProfile";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, []);
  useEffect(() => {
    setDefaultAdmin();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        <Route
          path="/wishlist"
          element={
            <MainLayout>
              <Wishlist />
            </MainLayout>
          }
        />

        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
        <Route
          path="/account"
          element={
            <MainLayout>
              <Account />
            </MainLayout>
          }
        />

        <Route
          path="/checkout"
          element={
            <MainLayout>
              <Checkout />
            </MainLayout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <MainLayout>
              <SignUp />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <AdminLayout />
            </ProtectedAdmin>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>

        <Route path="/404error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
