import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { modalWindowTemplateType } from "./types";
import { StateType } from "../../index";

const initialState: {
  modal: modalWindowTemplateType | null;
  isFiltering: boolean;
  timeMinute: string;
} = {
  isFiltering: false,
  modal: null,
  timeMinute: "30",
};

export const uiReducer = createSlice({
  name: "@uiReducer",
  initialState: initialState,
  reducers: {
    setModal: (state, { payload }: PayloadAction<modalWindowTemplateType | null>) => {
      state.modal = payload;
    },
    setIsFiltering(
      state,
      {
        payload,
      }: PayloadAction<{
        state?: boolean;
      }>,
    ) {
      if (payload.state !== undefined) {
        state.isFiltering = payload.state;
      } else {
        state.isFiltering = !state.isFiltering;
      }
    },
    setTime: (state, { payload }) => {
      state.timeMinute = payload;
    },

    clear: () => initialState,
  },
});

export const uiReducerSelectors = {
  getModal: (state: StateType) => state.uiReducer.modal,
  getIsFilter: (state: StateType) => state.uiReducer.isFiltering,
  setTime: (state: StateType) => state.uiReducer.timeMinute,
};
