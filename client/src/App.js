import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { get_users } from './controllers/users';

// Components
import Home from './components/home/Home';
import Service from './components/service/Service';
import Orders from './components/service/Orders';
import Users from './components/service/Users';

// Contexts
import { UserContext, useUserState } from './contexts/user';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const [user, setUser] = useUserState();
	return (
		<BrowserRouter>
			<UserContext.Provider value={user}>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/service' element={<Service />} />
					<Route path='/service/orders' element={<Orders />} />
					<Route path='/service/users' element={<Users />} />
				</Routes>
			</UserContext.Provider>
		</BrowserRouter>
	);
};

export default App;
