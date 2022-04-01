import axios from "axios";
// import { apiUrl } from "./index";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    config.headers.authorization = `Bearer ${token}`;

    config.headers.put["Content-Type"] = `multipart/form-data`;

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

// eslint-disable-next-line no-undef
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default axios;
