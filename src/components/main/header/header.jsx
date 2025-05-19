/** @format */

import { Link } from 'react-router-dom';

import styles from './header.module.css';
const Header = () => {
	return (
		<div className=''> 
		<Link to={'/'}>
		<h1 className={styles.header}> Simple Counter</h1>
			</Link>
		</div>
	);
};

export default Header;

