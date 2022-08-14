import React from "react";
import { Link } from "react-router-dom";
import appStore from "../img/appstore.png";
import playStore from "../img/play-srore.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
      }}
    >
      <div className="container pt-5">
        <div className="row justify-content-center pt-5 pb-5">
          <div className=" col-12 col-md-3">
            <h4> Categories</h4>
            <ul style={{ padding: "0" }}>
              <li className="pt-1 " style={{ listStyle: "none" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Phones
                </Link>
              </li>
              <li className="pt-1 " style={{ listStyle: "none" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Smart Watches
                </Link>
              </li>
              <li className="pt-1 " style={{ listStyle: "none" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Chargers
                </Link>
              </li>
              <li className="pt-1 " style={{ listStyle: "none" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Headphones
                </Link>
              </li>
              <li className="pt-1 " style={{ listStyle: "none" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Power Banks
                </Link>
              </li>
              <li className="pt-1 " style={{ listStyle: "none" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Cases
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h4>Links</h4>
            <ul style={{ padding: "0" }}>
              <li className="pt-1 " style={{ listStyle: "none" }}>
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className="pt-1 " style={{ listStyle: "none" }}>
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li className="pt-1 " style={{ listStyle: "none" }}>
                <Link
                  to="/shop"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h4>Hatly Mobile App</h4>
            <ul style={{ padding: "0" }}>
              <li className="pt-1 " style={{ listStyle: "none" }}>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#ebeef5",
                    fontWeight: "500",
                  }}
                  href="#"
                >
                  <img style={{ width: "50%" }} src={appStore}></img>
                </a>
              </li>
              <li className="pt-2 " style={{ listStyle: "none" }}>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#ebeef5",
                    fontWeight: "500",
                  }}
                  href="#"
                >
                  <img style={{ width: "50%" }} src={playStore}></img>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h4>Contact Us</h4>
            <ul style={{ padding: "0" }}>
              <li className="pt-1 " style={{ listStyle: "none" }}>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#ebeef5",
                    fontWeight: "500",
                  }}
                  href="#"
                >
                  <ul>
                    <li>01558807773</li>
                    <li>01062365669</li>
                    <li>01200827565</li>
                    <li>0224031923</li>
                  </ul>
                </a>
              </li>
              <li className="pt-1" style={{ listStyle: "none" }}>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#ebeef5",
                    fontWeight: "500",
                  }}
                  href="#"
                >
                  support@hatlystore.com
                </a>
              </li>
            </ul>
            <div style={{ display: "flex" }}>
              <a href="">
                <i
                  style={{ fontSize: "30px", color: "#ebeef5" }}
                  className="p-3 fa fa-facebook"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="">
                <i
                  style={{ fontSize: "30px", color: "#ebeef5" }}
                  className="p-3 fa fa-twitter"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="">
                <i
                  style={{ fontSize: "30px", color: "#ebeef5" }}
                  className="p-3 fa fa-instagram"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <p
              style={{ textAlign: "center", color: "white", fontSize: "13px" }}
            >
              Hatly is brought to you by Tradeline, the leading Apple Reseller
              in the region. The products categories it is bringing to the
              market comprise of handsets, audio, laptops, wearables, gaming
              consoles and accessories. Hatly is online and in store.
            </p>
            <p style={{ textAlign: "center", color: "white" }}>
              Copyright © {new Date().getFullYear()} Hatly All Rights Reserved |
              Powerd by{" "}
              <span>
                <a
                  style={{ color: "#E41D40", textDecoration: "none" }}
                  href="https://trendlix.com/"
                  target="_blank"
                >
                  TrendLIX
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
