/** @format */
import { useState } from 'react';
import { CounterButton } from './button/counter-button';
import styles from './counter.module.css';
import { Total } from './total/total';

const Counter = () => {
	const [total, setTotal] = useState(0);

	const handleIncremet = () => {
	setTotal((total)=>total + 1);
	};
	const handleDecrement = () => {
		setTotal((total)=>total - 1);
	};

	return (
		<div className={styles.counterPage} data-testid="counter-page">		
			<Total value={total} data-testid="total-value"/>	
			<div className={styles.counterButtons}>	
			<CounterButton label={'+1'} handleClick={handleIncremet} data-testid="increment-button"/>
			<CounterButton  label={'-1'} handleClick={handleDecrement} data-testid="decrement-button"/>		
	</div>
		</div>
	);
};

export default Counter;

