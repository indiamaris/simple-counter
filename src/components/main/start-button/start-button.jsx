import { Link } from "react-router-dom";
import styles from "./start-button.module.css";

export function StartButton() {
  return (
    <Link to="/loving">
      <span data-testid="start-button" className={styles.start}>
        start!
      </span>
    </Link>
  );
}
