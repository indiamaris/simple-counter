
import styles from './total.module.css';
export const Total = ({ value}) => {
   return( <div className={styles.totalContainer}> <div data-testid="total-value" className={styles.total}>{value}</div></div>)
}