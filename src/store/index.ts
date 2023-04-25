import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/user";
import { uiReducer } from "./reducers/ui";


const reducer = combineReducers({
  uiReducer: uiReducer.reducer,
  userReducer: userReducer.reducer,
});
export const store = configureStore({
  reducer,
});

export type StateType = ReturnType<typeof reducer>;