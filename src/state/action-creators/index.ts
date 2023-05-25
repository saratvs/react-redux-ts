import { ActionTypes_Enum as Types } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: Types.DEPOSIT, payload: amount });
  };
};
export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: Types.WITHDRAW, payload: amount });
  };
};
export const bankruptMoney = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: Types.BANKRUPT });
  };
};
