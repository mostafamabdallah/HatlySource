import React from "react";
import { useState, useEffect } from "react";
import Product from "../shop/Product";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../../API/product";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/cartRedux";
import { motion } from "framer-motion";
import ReactImageMagnify from "react-image-magnify";
import { storeData } from "../../../redux/recentlyRedux";

const SingleProduct = () => {
  const recentlyViewed = useSelector((state) => state.recently);
  const [img, setimgs] = useState();
  const [product, setProduct] = useState({});
  const [productImgs, setProductImgs] = useState([]);
  const [productCategoey, setProductCategoey] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [singleProductQuantity, setSingleProductQuantity] = useState(1);
  const [addCartDisable, setAddCartDisable] = useState({
    on: false,
    discrption: "ADD TO CART",
  });

  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleClick = (e) => {
    setAddCartDisable({ on: true, discrption: "PRODUCT ON THE CART" });
    dispatch(
      addProduct({
        product,
        price: product.price,
        singleProductQuantity: singleProductQuantity,
      })
    );
  };

  const getProduct = async () => {
    try {
      const res = await fetchProduct.get(`/${id}`);
      setProduct(res.data);
      setimgs(res.data.thumbnail);
      setProductImgs(res.data.images);
      setProductCategoey(res.data.category);
      cart.products.map((item, i) => {
        if (item.id == res.data.id) {
          setAddCartDisable({ on: true, discrption: "PRODUCT ON THE CART" });
        }
      });
      var recentlyData;
      if (localStorage.getItem("product") == null) {
        localStorage.setItem("product", JSON.stringify([res.data]));
      } else {
        recentlyData = JSON.parse(localStorage.getItem("product"));
        if (recentlyData.id) {
          recentlyData = [...recentlyData, res.data];
        } else {
          recentlyData.map((el, i) => {
            if (el.id == res.data.id) {
              return recentlyData.splice(i, 1);
            }
          });
          recentlyData = [...recentlyData, res.data];
        }
        localStorage.setItem("product", JSON.stringify(recentlyData));
      }
      dispatch(
        storeData({
          recentlyData,
        })
      );
    } catch (er) {}
  };

  const getRelatedProducts = async (productCategoey) => {
    try {
      var res;
      res = await fetchProduct.get(`/category/${productCategoey}`);
      setRelatedProducts(res.data.products);
    } catch (er) {}
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  useEffect(() => {
    getRelatedProducts(productCategoey);
  }, [productCategoey]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="pb-5"
      style={{ backgroundColor: "#ebeef5" ,paddingTop:'70px' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <motion.div
            initial={{ y: "-500px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 1,
              repeatDelay: 1,
            }}
            className="col-11 col-lg me-md-3 p-0"
          >
            <div className="row justify-content-center">
              <div className="col-2">
                {productImgs.map((image, i) => {
                  return (
                    <div key={i} className="col-12 mt-2 col-md-12">
                      <img
                        onClick={(e) => {
                          setimgs(e.target.getAttribute("src"));
                        }}
                        src={image}
                        style={{ width: "100%", cursor: "pointer" }}
                      ></img>
                    </div>
                  );
                })}
              </div>
              <div className="col-10 col-md-10 d-flext justify-content-center js">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: img,
                    },
                    largeImage: {
                      src: img,
                      width: 1000,
                      height: 1000,
                    },
                    enlargedImageContainerDimensions: {
                      width: "50%",
                      height: "50%",
                    },
                    enlargedImagePosition: "over",
                  }}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: "500px" }}
            animate={{ y: "0px" }}
            exit={{ x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
            className="col-11 col-lg-5 mt-4 mt-lg-0 d-flex align-items-start p-0"
          >
            <div
              className="p-4 col-12"
              style={{
                backgroundColor: "white",
                boxShadow: "0 13px 86px rgb(0 0 0 / 10%)",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="col-12 col-md-12"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="row"
                  style={{ borderBottom: "1px solid #ededed" }}
                >
                  <h4
                    className=""
                    style={{
                      width: "90%",
                      fontSize: "1.25rem",
                      color: "#282828",
                      fontWeight: "400",
                    }}
                  >
                    {product.title}
                  </h4>

                  <p>
                    Category:{" "}
                    <a
                      style={{ color: "#264996", textDecoration: "none" }}
                      href="#"
                    >
                      {product.category}
                    </a>
                  </p>
                  <p className="text-success fw-bold">In Stock</p>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <button
                      className="btn btn-primary"
                      disabled={addCartDisable.on}
                      onClick={() => {
                        if (singleProductQuantity > 1) {
                          setSingleProductQuantity(singleProductQuantity - 1);
                        }
                      }}
                      style={{
                        boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
                        color: "white",
                      }}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <i className="p-3">{singleProductQuantity}</i>
                    <button
                      className="btn btn-primary"
                      disabled={addCartDisable.on}
                      onClick={() => {
                        if (singleProductQuantity > 0) {
                          setSingleProductQuantity(singleProductQuantity + 1);
                        }
                      }}
                      style={{
                        boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
                        color: "white",
                      }}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col">
                    <h4>EGP {product.price}</h4>
                    <button
                      disabled={addCartDisable.on}
                      className="btn btn-primary p-2 mt-4"
                      style={{ width: "100%" }}
                      onClick={handleClick}
                    >
                      <span>
                        <i className="fa fa-cart-plus"></i>
                      </span>{" "}
                      {addCartDisable.discrption}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="row justify-content-center">
          <motion.div
            initial={{ x: "-500px", opacity: 0 }}
            animate={{ x: "0px", opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="col-11 col-md-6 me-2 mt-3 p-4"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <h4 className="pb-2" style={{ borderBottom: "1px solid #ededed" }}>
              KEY FEATURES
            </h4>
            <ul>
              <li>Intel® Core™ i3-1125G4 CPU</li>
              <li>4GB RAM, 256GB SSD</li>
              <li>
                14" diagonal, FHD (1920 x 1080), multitouch-enabled Display
                Intel Iris Xe Graphics
              </li>
              <li>3-cell, 43 Wh Li-ion polymer Battery, OS: Windows 10</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: "500px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="col-11 col-md ms-2 mt-3 p-4"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <h4 className="pb-2" style={{ borderBottom: "1px solid #ededed" }}>
              SPECIFICATION
            </h4>
            <ul>
              <li>SKU: HP431CL16Q2SYNAFAMZ</li>
              <li>Model: 40M23EA</li>
              <li>Size (L x W x H cm): 32.2 x 20.9 x 1.99 cm</li>
              <li>Color: Natural Silver Main</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="row p-4 mt-3 "
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
            borderRadius: "5px",
            alignItems: "flex-end",
          }}
        >
          <h4 className="pb-2" style={{ borderBottom: "1px solid #ededed" }}>
            RELATED PRODUCTS
          </h4>
          {relatedProducts.map((data, i) => {
            return (
              <Product
                grid="col-6 col-sm-6 col-md-4 col-lg-2 mb-5"
                key={i}
                data={data}
              ></Product>
            );
          })}
        </motion.div>
        {recentlyViewed.products == null ? (
          ""
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="row p-4 mt-3 "
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
              alignItems: "flex-end",
            }}
          >
            <h4
              className="pb-2"
              style={{
                borderBottom: "1px solid #ededed",
                textTransform: "uppercase",
              }}
            >
              recently viewed
            </h4>
            {recentlyViewed.products
              .map((data, i) => {
                if (i < 6) {
                  return (
                    <Product
                      grid="col-6 col-sm-6 col-md-4 col-lg-2 mb-5"
                      key={i}
                      data={data}
                    ></Product>
                  );
                }
              })
              .reverse()}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SingleProduct;
