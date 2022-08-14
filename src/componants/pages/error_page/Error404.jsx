import React from "react";
import {Link} from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="container" style={{paddingTop:'60px' }}>
      <div className="row justify-content-center" style={{height:'100vh'}}>
        <div
          className="col-12 p-4 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
            borderRadius: "5px",
            flexDirection:'column'
          }}
        >
            <i className="fa fa-frown-o" style={{fontSize:'12rem',color:'#245891'}}></i>
            <h1 style={{fontSize:'4rem'}}>Error 404</h1>
            <p style={{color:'#245891'}}>page not found</p>
            <Link
              to="/"
              className="btn col-6 col-md-2 mt-3 text-white"
              style={{ backgroundColor: "#245891" }}
            >
              Return To Home
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
