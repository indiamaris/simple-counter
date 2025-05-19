/** @format */
import { useState } from "react";
import CounterUI from "./counter-ui";

function Counter() {
  const [total, setTotal] = useState(0);

  const handleIncrement = () => {
    setTotal((total) => total + 1);
  };

  const handleDecrement = () => {
    setTotal((total) => total - 1);
  };

  return (
    <CounterUI
      total={total}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  );
}

export default Counter;
