import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(0);

  const plusHandler = () => {
    setCount((prev) => prev + 1);
  };

  const minusHandler = () => {
    setCount((prev) => prev - 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <Counter plusHandler ={plusHandler} minusHandler ={minusHandler} resetHandler = {resetHandler}/>
    </div>
  );
};

export default App;
