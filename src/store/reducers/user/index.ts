import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userReducerType } from "./types";

const initialState: userReducerType = {
  user_name: null,
};

export const userReducer = createSlice({
  name: "@userReducer",
  initialState,
  reducers: {
    setUserName(state, { payload }: PayloadAction<{ name: string }>) {
      state.phone = payload.name;
    },

    clear: () => {
      return initialState;
    },
  },
});
