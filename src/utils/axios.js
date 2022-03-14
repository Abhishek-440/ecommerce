import axios from "axios";
// import { apiUrl } from "./index";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    config.headers.authorization = `Bearer ${token}`;

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = "http://localhost:3005";

export default axios;
