import React, { useState, useEffect } from 'react';
import { get_users } from './controllers/users';

const App = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		get_users().then((users) => {
			setUsers(users);
			console.log(users);
		});
	}, []);

	return <div>App</div>;
};

export default App;
