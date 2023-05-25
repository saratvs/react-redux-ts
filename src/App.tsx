import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import { useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => {
    return state.bank;
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{amount ?? 0}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(253)}>Withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  );
}

export default App;
