import axios from "axios";

export const getProduct = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((respone) => callback(respone.data))
    .catch((err) => console.log(err));
};
export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((respone) => callback(respone.data))
    .catch((err) => console.log(err));
};
