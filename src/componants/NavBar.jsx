import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import logo from "../img/logo.png";
import logo2 from "../img/logo2.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faBehanceSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
const NavBar = () => {
  const [elementMotion, setElementMotion] = useState({ x: "150%", opacity: 0 });
  const cart = useSelector((state) => state.cart);

  const [y, setY] = useState(window.scrollY);
  const [opacity, setOpacity] = useState("1");
  const [color, setColor] = useState("transparent");
  const [text, setText] = useState("#384a8c");
  const [logos, setLogos] = useState(logo);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        if (window.scrollY < 20) {
          setText("#384a8c");
          setColor("transparent");
          setOpacity("1");
          setLogos(logo)
        } else {
          setText("white");
          setOpacity("1");
          setColor("#000000a8");
          setLogos(logo2)
        }
      } else if (y < window.scrollY) {
        setText("white");
        setLogos(logo2)
        setOpacity("0");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className="navBar  ">
      <div
        className="container-fluid "
        style={{ position: "fixed", zIndex: "99", maxHeight: "60px" }}
      >
        <div
          className="row align-items-center ps-4 pe-4 pt-lg-0 pt-3 pb-3 pb-lg-0"
          style={{
            opacity: opacity,
            transition: "1s",
            color: text,
            backgroundColor: color,
          }}
        >
          <div className="col-4 col-md-5 col-lg-4 p-1">
            <div className="row align-items-center">
              <div className="col-10 col-md-5 col-lg-4">
                <img width="100%" src={logos}></img>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-2 d-lg-none" align="center">
          <div className="col-auto p-3">
                <Link to="/cart" style={{ position: "relative" }}>
                  {" "}
                  <FontAwesomeIcon
                    className="col"
                    icon={faCartShopping}
                    style={{ fontSize: "20px" }}
                  ></FontAwesomeIcon>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#20c997",
                      borderRadius: "50%",
                    }}
                  >
                    <i style={{ fontSize: "16px", color: "white" }}>
                      {cart.products.length}
                    </i>
                  </div>
                </Link>
              </div>
          </div>
          <div className="col-8 d-none d-lg-block p-1">
            <div className="row align-items-center justify-content-end">
              <div className="col-auto p-3">
                <Link to="/">Home</Link>
              </div>
              <div className="col-auto p-3">
                <Link to="/shop">Shop</Link>
              </div>
              <div className="col-auto p-3">
                <Link to="/about">About Us</Link>
              </div>
              <div className="col-auto p-3">
                <Link to="/contact">Contact Us</Link>
              </div>
              <div className="col-auto p-3">
                <Link to="/cart" style={{ position: "relative" }}>
                  {" "}
                  <FontAwesomeIcon
                    className="col"
                    icon={faCartShopping}
                    style={{ fontSize: "20px" }}
                  ></FontAwesomeIcon>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#20c997",
                      borderRadius: "50%",
                    }}
                  >
                    <i style={{ fontSize: "16px", color: "white" }}>
                      {cart.products.length}
                    </i>
                  </div>
                </Link>
              </div>
              <div className="col-auto p-3">
                <FontAwesomeIcon
                  onClick={() => {
                    setElementMotion({ x: "0px", opacity: 1 });
                  }}
                  icon={faBars}
                  style={{ fontSize: "30px" }}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-5 d-lg-none" align="end">
            <FontAwesomeIcon
              onClick={() => {
                setElementMotion({ x: "0px", opacity: 1 });
              }}
              icon={faBars}
              style={{ fontSize: "30px" }}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ x: "150%", opacity: 0 }}
        animate={elementMotion}
        transition={{
          duration: 1,
          repeatDelay: 1,
        }}
        className="col-12 col-md-6 col-lg-3 sideNav"
        style={{
          position: "fixed",
          maxHeight: "100vh",
          backgroundColor: "#384a8c",
          right: "0",
          zIndex: "999",
          overflowY: "scroll",
          overflowX: "hidden",
          bottom: 0,
          top: 0,
        }}
      >
        <div className="row justify-content-end pt-4">
          <div className="col-2">
            <FontAwesomeIcon
              onClick={() => {
                setElementMotion({ x: "150%", opacity: 0 });
              }}
              icon={faClose}
              style={{ fontSize: "30px" }}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="row p-5">
          <p className="text-end" style={{ fontSize: "25px" }}>
            Phones
          </p>
          <p className="text-end" style={{ fontSize: "25px" }}>
            Smart Watches
          </p>
          <p className="text-end" style={{ fontSize: "25px" }}>
            Chargers
          </p>
          <p className="text-end" style={{ fontSize: "25px" }}>
            Headphones
          </p>
          <p className="text-end" style={{ fontSize: "25px" }}>
            Power Banks
          </p>
          <p className="text-end" style={{ fontSize: "25px" }}>
            Cases
          </p>
        </div>

        <div className="row ps-5 pe-5 icon">
          <FontAwesomeIcon
            className="col"
            icon={faFacebookSquare}
            style={{ fontSize: "30px" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="col"
            icon={faTwitterSquare}
            style={{ fontSize: "30px" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="col"
            icon={faYoutubeSquare}
            style={{ fontSize: "30px" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="col"
            icon={faBehanceSquare}
            style={{ fontSize: "30px" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="col"
            icon={faLinkedinIn}
            style={{ fontSize: "30px" }}
          ></FontAwesomeIcon>
        </div>
        <div className="row ps-5 pe-5">
          <img width="100%" src={logo2}></img>
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
