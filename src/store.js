import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Containers/ecommerce/reducerIndex";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(persistedReducer, composedEnhancer);

const Persistor = persistStore(store);

export { Persistor };
export default store;
