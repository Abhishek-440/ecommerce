import axios from "../../utils";

export const createExpense = (payload) => {
  const url = "/api/expense";
  return axios
    .post(url, {
      ...payload,
    })
    .then((res) => res.data);
};
