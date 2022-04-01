import {
  CREATE_INCOME,
  RETRIEVE_INCOME,
  UPDATE_INCOME,
  DELETE_INCOME,
} from "./actionTypes.js";

import {
  createIncome,
  deleteIncome,
  fetchIncome,
  updateIncome,
  updateUser,
} from "./api";

import {
  createExpense,
  deleteExpense,
  fetchExpenses,
  updateExpense,
} from "./api";

import { fetchUser, deleteUser } from "./api";

import { axios } from "../../utils";

//Login

export const loadlogin = () => ({
  type: "login",
  payload: true,
});

export const loadlogout = () => ({
  type: "logOut",
  payload: false,
});

export const Loginn = (loginData) => {
  return async function (dispatch) {
    const postData = {
      email: loginData.email,
      password: loginData.password,
    };

    const res = await axios.post(`/api/auth`, postData);

    if (res.status === 200) {
      localStorage.setItem("token", res.data?.token);

      dispatch(loadlogin());
    }
  };
};

export const LogOutt = () => {
  return async function (dispatch) {
    localStorage.removeItem("token");
    dispatch(loadlogout());
  };
};

//Income

export const createNewIncome = (incomeData) => async (dispatch) => {
  try {
    const res = await createIncome({ ...incomeData });

    dispatch({
      type: CREATE_INCOME,
      payload: res.incomes,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveIncome = () => async (dispatch) => {
  try {
    const res = await fetchIncome();
    dispatch({
      type: RETRIEVE_INCOME,
      payload: res.incomes,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateIncomeCardFunc = (data) => async (dispatch) => {
  try {
    const res = await updateIncome(data);
    dispatch({
      type: UPDATE_INCOME,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const removeIncome = (id) => async (dispatch) => {
  try {
    await deleteIncome(id);
    dispatch({
      type: DELETE_INCOME,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

//Expense

export const expenseAdded = (expense) => ({
  type: "expenses/expenseAdded",
  payload: expense,
});

export const expensesLoaded = (expense) => ({
  type: "expenses/expensesLoaded",
  payload: expense,
});

export const expenseUpdated = (payload) => ({
  type: "expenses/expensesUpdated",
  payload,
});

export const expenseDeleted = (expenseId) => ({
  type: "expenses/expensesDeleted",
  payload: expenseId,
});

export const setLoading = (payload) => ({
  type: "expenses/setLoading",
  payload,
});

export function handleFetchExpenses() {
  return async function handleFetchData(dispatch) {
    dispatch(setLoading(true));
    const response = await fetchExpenses();
    dispatch(
      expensesLoaded(
        response?.expenses.map((item) => ({
          ...item,
        }))
      )
    );
  };
}

export function saveNewExpense(data) {
  return async function saveNewExpenseThunk(dispatch) {
    const newExpense = data;
    console.log(data);
    const response = await createExpense({
      ...newExpense,
      created_at: new Date(),
      updated_at: new Date(),
    });
    dispatch(
      expenseAdded({
        ...response.expense,
      })
    );
  };
}

export function updateOldExpense(payload) {
  return async function (dispatch) {
    const response = await updateExpense(payload);
    dispatch(
      expenseUpdated({
        ...response.expenses,
      })
    );
  };
}

export function removeExpense(id) {
  return async function (dispatch) {
    const response = await deleteExpense(id);
    dispatch(expenseDeleted(response.expense));
  };
}

// Users List

export const usersFetch = (users) => ({
  type: "users/usersFetch",
  payload: users,
});

export const usersDeleted = (userId) => ({
  type: "users/usersDeleted",
  payload: userId,
});

export const usersUpdated = (payload) => ({
  type: "users/usersUpdated",
  payload,
});

export function handleFetchUsers() {
  return async function (dispatch) {
    const response = await fetchUser();
    dispatch(
      usersFetch(
        response?.users.map((item) => ({
          ...item,
        }))
      )
    );
  };
}

export function removeUser(id) {
  return async function (dispatch) {
    const response = await deleteUser(id);
    dispatch(usersDeleted(response.user));
  };
}

export function updateOldUser(payload) {
  return async function (dispatch) {
    const response = await updateUser(payload);
    dispatch(
      usersUpdated({
        ...response.users,
      })
    );
  };
}
