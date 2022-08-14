import React from "react";
import { useState, useEffect } from "react";
import { fetchProduct } from "../../../API/product";
import Product from "./Product";
import { motion } from "framer-motion";
import Loading from "../../Loading";

const Shop = () => {
  const [selecterdCategory, setSelecterdCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(12);

  const [items, setItems] = useState([]);
  // const [filterdProducts, setFilterdProducts] = useState([]);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  var pageNumber = [];
  for (let i = 1; i <= Math.ceil(products.length / productPerPage); i++) {
    pageNumber.push(i);
  }

  const getProducts = async (selecterdCategory) => {
    try {
      var res;
      if (selecterdCategory == "") {
        setLoading(true);
        res = await fetchProduct.get();
        setProducts(res.data.products);
        setLoading(false);
      } else {
        setLoading(true);
        res = await fetchProduct.get(`/category/${selecterdCategory}`);
        setProducts(res.data.products);
        setLoading(false);
      }
      setProducts(res.data.products);
    } catch (er) {}
  };

  const getCategories = async () => {
    try {
      const res = await fetchProduct.get("/categories");
      setCategories(res.data);
    } catch (er) {}
  };

  useEffect(() => {
    getProducts(selecterdCategory);
    getCategories();
  }, [selecterdCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ backgroundColor: "#ebeef5" ,paddingTop:'60px' }}
    >
      <div className="container pt-5 pb-5">
        <div className="row">
          <div
            className="d-none d-md-block col-md-3 p-3"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <div className="row justify-content-between">
              <h4
                className="col"
                style={{ padding: "10px", display: "inline-block" }}
              >
                Categories
              </h4>
              <i
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
                className="col fa fa-minus"
                aria-hidden="true"
              ></i>
            </div>
            {categories.map((category, i) => {
              if (i < 2) {
                return (
                  <div key={i}>
                    <div className="row justify-content-between">
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            value={category}
                            type="radio"
                            name="category"
                            onChange={(e) => {
                              setCurrentPage(1);
                              setSelecterdCategory(e.target.value);
                            }}
                          />
                          <label className="form-check-label">{category}</label>
                        </div>
                      </div>
                      <span
                        className="col-3"
                        style={{
                          color: "#aaa",
                          display: "flex",
                          justifyContent: "end",
                        }}
                      >
                        ({5})
                      </span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div
            className="col ms-3 p-3"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <div
              className="row justify-content-between mb-3"
              style={{ borderBottom: "1px solid #ededed" }}
            >
              <div className="col-3">
                <h4>Prodcuts</h4>
              </div>
              <div className="col-3 mb-2">
                <select
                  className="form-select"
                  onChange={(e) => {
                    if (e.target.value == 2) {
                      setProducts([
                        ...products.sort((a, b) => {
                          if (a.price < b.price) return 1;
                          if (a.price > b.price) return -1;
                          return 0;
                        }),
                      ]);
                    } else if (e.target.value == 3) {
                      setProducts([
                        ...products.sort((a, b) => {
                          if (a.price < b.price) return -1;
                          if (a.price > b.price) return 1;
                          return 0;
                        }),
                      ]);
                    }
                  }}
                >
                  <option defaultValue disabled hidden>
                    Sort by
                  </option>
                  <option value="1">Popularity</option>
                  <option value="2">Price: High to Low</option>
                  <option value="3">Price: Low to High</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-end">
              <div
                className="col-1"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <i
                  className="fa fa-th-large"
                  style={{ fontSize: "20px", color: "#074282" }}
                ></i>
              </div>
            </div>
            <div className="row" style={{ alignItems: "flex-end" }}>
              {!loading ? (
                currentProducts.map((product, i) => {
                  return (
                    <Product
                      grid="col-6 col-sm-4 col-md-4 col-lg-3 mb-5"
                      key={i}
                      data={product}
                    ></Product>
                  );
                })
              ) : (
                <Loading grid="col-12 col-sm-12 col-md-12 col-lg-4 mb-5 bg-white p-3"></Loading>
              )}
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {pageNumber.map((number, i) => {
                  return (
                    <li className="page-item" key={i}>
                      <a
                        className="page-link"
                        href="#"
                        value={number}
                        onClick={(e) => {
                          const number = e.target.getAttribute("value");
                          setCurrentPage(number);
                        }}
                      >
                        {number}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;
