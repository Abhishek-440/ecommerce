import {
  createExpense,
  deleteExpense,
  fetchExpenses,
  updateExpense,
} from "./api";

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

export function handleFetchExpenses() {
  return async function handleFetchData(dispatch) {
    const response = await fetchExpenses();
    // console.log(response);
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
        ...response.expenses,
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
    dispatch(expenseDeleted(response.expenses));
  };
}
