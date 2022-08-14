import React from "react";
import { Link } from "react-router-dom";
import headphonesImage from "../../../img/image3-1536x1152.png";

const pStyle = {
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "2",
  display: "-webkit-box",
  whiteSpace: "normal",
  overflow: "hidden",
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
    <div className={props.grid}>
      <div>
        <Link to={`/product/${props.data.id}`} onClick={scrollTop}>
          <img
            className="productImage"
            src={headphonesImage}
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
        <Link to={`/product/${props.data.id}`} onClick={scrollTop}>
          <p style={pStyle}>{props.data.title}</p>
        </Link>

        <p style={{ fontWeight: "500" }}>{`EGP ${props.data.price * 18}`}</p>
        <Link
          onClick={scrollTop}
          className="btn btn-primary"
          style={{ width: "100%" }}
          to={`/product/${props.data.id}`}
        >
          <i className="fa fa-eye"></i> View
        </Link>
      </div>
    </div>
  );
};

export default Product;
