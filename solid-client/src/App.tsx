import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import Header from './components/Header';
import Home from './pages/Home';
import OrdersTable from './pages/OrdersTable';
import OrderDetails from './pages/OrderDetails';
import UserDetails from './pages/UserDetails';
import UsersTable from './pages/UsersTable';

const App: Component = () => {
	return (
		<div class='text-bg-dark vh-100'>
			<Header />
			<div class='vstack gap-3 p-3'>
				<Routes>
					<Route path='/' component={Home} />
					<Route path='/orders' component={() => <OrdersTable user={null} />} />
					<Route path='/orders/:id' component={OrderDetails} />
					<Route path='/users' component={UsersTable} />
					<Route path='/users/:id' component={UserDetails} />
			</Routes>
			</div>
		</div>
	);
};

export default App;
