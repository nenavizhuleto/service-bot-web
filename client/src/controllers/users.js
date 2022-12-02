import { api } from '../api';

export const get_users = async () => {
	const { data: users } = await api.get('/users');
	return users;
};
export const get_user = async (id) => {
	const { data: user } = await api.get(`/users/${id}`);
	return user;
};
export const create_user = async (user) => {
	const { data: _user } = await api.post('/users', user);
	return _user;
};
export const update_user = async (user) => {
	const { data: _user } = await api.patch(`/users/${user.id}`, user);
	return _user;
};
