import React from "react";
import { Link } from "react-router-dom";

import hatly from "../../../img/01.jpg";

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#ebeef5" ,paddingTop:'60px' }} className="pb-5">
      <div className="container pt-4">
        <div className="row">
          <div
            className="col-12 p-4"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <h1 className="pb-4 pt-4 text-center">ABOUT US</h1>
            <div className="row">
              <div className="col-12 col-md-6 p-3">
                <img width="100%" src={hatly} />
              </div>
              <div
                className="col-12 col-md-6 p-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-evenly",
                }}
              >
                <h4>THE STORY</h4>
                <p className="description">
                  Hatly Facebook page was created in 2014 to be the safest and
                  best Egyptian way for you to buy from abroad, so you can enjoy
                  buying from abroad safely and freely with cash on delivery
                  payment method.
                </p>
                <p className="description">
                  We are just a group from different fields enjoying buying from
                  abroad decided to make it even easier in Egypt.
                </p>
                <Link
                  to="/shop"
                  className="btn btn-primary p-2 col-6 col-md-5 col-lg-3"
                >
                  <i className="fa fa-shopping-bag pe-1" aria-hidden="true"> </i> SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 p-4"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <div className="row ">
              <div className="col-6 col-md-3">
                <i
                  className="fa fa-car mb-2"
                  style={{ color: "#001c46", fontSize: "50px" }}
                ></i>
                <h5>Quick Delivery</h5>
                <p className="description" style={{ width: "90%" }}>
                  Home delivery within 24hr of placing your order
                </p>
              </div>
              <div className="col-6 col-md-3">
                <i
                  className="fa fa-cc-mastercard mb-2"
                  style={{ color: "#001c46", fontSize: "50px" }}
                ></i>
                <h5>Payment Methods</h5>
                <p className="description" style={{ width: "90%" }}>
                  Cash On Delivery, Credit Card, Premium Card, Ahly Visa
                  Installment
                </p>
              </div>
              <div className="col-6 col-md-3">
                <i
                  className="fa fa-check-circle-o mb-2"
                  style={{ color: "#001c46", fontSize: "50px" }}
                ></i>
                <h5>Quality</h5>
                <p className="description" style={{ width: "90%" }}>
                  Anything you buy from HATLY.com has an Agent Warranty
                </p>
              </div>
              <div className="col-6 col-md-3">
                <i
                  className="fa fa-retweet mb-2"
                  style={{ color: "#001c46", fontSize: "50px" }}
                ></i>
                <h5>Return & Refund</h5>
                <p className="description" style={{ width: "90%" }}>
                  Enjoy 14 days Return Or Refund on all your purchases
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 p-4"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <h3 style={{ textTransform: "uppercase" }} className="mb-3">
              Delivery Methods
            </h3>
            <ul className="description" >
              <li>Door to door</li>
              <li>Any Aramex Pickup station</li>
            </ul>
            <h3 style={{ textTransform: "uppercase" }} className="mb-3">
              Cash on delivery policy
            </h3>
            <p className="description">
              Hatly Store takes the lead, as usual, in everything related to
              safety and our customer’s experience, we were the owners of the
              principle of cash on delivery by providing larger quantities of
              products to be ready for immediate purchase, instead of waiting
              for weeks or even month.
            </p>
            <p className="description">
              However, in case the customer requests a device that is not
              available in our warehouse, a deposit is made with a small amount
              by one of the following methods:
            </p>

            <ul className="description">
              <li>Bank deposit</li>
              <li>Payment in our store</li>
              <li>Vodafone Cash, Etisalat cash or MobiCash</li>
            </ul>

            <h3 style={{ textTransform: "uppercase" }} className="mb-3">
              Pricing policy
            </h3>
            <p className="description">
              In case a product is not available or provided in our inventory,
              please be aware that the prices announced on the website are
              approximate and are subject to increase or decrease according to
              the cost of the process of providing the device without referring
              to the customer.
            </p>
            <p className="description">
              The customer has the right to be refunded with the deposit if the
              device is not provided within 21 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
