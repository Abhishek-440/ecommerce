import { axios } from "../../utils";

export const fetchExpenses = () => {
  const url = "/api/expense";
  return axios.get(url).then((res) => res.data);
};

export const createExpense = (payload) => {
  const url = "/api/expense";
  return axios.post(url, { ...payload }).then((res) => res.data);
};

export const updateExpense = (payload) => {
  const { id, ...others } = payload;
  const url = `/api/expense/${id}`;
  return axios.put(url, { ...others }).then((res) => res.data);
};

export const deleteExpense = (id) => {
  const url = `/api/expense/${id}`;
  return axios.delete(url).then((res) => res.data);
};
