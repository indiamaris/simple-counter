/** @format */
import { useState } from 'react';
import { CounterButton } from '../button/counter-button';
import { Total } from '../total/total';
import styles from './counter.module.css';

const Counter = () => {
	const [total, setTotal] = useState(0);

	const handleIncremet = () => {
		console.log(total)
		setTotal(total + 1);
	};
	const handleDecrement = () => {
		setTotal(total - 1);
	};

	return (
		<div className={styles.counterPage}>		
			<Total value={total} />	
					<div className={styles.counterButtons}>	
					<CounterButton label={'+1'} handleClick={handleIncremet}/>
			<CounterButton label={'-1'} handleClick={handleDecrement} />		
	</div>
		</div>
	);
};

export default Counter;

