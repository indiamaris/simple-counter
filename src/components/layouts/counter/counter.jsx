/** @format */
import './counter.css';
import { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const handleIncremet = () => {
		setCounter(counter + 1);
	};
	const handleDecrement = () => {
		setCounter(counter - 1);
	};

	return (
		<div className='counter_page'>
			<div className='spacing'>
				<div>
					<div
						className='btn'
						onClick={handleIncremet}>
						+1{' '}
					</div>{' '}
				</div>
			</div>

			<div className='spacing D'>
				<div>
					<div className='counter_name '> {counter}</div>
				</div>
			</div>

			<div className='spacing'>
				<div>
					<div
						className='btn'
						onClick={handleDecrement}>
						-1
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;

