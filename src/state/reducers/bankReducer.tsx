import { Action } from "../actions/index";
import { ActionTypes_Enum as Types } from "../action-types/index";

const initialState = 0;
const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case Types.DEPOSIT:
      return state + action.payload;
    case Types.WITHDRAW:
      return state - action.payload;
    case Types.BANKRUPT:
      return 0;
    default:
      return state;
  }
};
export default reducer;
