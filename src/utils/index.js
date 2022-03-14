import axios from "./axios";
const apiUrl = "http://localhost:3005";

export const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

export { axios, apiUrl };
