import { A, useParams } from '@solidjs/router';
import { Component, createMemo, Show } from 'solid-js';
import { Order, orders } from '../store/orders';

const OrderDetails: Component = () => {
	const { id } = useParams<{ id: string }>();

	const order = createMemo(() => orders().find((order) => order._id === id) || ({} as Order));

	return (
		<div class='container-fluid'>
			<Show when={order()} fallback={<div>Loading....</div>}>
				<h2>
					Order ID: {order()._id} <br />
					<small class='text-muted'>
						<A href={`/users/${order().customer_id}`} class='btn btn-primary'>
							Customer: {order().customer_id}
						</A>
					</small>
				</h2>
				<p>Type: {order().type}</p>
				<p>Description: {order().description}</p>
				<p>Status: {order().status}</p>
				<div class='btn-group' role='group'>
					<button type='button' class='btn btn-success'>
						Accept
					</button>
					<button type='button' class='btn btn-danger'>
						Decline
					</button>
				</div>
			</Show>
		</div>
	);
};

export default OrderDetails;
