import React from "react";
import { Link } from "react-router-dom";
import phonesImage from "../../../img/image1-1536x1152.png";

const pStyle = {
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  display: "-webkit-box",
  whiteSpace: "normal",
  overflow: "hidden",
  color: 'white',
  textDecoration:'none'
};

const scrollTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const Product = (props) => {
  return (
    <div
      className={props.grid}
      style={{ borderRadius: "5px", backgroundColor: "#384a8c" }}
    >
      <Link
        to={`/product/${props.data.id}`}
        style={{ textDecoration: "none" }}
        onClick={scrollTop}
      >
        <div align="center">
          <Link
            className="text-center"
            to={`/product/${props.data.id}`}
            onClick={scrollTop}
        style={{ textDecoration: "none" }}

          >
            <img src={phonesImage} style={{ width: "80%", height: "80%" ,filter: 'drop-shadow(white 0px 0px 70px)' }} />
          </Link>
          <Link
            className="text-center"
            to={`/product/${props.data.id}`}
            onClick={scrollTop}
          >
            <p style={pStyle}>{props.data.title}</p>
          </Link>
          <p
            style={{
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "2",
              display: "-webkit-box",
              whiteSpace: "normal",
              overflow: "hidden",
              textAlign: "center",
              color: "white",
            }}
          >
            {props.data.description}
          </p>
          <p className="text-center mb-2" style={{ fontWeight: "600" ,color:"#62ff00" }}>{`EGP ${
            props.data.price * 18
          }`}</p>
          <div className="row">
            <p className="text-center m-0">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star text-secondary"></span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
