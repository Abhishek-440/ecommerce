import { axios } from "../../utils";

export const fetchExpenses = async () => {
  const url = "/api/expense";
  const res = await axios.get(url);
  return res.data;
};

export const createExpense = async (payload) => {
  const url = "/api/expense";
  const res = await axios.post(url, { ...payload });
  return res.data;
};

export const updateExpense = async (payload) => {
  // console.log(payload);
  const { id, ...others } = payload;
  const url = `/api/expense/${id}`;
  const res = await axios.put(url, { ...others });
  return res.data;
};

export const deleteExpense = async (id) => {
  const url = `/api/expense/${id}`;
  const res = await axios.delete(url);
  return res.data;
};

export const fetchExpenseById = async (payload) => {
  const { id, ...others } = payload;
  const url = `api/expense/${id}`;
  const res = await axios.get(url, { ...others });
  return res.data;
};
