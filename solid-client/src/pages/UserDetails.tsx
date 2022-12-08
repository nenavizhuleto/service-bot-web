import { Component, createMemo, Show } from 'solid-js';
import { A, useParams } from '@solidjs/router';
import { User, users } from '../store/users';
import OrdersTable from './OrdersTable';

const UserDetails: Component = () => {
	const { id } = useParams<{ id: string }>();

	const user = createMemo(() => users().find((user) => user.id === id) || ({} as User));

	return (
		<div class='container-fluid'>
			<Show when={user()} fallback={<div>Loading...</div>}>
				<div>
					<h2>User ID: {user().id}</h2>
					<p>
						Username:
						<a
							href={`https://t.me/${user().username}`}
							target='_blank'
							class='btn btn-primary mx-3'
						>
							{' @'}
							{user().username}
						</a>
					</p>
					<p>Fullname: {user().fullname}</p>
					<p>Role: {user().role}</p>
					<p>Language: {user().language}</p>
				</div>
				<OrdersTable user={user} />
			</Show>
		</div>
	);
};

export default UserDetails;
