import {
  CREATE_INCOME,
  RETRIEVE_INCOME,
  UPDATE_INCOME,
  DELETE_INCOME,
} from "./actionTypes.js";
const initialState = [];

function incomeReducer(incomes = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_INCOME:
      return [...incomes, payload];

    case RETRIEVE_INCOME:
      return payload;

    case UPDATE_INCOME:
      return incomes.map((income) => {
        if (income.id === payload.id) {
          return {
            ...income,
            ...payload,
          };
        } else {
          return income;
        }
      });

    case DELETE_INCOME:
      return incomes.filter(({ id }) => id !== payload.id);

    default:
      return incomes;
  }
}
export default incomeReducer;
