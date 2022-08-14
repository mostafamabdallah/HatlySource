import React from "react";
import { Link } from "react-router-dom";

const ContactUS = () => {
  return (
    <div style={{ backgroundColor: "#ebeef5",paddingTop:'60px'  }} className="pb-5">
      <div className="container">
        <div className="row">
          <div
            className="col-12 p-4"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <h1 className="text-center">CONTACT US</h1>
            <div className="row mt-5">
              <div className="col-12 col-md-4">
                <i
                  className="fa fa-phone mb-2"
                  style={{ color: "#001c46", fontSize: "50px" }}
                ></i>
                <h5>PHONE</h5>
                <ul className="description ps-3">
                  <li>01558807773</li>
                  <li>01062365669</li>
                  <li>01200827565</li>
                  <li>0224031923</li>
                </ul>
              </div>
              <div className="col-12 col-md-4">
                <i
                  className="fa fa-envelope mb-2"
                  style={{ color: "#001c46", fontSize: "50px" }}
                ></i>
                <h5>EMAIL</h5>
                <p className="description" style={{ width: "90%" }}>
                  hatlystore@gmail.com
                </p>
              </div>
              <div className="col-12 col-md-4">
                <i
                  className="fa fa-location-arrow mb-2"
                  style={{ color: "#001c46", fontSize: "50px" }}
                ></i>
                <h5>ADRESS</h5>
                <p className="description" style={{ width: "90%" }}>
                  beside lapoir, Mostafa El-Nahaas, Al Manteqah Ath Thamenah,
                  Nasr City, Cairo Governorate 11765
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 p-4 mt-3"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <h3 style={{ textTransform: "uppercase" }} className="mb-3">
              Send Us A Message
            </h3>
            <div className="row">
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label">Message</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <Link to="/" className="btn btn-primary col-6 col-md-3">
                SEND
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 p-4 mt-3"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <h3 style={{ textTransform: "uppercase" }} className="mb-3">
              FIND US 
            </h3>
            <div className="row">
              <div className="col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3777891359614!2d31.346443315115387!3d30.054703681878664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f10a06df0d7%3A0x5873ef49645c719c!2sHatly%20Store!5e0!3m2!1sen!2seg!4v1647124962845!5m2!1sen!2seg"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  data-rocket-lazyload="fitvidscompatible"
                  data-ll-status="loaded"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
