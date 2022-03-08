import { combineReducers } from "redux";

import expenseReducer from "./Containers/ecommerce/reducer";

const rootReducer = combineReducers({
  expense: expenseReducer,
});

export default rootReducer;
