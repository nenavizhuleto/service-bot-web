import { createContext, useState } from 'react';
import { get_orders_by_user } from '../controllers/orders';

const ordersSchema = {
	orders: [],
	getOrders: () => {},
};

export const useOrdersState = () => {
	const [orders, setOrders] = useState(ordersSchema);

	const setUserId = (user_id) => {
		setOrders({
			...orders,
			getOrders: async () => {
				setOrders({ ...orders, orders: await get_orders_by_user(user_id) });
			},
		});
	};

	return [orders, setOrders, setUserId];
};

export const OrdersContext = createContext(ordersSchema);
