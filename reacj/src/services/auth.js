import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const auth = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
        
    console.log(res);
    callback(true, res.data.token) // Update this line to pass res.data directly
    })
    .catch((error) => {
        console.log(error);
        callback(false, error)});
};

export const getUsernem = (token) => {
    const decoded = jwtDecode(token);
    return decoded.user;
    // console.log(decoded);
}