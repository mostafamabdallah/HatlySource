import React from "react";
import { useLocation, Link } from "react-router-dom";
import card from "../../../img/card.png";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const PaymentResponse = () => {
  let query = useQuery();
  return (
    <div className="container" style={{paddingTop:'60px' }}>
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div
          className="col-11 p-4"
          align="center"
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
            borderRadius: "5px",
          }}
        >
          <div className="row justify-content-center">
            <div className="col-6 col-md-3">
              <img
                width="80%"
                src={card}
                style={{
                  padding: "30px",
                  backgroundColor: "#20c997",
                  borderRadius: "20%",
                }}
              ></img>
            </div>
          </div>
          <div className="row">
            <h3 className="p-4">THANK YOU!</h3>
            <p style={{ fontSize: "20px" }}>
              Payment done successfully your order ID is {}{" "}
            </p>
          </div>
          <div className="row justify-content-center">
            <Link
              to="/"
              className="btn col-6 col-md-2 mt-3 text-white"
              style={{ backgroundColor: "#20c997" }}
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentResponse;
