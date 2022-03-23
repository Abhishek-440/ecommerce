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

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    const statusCode = error.response ? error.response.status : null;
    // const { errorTitle } = getErrors(error);

    if (Number(statusCode) === 401) {
      // store.dispatch({ type: logout });
      console.log(statusCode);
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = "http://localhost:3005";

export default axios;
