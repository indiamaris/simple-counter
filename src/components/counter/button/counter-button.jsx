import styles from './counter-button.module.css'

export const CounterButton = ({ handleClick, label }) =>
{
    return (<div
						className={styles.btn}
						onClick={handleClick}>
						{label}
					</div>)
}