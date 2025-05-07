
import styles from './total.module.css';
export const Total = ({ value}) => {
   return( <div className={styles.totalContainer}> <div className={styles.total}>{value}</div></div>)
}