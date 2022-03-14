import { combineReducers } from "redux";
import incomes from "./incomeReducer";
import expenseReducer from "./expenseReducer";
const rootReducer = combineReducers({
  incomes,
  expense: expenseReducer,
});

export default rootReducer;
