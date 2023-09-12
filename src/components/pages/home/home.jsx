/** @format */
import './home.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../../layouts/header/header';
import SubHeader from '../../layouts/subheader/subheader';

const Home = () => {
	return (
		<div className='containerHeader'>
			<div className='header'>
				<Header />
			</div>
			<SubHeader />

			<div className='left_page'>
				<Link to={'/loving'}>
					<span className='start'> Let's Start!</span>
				</Link>
			</div>
			<div className='pagealign'>
				<div className='counter_page'>
					<div className='outlet_counter'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

