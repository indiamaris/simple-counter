/** @format */
import { CounterButton } from "./button/counter-button";
import styles from "./counter.module.css";
import { Total } from "./total/total";

function CounterUI({ total, onIncrement, onDecrement }) {
  return (
    <div className={styles.counterPage} data-testid="counter-page">
      <Total value={total} data-testid="total-value" />
      <div className={styles.counterButtons}>
        <CounterButton
          label="+1"
          handleClick={onIncrement}
          data-testid="increment-button"
        />
        <CounterButton
          label="-1"
          handleClick={onDecrement}
          data-testid="decrement-button"
        />
      </div>
    </div>
  );
}

export default CounterUI;
