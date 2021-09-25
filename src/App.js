import React, { useState } from 'react';
import FormControl from './Component/Form/Form';
import ResultsList from './Component/ShowResults/ResultsList';

function App() {
	const USERS = JSON.parse(localStorage.getItem('data')) || [];
	const [user, setUsers] = useState(USERS);

	function getData(age, username) {
		setUsers(prev => {
			localStorage.setItem(
				'data',
				JSON.stringify([
					{ age, username, id: Math.random().toString() },
					...prev,
				])
			);

			return [{ age, username, id: Math.random().toString() }, ...prev];
		});
	}

	function removeElement(id) {
		setUsers(prev => {
			const x = prev.filter(result => result.id !== id);
			localStorage.setItem('data', JSON.stringify(x));
			return x;
		});
	}

	return (
		<div>
			<FormControl getResult={getData} />
			<ResultsList displayData={user} removeElement={removeElement} />
		</div>
	);
}

export default App;
