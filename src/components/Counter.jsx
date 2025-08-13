import AddCount from "./AddCounter";

const Counter = ({ plusHandler, minusHandler, resetHandler }) => {
  return (
    <div className="btn-group">
        <AddCount plusHandler={plusHandler}/> 
      <button className="btn btn-secondary" onClick={minusHandler}>
        Minus
      </button>
      <button className="btn btn-danger" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};



export default Counter;
