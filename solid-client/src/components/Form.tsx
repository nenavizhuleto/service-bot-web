import { Component } from 'solid-js';

const Form: Component<{ setShowForm: Function }> = ({ setShowForm }) => {
	const close = () => {
		setShowForm(false);
	};
	const submit = (e: MouseEvent) => {
		e.preventDefault();
		close();
	};

	return (
		<form class='row g-3 my-3'>
			<div class='col-auto'>
				<input type='text' class='form-control' value='' placeholder='Username' />
			</div>
			<div class='col-auto'>
				<input type='password' class='form-control' placeholder='Password' />
			</div>
			<div class='col-auto'>
				<select class='form-select form-select mb-3'>
					<option selected>Role</option>
					<option value='manager'>Manager</option>
					<option value='customer'>Customer</option>
				</select>
			</div>

			<div class='col-auto'>
				<button type='submit' class='btn btn-primary mb-3' onClick={(e) => submit(e)}>
					Add
				</button>
			</div>
			<div class='col-auto'>
				<button type='submit' class='btn btn-danger mb-3' onClick={() => close()}>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default Form;
