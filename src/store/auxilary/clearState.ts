import { Dispatch } from "react";
import { stateActions } from "../index";
// import { lsController } from "./localStorage";

export const clearState = () => async (dispatch: Dispatch<any>) => {
  // lsController.clearAll();
  let stateKey: keyof typeof stateActions;
  for (stateKey in stateActions) {
    dispatch(stateActions[stateKey].clear());
  }
};
