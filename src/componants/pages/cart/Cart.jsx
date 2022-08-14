import React from "react";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import Product from "../shop/Product";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className=" pb-5" style={{ backgroundColor: "#ebeef5",paddingTop:'60px'  }}>
      <div className="container">
        {cart.products.length ? (
          <FilledCart data={cart}></FilledCart>
        ) : (
          <EmptyCart></EmptyCart>
        )}
        <div
          className="row p-3 mt-3"
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
            borderRadius: "5px",
          }}
        >
          <h5 className="pb-3" style={{ borderBottom: "1px solid #ededed" }}>
            Related Product
          </h5>
          {/* {data.map((data,i) => {
            return (
              <Product
                key={i}
                grid="col-6 col-sm-4 col-md-2 col-lg-2 mb-5"
                data={data}
              ></Product>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
