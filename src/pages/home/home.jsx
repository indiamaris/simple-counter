/** @format */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import './home.css';
const Home = () => {
	return (
		<div className='homeContainer'>
			<div className="main">
				<div className='headerContainer'>
					<Header />
					<Link to={'/loving'}>
					<span className='start'>start!</span>
				</Link></div></div>
			<div className="counter">				<Outlet /></div>
		</div>
	);
};

export default Home;

