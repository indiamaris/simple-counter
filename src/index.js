/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './components/counter/counter';
import Home from './pages/home/home';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
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

