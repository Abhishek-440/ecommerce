import { combineReducers } from "redux";
import incomes from "./IncomeReducer";
import expenseReducer from "./ExpenseReducer";
import LoginReducer from "./LoginReducer";

const rootReducer = combineReducers({
  incomes,
  expense: expenseReducer,
  login: LoginReducer,
});

export default rootReducer;
