import { Link } from 'react-router-dom';
import styles from './start-button.module.css';
export const StartButton = () => {
	return (
		<Link to={'/loving'}>

				<span className={styles.start}>start!</span>

		</Link>
	);
};
