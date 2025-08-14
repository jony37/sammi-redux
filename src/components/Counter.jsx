
import { useDispatch } from "react-redux";
import { minusCounter, plusCounter, resetCounter } from "../reducers/CountSlice";

const Counter = () => {
  const despatch = useDispatch()
  return (
    <div className="btn-group">
      <button className="btn btn-success" onClick={() => despatch(plusCounter())}>Plus</button>
      <button className="btn btn-secondary" onClick={() => despatch(minusCounter())}>Minus</button>
      <button className="btn btn-danger"onClick={() => despatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default Counter;
