import { useState } from 'react';

import styled from 'styled-components';

import Modal from '../Modal/Modal';
import Button from '../Ui/Button';
import Container from '../Ui/Container';

function FormControl(props) {
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	const [error, setError] = useState();

	const trackAgeInput = e => setAge(e.target.value);
	const trackUsernameInput = e => setUsername(e.target.value);

	const errorHandler = () => setError(null);
	function formSubmitHandler(e) {
		e.preventDefault();
		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: 'Invalid Input!',
				message: 'Please enter a valid name and age (non-empty values) .',
			});
			return;
		}
		if (+age < 1) {
			setError({
				title: 'Invalid Age!',
				message: 'Please enter a valid age (> 0) .',
			});
			setAge('');
			return;
		}

		props.getResult(age, username);
		setAge('');
		setUsername('');
	}

	return (
		<div>
			{error && (
				<Modal
					title={error.title}
					message={error.message}
					OnConfirm={errorHandler}
				/>
			)}
			<Container>
				<Form onSubmit={formSubmitHandler}>
					<div>
						<label>Username :</label>
						<input
							type="text"
							name="username"
							value={username}
							onChange={trackUsernameInput}
						/>
					</div>
					<div>
						<label>Age (Years) :</label>
						<input
							type="number"
							name="age"
							value={age}
							onChange={trackAgeInput}
						/>
					</div>
					<Button type="submit">Add user</Button>
				</Form>
			</Container>
		</div>
	);
}

export default FormControl;

const Form = styled.form`
	padding: 1rem;
	border-radius: 6px;
	background-color: #dadada;

	& label,
	input {
		display: block;
		margin: 0.5rem 0;
	}

	& label {
		font-weight: 500;
	}

	& input {
		border: none;
		border-radius: 3px;
		width: 100%;
		padding: 0.5rem;
		font-size: 1rem;
		font-family: inherit;
		border-color: #888;
		border-bottom: 2px transparent solid;
	}

	& input:focus {
		outline: none;
		border-color: #444;
	}
`;
