import { api } from '../api';

export const get_orders = async () => {
	const { data: orders } = await api.get('/orders');
	return orders;
};

export const get_orders_by_user = async (user_id) => {
	console.log(user_id);
	const { data: orders } = await api.get(`/orders/user/${user_id}`);

	return orders;
};

export const get_order = async (id) => {
	const { data: order } = await api.get(`/orders/${id}`);
	return order;
};
export const create_order = async (order) => {
	const { data: _order } = await api.post('/orders', order);
	return _order;
};
export const update_order = async (order) => {
	const { data: _order } = await api.patch(`/orders/${order._id}`, order);
	console.log(_order);
	return _order;
};
