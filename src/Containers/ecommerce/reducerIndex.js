import { combineReducers } from "redux";
import incomes from "./IncomeReducer";
import expenseReducer from "./ExpenseReducer";
import LoginReducer from "./LoginReducer";
import usersReducer from "./UsersReducer";

const rootReducer = combineReducers({
  incomes,
  expense: expenseReducer,
  login: LoginReducer,
  user: usersReducer,
});

export default rootReducer;
