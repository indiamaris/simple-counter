import styles from "./info.module.css";

function Info() {
  return (
    <div data-testid="info" className={styles.info}>
      we are here to help you counting
      <br /> the things that counts.
      <br />
    </div>
  );
}

export default Info;
