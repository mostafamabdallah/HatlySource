import React from "react";
import Shop from "./pages/shop/Shop";
import SingleProduct from "./pages/product/SingleProduct";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUS from "./pages/contactUS/ContactUS";
import Home from "./pages/home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PaymentResponse from "./pages/payment_response/PaymentResponse";
import Error404 from "./pages/error_page/Error404";
const Animation = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter >
      <Routes location={location} key={location.pathname}>
        <Route path="/" index exact element={<Home />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/product/:id" exact element={<SingleProduct />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/checkout" exact element={<Checkout />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/contact" exact element={<ContactUS />} />
        <Route path="/payment_response" exact element={<PaymentResponse />} />
        <Route path="*" exact element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Animation;
