import axios from "../../utils/axios";
// import { handleFetchExpenses } from "./action";

//Expenses

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

//Income

export const fetchIncome = async () => {
  const url = "/api/income";
  const res = await axios.get(url);
  return res.data;
};

export const createIncome = async (payload) => {
  const url = "/api/income";
  const res = await axios.post(url, { ...payload });
  return res.data;
};

export const updateIncome = async (payload) => {
  const { id, ...others } = payload;
  const url = `/api/income/${id}`;
  const res = await axios.put(url, { ...others });
  return res.data;
};

export const deleteIncome = async (id) => {
  console.log(id);
  const url = `/api/income/${id}`;
  const res = await axios.delete(url);
  return res.data;
};

export const fetchIncomeById = async (payload) => {
  const { id, ...others } = payload;
  const url = `api/income/${id}`;
  const res = await axios.get(url, { ...others });
  return res.data;
};
