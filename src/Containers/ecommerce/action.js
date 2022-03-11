import {
  CREATE_INCOME,
  RETRIEVE_INCOME,
  UPDATE_INCOME,
  DELETE_INCOME,
} from "./actionTypes.js";
import IncomeDataService from "./api";

export const createIncome = (title, amount, date) => async (dispatch) => {
  try {
    const res = await IncomeDataService.create({ title, amount, date });
    dispatch({
      type: CREATE_INCOME,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveIncome = () => async (dispatch) => {
  try {
    const res = await IncomeDataService.getAll();
    dispatch({
      type: RETRIEVE_INCOME,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateIncome = (id, data) => async (dispatch) => {
  try {
    const res = await IncomeDataService.update(id, data);
    dispatch({
      type: UPDATE_INCOME,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const deleteIncome = (id) => async (dispatch) => {
  try {
    await IncomeDataService.delete(id);
    dispatch({
      type: DELETE_INCOME,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
