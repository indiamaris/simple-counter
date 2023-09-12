/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/home';
import App from './App';
import Counter from './components/layouts/counter/counter';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <App /> */}
			<Routes>
				<Route
					path='/'
					element={<Home />}>
					<Route
						path='/loving'
						element={<Counter />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

