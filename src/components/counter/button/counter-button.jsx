import styles from "./counter-button.module.css";

export function CounterButton({ handleClick, label }) {
  return (
    <div
      data-testid="counter-button"
      className={styles.btn}
      onClick={handleClick}
    >
      {label}
    </div>
  );
}
