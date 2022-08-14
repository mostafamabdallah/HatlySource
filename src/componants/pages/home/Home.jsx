import React from "react";
import Loading from "../../Loading";
import styled from "styled-components";
import phonesImage from "../../../img/image0-1536x1152.png";
import wahtchImage from "../../../img/image1-1536x1152.png";
import chargerImage from "../../../img/image2-1536x1152.png";
import headphonesImage from "../../../img/image3-1536x1152.png";
import caseImage from "../../../img/image4-1536x1152.png";
import powerBanksImage from "../../../img/image5-1536x1152.png";

import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import ImageSlider from "../../ImageSlider";
import { useState, useEffect } from "react";
import { fetchProduct } from "../../../API/product";
import Product from "../shop/ProductHome";
import sliderImage2 from "../../../img/Galaxy-S20FE-Color-KV_PC_001.jpg";
import sliderImage3 from "../../../img/S20-Ultra_Black-Gray_Family_PC_img.jpg";
import sliderImage4 from "../../../img/S20-20_P_Pink-Blue_Family_PC_img.jpg";
import { useInView } from "react-intersection-observer";
import labtop from "../../../img/MacBook-Pro-2021.jpg";
import CategoryDevider from "./CategoryDevider";
import Category from "./Category";

const categoryArray = [
  {
    name: "Phones",
    img: phonesImage,
  },
  {
    name: "Smart Watches",
    img: wahtchImage,
  },
  {
    name: "Chargers",
    img: chargerImage,
  },
  {
    name: "Headphones",
    img: headphonesImage,
  },
  {
    name: "Power Banks",
    img: powerBanksImage,
  },
  {
    name: "Cases",
    img: caseImage,
  },
];

const slider1 = [sliderImage2, sliderImage3, sliderImage4];
const slider2 = [sliderImage4, sliderImage2, sliderImage3];

const MainSection = styled.section`
  background-color: #ebeef5;
`;

const Home = () => {
  const { ref, inView } = useInView({
    rootMargin: "250px ",
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 5,
          bounce: 0.3,
        },
      });
    }
    // if (!inView) {
    //   animation.start({
    //     opacity: 0,
    //   });
    // }
  }, [inView]);

  const [productsSmart, setProductsSmart] = useState([]);
  const [productsLab, setProductsLab] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState();
  const [selecterdCategory, setSelecterdCategory] = useState("");

  const getProducts = async (selecterdCategory) => {
    try {
      var res;
      setLoading(true);
      res = await fetchProduct.get(`/category/smartphones`);
      setProductsSmart(res.data.products);
      setLoading(false);
    } catch (er) {}
  };

  const getProductsLaptops = async (selecterdCategory) => {
    try {
      var res;
      setLoading(true);
      res = await fetchProduct.get(`/category/laptops`);
      setProductsLab(res.data.products);
      setLoading(false);
    } catch (er) {}
  };

  useEffect(() => {
    getProducts(selecterdCategory);
    getProductsLaptops(selecterdCategory);
  }, [selecterdCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MainSection 
        style={{
          backgroundImage: "linear-gradient(180deg, #ebeef5, #384a8c)",
          position: "relative",
          paddingTop:'60px' 
        }}
      >
        <div className="container" style={{ zIndex: "1" }}>
          <div className="row pt-4">
            <motion.div
              initial={{ y: '-500px' }}
              animate={{ y: '0' }}
              transition={{ duration: 1 }}
              className="col-md-12"
            >
              <div
                className="example-container "
                style={{ borderRadius: "15px" }}
              >
                <ImageSlider img={slider1} interval={3000}></ImageSlider>
              </div>
            </motion.div>
          </div>
          <div className="row align-items-center pt-sm-4 pb-5 pb-sm-5 pb-md-0 pb-md-4">
            <div className="col-md-7">
              <div
                className="row justify-content-center"
                style={{ minHeight: "25vh" }}
              >
                <motion.div
                  initial={{ x: "-600px", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    delay: 2,
                  }}
                  className="col-md-8 pt-4 pt-sm-4 pt-md-0"
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "15px",
                    }}
                    src={sliderImage2}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 2,
                  }}
                  className="col-8 col-md-4 pt-4 pt-sm-4 pt-md-0"
                  style={{ minHeight: "100%" }}
                >
                  <div
                    className="p-4 pm-0"
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderRadius: "15px",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <h3
                      className="text-center text-bold"
                      style={{ color: "#fa4385" }}
                    >
                      150+
                    </h3>
                    <p style={{ margin: "0" }} className="text-center">
                      OFFERS
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ x: "-600px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "spring",
                delay: 1,
              }}
              className="col-12 col-md-5 mt-4 mt-md-0"
            >
              <div className="example-container" style={{ overflow: "hidden" }}>
                <ImageSlider img={slider2} interval={2500}></ImageSlider>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1658931295">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </MainSection>
      <section ref={ref}>
        <div className="container pb-5">
          <motion.div
            animate={animation}
            className="row justify-content-between align-items-center"
          >
            <h3 className="pt-5 pb-5">Categories</h3>
            {categoryArray.map((category, i) => {
              return <Category key={i} category={category}></Category>;
            })}
          </motion.div>
        </div>
      </section>
      <CategoryDevider img={labtop} name="Laptop"></CategoryDevider>
      <section ref={ref}>
        <div className="container">
          <div
            className="row pt-5 justify-content-center"
            style={{ alignItems: "flex-end" }}
          >
            {!loading ? (
              productsSmart.map((product, i) => {
                return (
                  <Product
                    grid="col-5 col-sm-5 col-md-5 col-lg mb-5 p-3 productImage ms-3"
                    key={i}
                    data={product}
                  ></Product>
                );
              })
            ) : (
              <Loading grid="col-5 col-sm-5 col-md-5 col-lg-3 mb-5 bg-white p-3 productImage ms-3" />
            )}
          </div>
        </div>
      </section>
      <CategoryDevider img={sliderImage3} name="Smart Phones"></CategoryDevider>
      <section style={{ backgroundColor: "#ebeef5" }}>
        <div className="container pb-5">
          <div
            className="row pt-5 justify-content-center"
            style={{ alignItems: "flex-end" }}
          >
            {!loading ? (
              productsLab.map((product, i) => {
                return (
                  <Product
                    grid="col-5 col-sm-5 col-md-5 col-lg mb-5  p-3 productImage ms-3"
                    key={i}
                    data={product}
                  ></Product>
                );
              })
            ) : (
              <Loading grid="col-5 col-sm-5 col-md-5 col-lg mb-5  p-3 productImage ms-3" />
            )}
          </div>
        </div>
      </section>
      <CategoryDevider
        img={sliderImage4}
        name="New & Trendly"
      ></CategoryDevider>
      <section>
        <div className="container pb-5">
          <div
            className="row  align-items-center"
            style={{ minHeight: "100vh" }}
          >
            {!loading ? (
              productsLab.map((product, i) => {
                return (
                  <div className="col-6 col-md-3 col-lg ">
                    <div className="row justify-content-center">
                      <Product
                        grid="col-11 col-sm-11 col-md-11 col-lg-11 align-self-center productImage mb-5 p-3"
                        key={i}
                        data={product}
                      ></Product>
                    </div>
                  </div>
                );
              })
            ) : (
              <Loading grid="col-12 col-sm-12 col-md-12 col-lg-12 mb-5 bg-white p-3" />
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
