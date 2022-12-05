import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user';
import { get_orders_by_user, update_order } from '../../controllers/orders';

import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

const Orders = () => {
	const { id, username } = useContext(UserContext);
	const [orders, setOrders] = useState([]);
	const [selectedOrders, setSelectedOrders] = useState([]);

	useEffect(() => {
		get_orders_by_user(id).then((data) => {
			setOrders(data);
		});
	}, [id]);

	const selectOrder = (order) => {
		if (selectedOrders.includes(order)) {
			setSelectedOrders((prev) => [...prev.filter((_order) => _order._id !== order._id)]);
		} else {
			setSelectedOrders((prev) => [...prev, order]);
		}
	};

	const acceptOrder = async (order) => {
		order.status = 'progress';
		setOrders((prev) => {
			return prev.map((_order) => {
				if (_order._id === order._id) {
					return order;
				}
				return _order;
			});
		});
		await update_order(order);
	};

	const declineOrder = async (order) => {
		order.status = 'declined';
		setOrders((prev) => {
			return prev.map((_order) => {
				if (_order._id === order._id) {
					return order;
				}
				return _order;
			});
		});
		await update_order(order);
	};

	return (
		<Stack>
			<Container>
				<h2>Orders of {username}</h2>
			</Container>
			<Table striped bordered hover variant='dark'>
				<thead>
					<OrderTableHeader />
				</thead>

				<tbody>
					{orders &&
						orders.map((order, index) => (
							<OrderTableRow
								key={order._id}
								order={order}
								index={index}
								selectOrder={selectOrder}
								acceptOrder={acceptOrder}
								declineOrder={declineOrder}
							/>
						))}
				</tbody>
			</Table>
		</Stack>
	);
};

const OrderTableHeader = () => {
	return (
		<tr>
			<th>[]</th>
			<th>Row</th>
			<th>Id</th>
			<th>User Id</th>
			<th>Type</th>
			<th>Description</th>
			<th>Status</th>
			<th>Actions</th>
		</tr>
	);
};

const OrderTableRow = ({ order, index, selectOrder, acceptOrder, declineOrder }) => {
	return (
		<tr>
			<td>
				<input type={'checkbox'} onChange={() => selectOrder(order)} />
			</td>
			<td>{index + 1}</td>
			<td>
				<Link to={`/service/orders/${order._id}`}>{order._id}</Link>
			</td>
			<td>
				<Link to={`/service/users/${order.customer_id}`}>{order.customer_id}</Link>
			</td>
			<td>{order.type}</td>
			<td>{order.description}</td>
			<td>{order.status}</td>
			<td>
				<ButtonGroup aria-label='First group'>
					<Button variant='secondary' onClick={() => acceptOrder(order)}>
						Accept
					</Button>
					<Button variant='secondary' onClick={() => declineOrder(order)}>
						Decline
					</Button>
				</ButtonGroup>
			</td>
		</tr>
	);
};

export default Orders;
