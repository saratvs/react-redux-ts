import { ActionTypes_Enum as Types } from "../action-types/index";
interface DepositAction {
  type: Types.DEPOSIT;
  payload: number;
}
interface WithdrawAction {
  type: Types.WITHDRAW;
  payload: number;
}
interface BankruptAction {
  type: Types.BANKRUPT;
}

export type Action = DepositAction | WithdrawAction | BankruptAction;
