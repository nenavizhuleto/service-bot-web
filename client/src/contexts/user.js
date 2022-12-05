import { createContext, useState } from 'react';

const userSchema = {
	loggedIn: false,
	id: '584061766',
	username: 'guest',
	Login: (login, password) => {
		console.log('login');
	},
};

export const useUserState = () => {
	const [user, setUser] = useState(userSchema);

	return [user, setUser];
};

export const UserContext = createContext(userSchema);
