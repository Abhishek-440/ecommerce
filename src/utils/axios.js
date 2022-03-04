import axios from "axios";
import { apiUrl } from "./index";

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);

    const allowedOrigins = [apiUrl];

    const token = localStorage.getItem("token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
