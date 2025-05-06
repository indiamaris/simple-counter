/** @format */

import { Link } from 'react-router-dom';
import MainInfo from '../mainInfo/mainInfo';
import styles from './header.module.css';
const Header = () => {
	return (
		<div className=''> 
		<Link to={'/'}>
		<h1 className={styles.header}> LOVEMETHER</h1>
			</Link>
			<span className={styles.mainInfo}>
				<MainInfo/>
			</span>
		</div>
	);
};

export default Header;

