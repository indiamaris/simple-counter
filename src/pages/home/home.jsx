/** @format */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import { StartButton } from '../../components/start-button/start-button';
import './home.css';
const Home = () => {
	return (
		<div className='homeContainer'>
			<div className="main">
				<div className='headerContainer'>
					<Header />
					<StartButton />
				</div></div>
			<div className="counter">				<Outlet /></div>
		</div>
	);
};

export default Home;

