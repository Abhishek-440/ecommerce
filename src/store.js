/* import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {},
});
 */

import { createStore } from "redux";
import rootReducer from "./Containers/ecommerce/reducerIndex";
const initialState = {};
const store = createStore(rootReducer, initialState);

export default store;
