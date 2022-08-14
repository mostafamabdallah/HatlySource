import axios from "axios";

const productURL = "https://dummyjson.com/products";

export const fetchProduct = axios.create({
  baseURL: productURL,
});
