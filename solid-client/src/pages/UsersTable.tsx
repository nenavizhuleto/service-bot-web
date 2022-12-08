import { Component, createSignal, For, Show } from 'solid-js';
import { A } from '@solidjs/router';
import { users, User } from '../store/users';
import Form from '../components/Form';

const UsersTableRow: Component<{ user: User; index: () => number }> = ({ user, index }) => {
	return (
		<tr>
			<td>{index() + 1}</td>
			<td>
				<A class='btn btn-secondary w-100' href={`/users/${user.id}`}>
					{user.id}
				</A>
			</td>
			<td class='text-truncate'>
				<a href={`https://t.me/${user.username}`} target='_blank' class='btn btn-primary w-100'>
					{' @'}
					{user.username}
				</a>
			</td>
			<td class='text-truncate'>{user.fullname}</td>
			<td>{user.role}</td>
			<td>{user.language}</td>
		</tr>
	);
};

const UsersTable: Component = () => {
	const [showForm, setShowForm] = createSignal(false);

	return (
		<>
			<div>
				<button
					class={`btn btn-primary ${showForm() && 'disabled'}`}
					onClick={() => setShowForm(true)}
				>
					Create User
				</button>
				<Show when={showForm()}>
					<Form setShowForm={setShowForm} />
				</Show>
			</div>
			<hr />
			<table class='table table-dark'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>ID</th>
						<th scope='col'>Username</th>
						<th scope='col'>Fullname</th>
						<th scope='col'>Role</th>
						<th scope='col'>Language</th>
					</tr>
				</thead>
				<tbody>
					<For each={users()}>{(user, index) => <UsersTableRow user={user} index={index} />}</For>
				</tbody>
			</table>
		</>
	);
};

export default UsersTable;
