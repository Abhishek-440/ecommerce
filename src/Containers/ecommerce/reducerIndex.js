import { combineReducers } from "redux";
import incomes from "./IncomeReducer";
import expenseReducer from "./ExpenseReducer";
const rootReducer = combineReducers({
  incomes,
  expense: expenseReducer,
});

export default rootReducer;
